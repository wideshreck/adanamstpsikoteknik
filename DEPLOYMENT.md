# Google Cloud VM Deployment Rehberi

## 1. Google Cloud VM Oluşturma

### VM Özellikleri
- **İşletim Sistemi**: Ubuntu 22.04 LTS
- **Makine Tipi**: e2-micro veya e2-small (başlangıç için yeterli)
- **Disk**: 10-20 GB Standard Persistent Disk
- **Firewall**: HTTP ve HTTPS trafiğine izin ver

### VM Oluşturma Adımları
1. Google Cloud Console > Compute Engine > VM Instances
2. "Create Instance" tıklayın
3. Ayarları yapın ve "Create" tıklayın
4. VM'in external IP adresini not alın

## 2. VM'e Bağlanma

SSH ile bağlanın:
```bash
# Google Cloud Console'dan SSH ile bağlanabilirsiniz
# veya gcloud CLI kullanın:
gcloud compute ssh [VM-ADI] --zone=[ZONE]
```

## 3. VM'de Gerekli Kurulumlar

### Node.js ve npm Kurulumu
```bash
# Node.js 20.x kurulumu
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Versiyonları kontrol edin
node --version
npm --version
```

### PM2 Kurulumu (Process Manager)
```bash
sudo npm install -g pm2
```

### Git Kurulumu (opsiyonel)
```bash
sudo apt-get update
sudo apt-get install -y git
```

## 4. Projeyi VM'e Yükleme

### Yöntem 1: Git ile (Önerilen)
```bash
# Projenizi GitHub'a push edin ve VM'de clone edin
git clone [GITHUB-URL]
cd adanamstpsikoteknik
```

### Yöntem 2: SCP ile Dosya Transferi
Lokal bilgisayarınızdan:
```bash
# Önce projeyi zip'leyin
cd C:\Users\orcun\Desktop
tar -czf adanamstpsikoteknik.tar.gz adanamstpsikoteknik

# VM'e yükleyin
gcloud compute scp adanamstpsikoteknik.tar.gz [VM-ADI]:~ --zone=[ZONE]

# VM'de açın
ssh [VM-ADI]
tar -xzf adanamstpsikoteknik.tar.gz
cd adanamstpsikoteknik
```

## 5. Proje Kurulumu ve Build

```bash
# Bağımlılıkları yükleyin
npm install

# Production build alın
npm run build

# Build sonrası .next klasörü oluşacak
```

## 6. Uygulamayı Başlatma

### PM2 ile Başlatma
```bash
# PM2 ile uygulamayı başlatın
pm2 start ecosystem.config.js

# PM2'yi sistem başlangıcına ekleyin
pm2 startup
pm2 save

# Durumu kontrol edin
pm2 status
pm2 logs
```

### Manuel Başlatma (Test için)
```bash
npm start
# Uygulama 3000 portunda çalışacak
```

## 7. Firewall Ayarları

### Google Cloud Firewall Rule Oluşturma
```bash
# 3000 portunu açın
gcloud compute firewall-rules create allow-3000 \
    --allow tcp:3000 \
    --source-ranges 0.0.0.0/0 \
    --description "Allow port 3000 for Next.js"
```

veya Google Cloud Console'dan:
1. VPC Network > Firewall
2. "Create Firewall Rule"
3. Ayarlar:
   - Name: `allow-3000`
   - Targets: All instances in the network
   - Source IP ranges: `0.0.0.0/0`
   - Protocols and ports: `tcp:3000`

## 8. Erişim

Tarayıcınızdan:
```
http://[VM-EXTERNAL-IP]:3000
```

## 9. Nginx ile Port 80'e Yönlendirme (Opsiyonel)

Port numarası olmadan erişmek isterseniz:

```bash
# Nginx kurulumu
sudo apt-get install -y nginx

# Nginx konfigürasyonu
sudo nano /etc/nginx/sites-available/default
```

Aşağıdaki konfigürasyonu ekleyin:
```nginx
server {
    listen 80;
    server_name _;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
# Nginx'i test edin ve başlatın
sudo nginx -t
sudo systemctl restart nginx

# Artık http://[VM-EXTERNAL-IP] ile erişebilirsiniz
```

## 10. PM2 Komutları

```bash
# Uygulamayı durdur
pm2 stop adanamstpsikoteknik

# Uygulamayı yeniden başlat
pm2 restart adanamstpsikoteknik

# Logları göster
pm2 logs

# Tüm uygulamaları listele
pm2 list

# PM2'yi durdur
pm2 kill
```

## 11. Güncelleme Yapmak İçin

```bash
# VM'e SSH ile bağlanın
cd adanamstpsikoteknik

# Değişiklikleri çekin (Git kullanıyorsanız)
git pull

# Veya yeni dosyaları SCP ile yükleyin

# Bağımlılıkları güncelleyin
npm install

# Yeniden build alın
npm run build

# Uygulamayı yeniden başlatın
pm2 restart adanamstpsikoteknik
```

## Sorun Giderme

### Uygulama çalışmıyor
```bash
pm2 logs
pm2 status
```

### Port zaten kullanılıyor
```bash
sudo lsof -i :3000
sudo kill -9 [PID]
```

### Firewall sorunu
```bash
# Google Cloud firewall rule'ları kontrol edin
gcloud compute firewall-rules list
```

## Maliyet Optimizasyonu

- e2-micro instance ücretsiz tier'a dahil (aylık 744 saat)
- Kullanmadığınızda VM'i durdurun:
  ```bash
  gcloud compute instances stop [VM-ADI] --zone=[ZONE]
  ```
- Yeniden başlatmak için:
  ```bash
  gcloud compute instances start [VM-ADI] --zone=[ZONE]
  ```

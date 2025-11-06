import Image from 'next/image';

export default function Office() {
  return (
    <section id="ofisimiz" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Başlık ve Açıklama */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">
            Tesislerimiz
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-slate-600 leading-relaxed">
              <span className="font-semibold">Sağlık Bakanlığı onaylı</span> kurumumuz, Adana'da ticari araç sürücülerine
              <span className="font-semibold"> 1 saatlik simülasyon testi</span> sonrası hızlı psikoteknik belgesi hizmeti sunmaktadır.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mt-3">
              <span className="font-semibold">Adana Şoförler Odası bitişiğindeki</span> merkezimize bekliyoruz.
              Kolay ulaşım ve ekonomik fiyatlar ile sizlerleyiz.
            </p>
          </div>
        </div>

        {/* Ofis Görselleri - Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Ana Ofis Görseli - Geniş */}
          <div className="lg:col-span-2 relative h-96 rounded-lg overflow-hidden group">
            <Image
              src="/office1.jpeg"
              alt="Adana MST Psikoteknik Ofis - Modern Tesisimiz"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent flex items-end p-8">
              <div className="text-white">
                <h3 className="text-2xl font-bold mb-2">Modern Tesisimiz</h3>
                <p className="text-white/90">Konforlu ve profesyonel test ortamı</p>
              </div>
            </div>
          </div>

          {/* Test Cihazı */}
          <div className="relative h-96 rounded-lg overflow-hidden group">
            <Image
              src="/machine1.jpeg"
              alt="Psikoteknik Test Cihazı - Modern Ekipman"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent flex items-end p-6">
              <div className="text-white">
                <h4 className="text-xl font-bold mb-2">Modern Cihazlar</h4>
                <p className="text-white/90 text-sm">Son teknoloji ekipmanlar</p>
              </div>
            </div>
          </div>

          {/* İkinci Ofis Görseli */}
          <div className="relative h-80 rounded-lg overflow-hidden group">
            <Image
              src="/office2.jpeg"
              alt="Psikoteknik Test Odası"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent flex items-end p-6">
              <div className="text-white">
                <h4 className="text-xl font-bold mb-2">Test Odaları</h4>
                <p className="text-white/90 text-sm">Rahat ve sessiz test alanları</p>
              </div>
            </div>
          </div>

          {/* Üçüncü Ofis Görseli */}
          <div className="lg:col-span-2 relative h-80 rounded-lg overflow-hidden group">
            <Image
              src="/office3.jpeg"
              alt="Adana MST Psikoteknik Merkezi"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent flex items-end p-6">
              <div className="text-white">
                <h4 className="text-xl font-bold mb-2">Merkezi Konumumuz</h4>
                <p className="text-white/90 text-sm">Adana Şoförler Odası bitişiği - Kolay ulaşım</p>
              </div>
            </div>
          </div>
        </div>

        {/* Alt Bilgi Kartları */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          <div className="bg-white rounded-lg p-6 border border-slate-200 text-center">
            <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h5 className="font-bold text-slate-900 mb-2">Sağlık Bakanlığı</h5>
            <p className="text-slate-600 text-sm">Onaylı Merkez</p>
          </div>

          <div className="bg-white rounded-lg p-6 border border-slate-200 text-center">
            <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h5 className="font-bold text-slate-900 mb-2">1 Saat</h5>
            <p className="text-slate-600 text-sm">Simülasyon Testi</p>
          </div>

          <div className="bg-white rounded-lg p-6 border border-slate-200 text-center">
            <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h5 className="font-bold text-slate-900 mb-2">Kolay Ulaşım</h5>
            <p className="text-slate-600 text-sm">Merkezi Konum</p>
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo ve Açıklama */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <div className="relative w-12 h-12">
                <Image
                  src="/logo.png"
                  alt="Adana MST Psikoteknik Logo"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-xl">
                  Adana MST
                </span>
                <span className="text-slate-400 font-semibold text-sm">
                  Psikoteknik
                </span>
              </div>
            </Link>
            <p className="text-slate-400 max-w-md leading-relaxed">
              Adana'da güvenilir psikoteknik test hizmeti sunuyoruz.
              Güvenli sürüş için profesyonel değerlendirme.
            </p>
          </div>

          {/* Hızlı Linkler */}
          <div>
            <h3 className="font-bold mb-4 text-white">Hızlı Linkler</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#anasayfa" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link href="#hizmetler" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Hizmetlerimiz
                </Link>
              </li>
              <li>
                <Link href="#hakkimizda" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="#iletisim" className="text-slate-400 hover:text-white transition-colors text-sm">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h3 className="font-bold mb-4 text-white">İletişim</h3>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+905558943872" className="hover:text-white transition-colors">
                  +90 555 894 38 72
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:adanamstpsikoteknik@gmail.com" className="hover:text-white transition-colors break-all">
                  adanamstpsikoteknik@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="leading-relaxed">Emek, 41004. Sk. No:8 Kat:1<br />01280 Seyhan/Adana</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Alt Çizgi ve Copyright */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © {currentYear} Adana MST Psikoteknik. Tüm hakları saklıdır.
            </p>
            <div className="flex gap-4 text-sm text-slate-500">
              <Link href="#" className="hover:text-white transition-colors">
                Gizlilik Politikası
              </Link>
              <span>•</span>
              <Link href="#" className="hover:text-white transition-colors">
                Kullanım Şartları
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

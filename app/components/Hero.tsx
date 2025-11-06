import Link from 'next/link';

export default function Hero() {
  return (
    <section id="anasayfa" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">
      {/* Minimal Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-slate-100 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Sol taraf - Metin içeriği */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-slate-50 px-5 py-2.5 rounded-md border border-slate-200">
              <div className="w-2 h-2 bg-slate-700 rounded-full"></div>
              <span className="text-slate-700 font-medium text-sm">Sağlık Bakanlığı Onaylı</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.15] tracking-tight">
                Profesyonel Psikoteknik
                <span className="block mt-2 text-slate-700">
                  Değerlendirme Merkezi
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-xl">
                Adana'da güvenilir psikoteknik test hizmeti. Uzman psikologlar eşliğinde
                <span className="text-slate-900 font-medium"> aynı gün rapor teslimatı.</span>
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#iletisim"
                className="group relative bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg inline-flex items-center justify-center gap-2"
              >
                <span>Randevu Al</span>
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
              <Link
                href="tel:+905558943872"
                className="group bg-slate-50 hover:bg-slate-100 text-slate-900 border border-slate-200 px-8 py-4 rounded-lg font-semibold transition-all duration-200 inline-flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+90 555 894 38 72</span>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200">
              <div>
                <div className="text-2xl font-bold text-slate-900 mb-1">Aynı Gün</div>
                <div className="text-sm text-slate-600">Rapor Teslimatı</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900 mb-1">Bakanlık</div>
                <div className="text-sm text-slate-600">Onaylı</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900 mb-1">Uzman</div>
                <div className="text-sm text-slate-600">Psikologlar</div>
              </div>
            </div>
          </div>

          {/* Sağ taraf - İstatistikler */}
          <div className="relative lg:pl-12">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <div className="text-3xl font-bold text-slate-900 mb-2">B, C, D, E</div>
                <div className="text-sm text-slate-600">Sınıfları</div>
              </div>
              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <div className="text-3xl font-bold text-slate-900 mb-2">SRC</div>
                <div className="text-sm text-slate-600">Belgesi</div>
              </div>
              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <div className="text-3xl font-bold text-slate-900 mb-2">1 Saat</div>
                <div className="text-sm text-slate-600">Test Süresi</div>
              </div>
              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <div className="text-3xl font-bold text-slate-900 mb-2">e-Devlet</div>
                <div className="text-sm text-slate-600">Entegre</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

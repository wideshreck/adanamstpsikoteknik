export default function About() {
  return (
    <section id="hakkimizda" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Sol taraf - İçerik */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
                Adana MST Psikoteknik
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Sağlık Bakanlığı onaylı profesyonel psikoteknik değerlendirme merkezi
              </p>
            </div>

            <div className="space-y-4 text-base text-slate-700 leading-relaxed">
              <p>
                Adana MST Psikoteknik olarak, sürücü adaylarının ve profesyonel sürücülerin
                güvenli bir şekilde trafiğe katılmaları için gerekli psikoteknik değerlendirmeleri
                en yüksek standartlarda gerçekleştiriyoruz.
              </p>
              <p>
                Uzman psikolog kadromuz ve modern test ekipmanlarımızla, her yaştan bireye
                rahat ve güvenilir bir test ortamı sunuyoruz. Aynı gün rapor teslimatı ile
                hızlı ve doğru sonuçlar veriyoruz.
              </p>
            </div>

            {/* Özellikler */}
            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Bakanlık Onaylı</h4>
                  <p className="text-sm text-slate-600">Resmi onaylı psikoteknik merkezi</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Hızlı Sonuç</h4>
                  <p className="text-sm text-slate-600">Aynı gün rapor teslimatı</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Uzman Kadro</h4>
                  <p className="text-sm text-slate-600">Deneyimli psikologlar</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Modern Cihazlar</h4>
                  <p className="text-sm text-slate-600">Güncel test ekipmanları</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sağ taraf - İstatistikler */}
          <div className="relative">
            <div className="bg-slate-50 rounded-lg p-10 space-y-6 border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Neden Bizi Tercih Etmelisiniz?
              </h3>

              <div className="space-y-6">
                <div className="border-l-4 border-slate-900 pl-6 py-2">
                  <div className="text-3xl font-bold text-slate-900 mb-1">Bakanlık</div>
                  <p className="text-slate-700">Onaylı Merkez</p>
                </div>

                <div className="border-l-4 border-slate-700 pl-6 py-2">
                  <div className="text-3xl font-bold text-slate-900 mb-1">Uzman</div>
                  <p className="text-slate-700">Psikolog Kadrosu</p>
                </div>

                <div className="border-l-4 border-slate-700 pl-6 py-2">
                  <div className="text-3xl font-bold text-slate-900 mb-1">Modern</div>
                  <p className="text-slate-700">Test Ekipmanları</p>
                </div>

                <div className="border-l-4 border-slate-700 pl-6 py-2">
                  <div className="text-3xl font-bold text-slate-900 mb-1">Anında</div>
                  <p className="text-slate-700">Rapor Teslimatı</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

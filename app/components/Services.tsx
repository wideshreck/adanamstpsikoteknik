export default function Services() {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Sürücü Belgesi Psikoteknik",
      description: "B, C, D, E sınıfı sürücü belgeleri için psikoteknik test ve rapor hizmeti. Aynı gün sonuç garantisi.",
      features: ["Tüm sınıflar için", "Aynı gün sonuç", "e-Devlet entegrasyonu"],
      color: "slate"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "SRC Belgesi",
      description: "Profesyonel yetki belgesi (SRC) için psikoteknik değerlendirme. İlk başvuru ve yenileme işlemleri.",
      features: ["İlk başvuru", "Yenileme işlemleri", "Onaylı rapor"],
      color: "blue"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Esnek Randevu",
      description: "Randevu sistemi ile bekleme yaşamadan, size uygun saatte test olma imkanı.",
      features: ["Hızlı rezervasyon", "Esnek saatler", "Hafta sonu hizmet"],
      color: "amber"
    }
  ];

  const getColorClasses = () => {
    return {
      icon: "bg-slate-100 text-slate-700",
      badge: "bg-slate-100 text-slate-700"
    };
  };

  return (
    <section id="hizmetler" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Başlık */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">
            Hizmetlerimiz
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Sağlık Bakanlığı standartlarında profesyonel psikoteknik değerlendirme
          </p>
        </div>

        {/* Hizmet Kartları */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => {
            const colors = getColorClasses();
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-8 border border-slate-200 hover:border-slate-300 transition-all duration-200"
              >
                <div className={`w-14 h-14 ${colors.icon} rounded-lg flex items-center justify-center mb-6`}>
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>

                <p className="text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <div className={`w-5 h-5 rounded-full ${colors.badge} flex items-center justify-center flex-shrink-0`}>
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Süreç Bilgisi */}
        <div className="bg-slate-900 rounded-lg p-10 sm:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl sm:text-4xl font-bold leading-tight">
                Psikoteknik Test Süreci
              </h3>
              <p className="text-lg text-slate-300 leading-relaxed">
                Randevunuzu alın veya doğrudan gelin. Uzman psikologlarımız eşliğinde testlerinizi tamamlayın.
                Raporunuz aynı gün e-Devlet sisteminde.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href="#iletisim"
                  className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-all"
                >
                  Randevu Al
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <a
                  href="tel:+905558943872"
                  className="inline-flex items-center justify-center gap-2 bg-slate-800 text-white border border-slate-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-700 transition-all"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +90 555 894 38 72
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-800 rounded-lg p-6 text-center border border-slate-700">
                <div className="text-3xl font-bold mb-2">1 Saat</div>
                <div className="text-sm text-slate-400">Test Süresi</div>
              </div>
              <div className="bg-slate-800 rounded-lg p-6 text-center border border-slate-700">
                <div className="text-3xl font-bold mb-2">Anında</div>
                <div className="text-sm text-slate-400">Rapor Süresi</div>
              </div>
              <div className="bg-slate-800 rounded-lg p-6 text-center border border-slate-700">
                <div className="text-3xl font-bold mb-2">7/24</div>
                <div className="text-sm text-slate-400">e-Devlet</div>
              </div>
              <div className="bg-slate-800 rounded-lg p-6 text-center border border-slate-700">
                <div className="text-3xl font-bold mb-2">Onaylı</div>
                <div className="text-sm text-slate-400">Bakanlık</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

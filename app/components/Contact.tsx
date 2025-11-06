export default function Contact() {
  return (
    <section id="iletisim" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Başlık */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">
            İletişim
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Randevu almak veya bilgi almak için bize ulaşın
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* İletişim Bilgileri */}
          <div className="space-y-8">
            <div className="bg-slate-900 rounded-lg p-10 text-white">
              <h3 className="text-2xl font-bold mb-8">İletişim Bilgileri</h3>

              <div className="space-y-6">
                {/* Telefon */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Telefon</h4>
                    <a href="tel:+905558943872" className="text-slate-300 hover:text-white transition-colors">
                      +90 555 894 38 72
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">E-posta</h4>
                    <a href="mailto:adanamstpsikoteknik@gmail.com" className="text-slate-300 hover:text-white transition-colors break-all">
                      adanamstpsikoteknik@gmail.com
                    </a>
                  </div>
                </div>

                {/* Adres */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Adres</h4>
                    <p className="text-slate-300 leading-relaxed">
                      Emek, 41004. Sk. No:8 Kat:1 İç Kapı No:1<br />
                      01280 Seyhan/Adana
                    </p>
                  </div>
                </div>

                {/* Çalışma Saatleri */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Çalışma Saatleri</h4>
                    <p className="text-slate-300">
                      Pazartesi - Cumartesi<br />
                      08:00 - 19:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="bg-slate-200 rounded-lg h-96 overflow-hidden border border-slate-300">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3186.6568812380037!2d35.29933938982019!3d36.99412258563745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1528898ebe3c927f%3A0xa6736dc663e42776!2sAdana%20MST%20Psikoteknik%20De%C4%9Ferlendirme%20Merkezi%2C%20Adana%20Psikoteknik%2C%20Adana%20Psikoteknik%20Raporu!5e0!3m2!1str!2sus!4v1762090789854!5m2!1str!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Adana MST Psikoteknik Konum"
              ></iframe>
            </div>
          </div>

          {/* İletişim Formu */}
          <div className="bg-slate-50 rounded-lg p-10 border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Mesaj Gönderin
            </h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-slate-900 font-medium mb-2">
                  Ad Soyad
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/20 outline-none transition-all"
                  placeholder="Adınız ve soyadınız"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-slate-900 font-medium mb-2">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/20 outline-none transition-all"
                  placeholder="0555 123 45 67"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-slate-900 font-medium mb-2">
                  E-posta
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/20 outline-none transition-all"
                  placeholder="ornek@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-slate-900 font-medium mb-2">
                  Mesajınız
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/20 outline-none transition-all resize-none"
                  placeholder="Mesajınızı buraya yazın..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-lg font-semibold transition-all hover:shadow-lg"
              >
                Mesaj Gönder
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

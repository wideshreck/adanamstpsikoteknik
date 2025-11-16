export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 flex items-center justify-center">
      <div className="text-center space-y-4">
        {/* Animated Logo Placeholder */}
        <div className="relative mx-auto w-20 h-20">
          <div className="absolute inset-0 bg-slate-200 rounded-full animate-ping opacity-25"></div>
          <div className="relative bg-gradient-to-br from-slate-700 to-slate-900 rounded-full w-20 h-20 animate-pulse flex items-center justify-center">
            <span className="text-white text-2xl font-bold">MST</span>
          </div>
        </div>

        {/* Loading Text */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-slate-900 animate-fadeIn">
            Yükleniyor...
          </h2>
          <p className="text-slate-600 animate-fadeIn animation-delay-100">
            Lütfen bekleyiniz
          </p>
        </div>

        {/* Loading Bar */}
        <div className="w-48 h-1 bg-slate-200 rounded-full mx-auto overflow-hidden">
          <div className="h-full bg-gradient-to-r from-slate-600 to-slate-800 rounded-full animate-loading-bar"></div>
        </div>
      </div>
    </div>
  );
}
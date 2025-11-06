'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Ana Sayfa', href: '#anasayfa' },
    { label: 'Hizmetlerimiz', href: '#hizmetler' },
    { label: 'Hakkımızda', href: '#hakkimizda' },
    { label: 'İletişim', href: '#iletisim' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/98 backdrop-blur-sm shadow-sm z-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14">
              <Image
                src="/logo.png"
                alt="Adana MST Psikoteknik Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-slate-900 font-bold text-lg sm:text-xl">
                Adana MST
              </span>
              <span className="text-slate-600 font-semibold text-xs sm:text-sm">
                Psikoteknik
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-slate-700 hover:text-slate-900 font-medium transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-900 transition-all group-hover:w-full"></span>
              </Link>
            ))}
            <Link
              href="#iletisim"
              className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-2.5 rounded-lg font-semibold transition-all hover:shadow-lg"
            >
              Randevu Al
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Menü"
          >
            <svg
              className="w-6 h-6 text-slate-900"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <div className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-slate-700 hover:text-slate-900 font-medium py-2 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="#iletisim"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-semibold transition-all text-center"
              >
                Randevu Al
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

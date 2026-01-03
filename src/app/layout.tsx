"use client";

import type { Metadata } from "next";
import { IM_Fell_Double_Pica } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import "./globals.css";

const imFellDoublePica = IM_Fell_Double_Pica({
  variable: "--font-im-fell-double-pica",
  subsets: ["latin"],
  weight: ["400"],
});

const navItems = [
  { href: "/", label: "Home" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <html lang="en">
      <body className={`px-3 ${imFellDoublePica.variable} antialiased`}>
        <header className="w-full bg-background/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
          <div className="max-w-5xl mx-auto py-4 flex items-center justify-between">
            <Link href="/" className="text-xl font-semibold text-foreground">
              Lenscape
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <ul className="flex gap-6 items-center">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="hover:underline">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Desktop Book Button */}
            <a className="hidden md:block px-4 py-2 bg-stone-800 text-[rgb(255,251,244)] font-im-fell-double-pica text-sm tracking-wide hover:bg-stone-700 transition-all duration-300 shadow-sm hover:shadow-md" href="https://docs.google.com/forms/d/e/1FAIpQLSc9BB6GobF0SZtveCfMxI4sGimjrXnBAqqGMti1itTiDctyKw/viewform"
              target="_blank">
                Book a Session
              </a>

            {/* Mobile Hamburger Button */}
            <button
              className="md:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
            <nav className="px-4 pb-4">
              <ul className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link 
                      href={item.href} 
                      className="block hover:underline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <a 
                    className="block w-full text-center px-4 py-2 bg-stone-800 text-[rgb(255,251,244)] font-im-fell-double-pica text-sm tracking-wide hover:bg-stone-700 transition-all duration-300 shadow-sm hover:shadow-md" 
                    href="https://docs.google.com/forms/d/e/1FAIpQLSc9BB6GobF0SZtveCfMxI4sGimjrXnBAqqGMti1itTiDctyKw/viewform"
                    target="_blank"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Book a Session
                  </a>
                </li>
              </ul>
            </nav>
          </div>

        </header>

        <main className="max-w-5xl mx-auto">{children}</main>
      </body>
    </html>
  );
}

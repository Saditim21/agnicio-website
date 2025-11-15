import { useState } from 'react';
import agnicioLogo from '../assets/about-us/agnicio-logo.webp';

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: 'Products', href: '/products' },
  { label: 'Services', href: '/services' },
  { label: 'Blog', href: '/blog' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/#contact' },
];

export function GlobalNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-grayLine">
      {/* Logo - Positioned at top-left */}
      <div className="absolute left-6 md:left-8 lg:left-12 top-1/2 -translate-y-1/2 z-10">
        <a
          href="/"
          className="flex items-center hover:opacity-80 transition-opacity duration-200"
        >
          <img
            src={agnicioLogo}
            alt="Agnicio"
            className="h-10 md:h-12 w-auto"
          />
        </a>
      </div>

      {/* CTA Button - Positioned at top-right */}
      <div className="hidden lg:block absolute right-6 md:right-8 lg:right-12 top-1/2 -translate-y-1/2 z-10">
        <a
          href="/#contact"
          className="px-8 py-3 bg-primary text-white text-base font-medium rounded-md hover:bg-primaryDark transition-colors duration-200"
        >
          Get Started
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
        <div className="flex items-center h-20">
          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center justify-center flex-1 space-x-10 w-full">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-base font-medium text-ink hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden ml-auto">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-ink hover:text-primary transition-colors duration-200"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              <svg
                className="w-7 h-7"
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
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-grayLine">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-6 py-4 text-base font-medium text-ink hover:text-primary hover:bg-grayBg transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}

            {/* Mobile CTA */}
            <a
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block mx-6 mt-4 px-8 py-4 bg-primary text-white text-center text-base font-medium rounded-md hover:bg-primaryDark transition-colors duration-200"
            >
              Get Started
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

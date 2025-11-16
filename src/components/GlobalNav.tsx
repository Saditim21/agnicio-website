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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo - Left side */}
          <div className="flex-shrink-0">
            <a
              href="/"
              className="flex items-center hover:opacity-80 transition-opacity duration-200"
            >
              <img
                src={agnicioLogo}
                alt="Agnicio"
                className="h-8 sm:h-10 md:h-12 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center justify-center flex-1 space-x-10">
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

          {/* Desktop CTA Button - Right side */}
          <div className="hidden lg:flex flex-shrink-0">
            <a
              href="/#contact"
              className="px-6 sm:px-8 py-2.5 sm:py-3 bg-primary text-white text-sm sm:text-base font-medium rounded-md hover:bg-primaryDark transition-colors duration-200"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button - Right side */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-ink hover:text-primary transition-colors duration-200 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              <svg
                className="w-6 h-6 sm:w-7 sm:h-7"
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
      </div>

      {/* Mobile Menu - Below the main nav bar */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-grayLine">
          <div className="px-4 sm:px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-base font-medium text-ink hover:text-primary hover:bg-grayBg transition-colors duration-200 rounded-md min-h-[44px] flex items-center"
              >
                {link.label}
              </a>
            ))}

            {/* Mobile CTA */}
            <a
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block mt-4 px-6 py-3 bg-primary text-white text-center text-base font-medium rounded-md hover:bg-primaryDark transition-colors duration-200 min-h-[44px] flex items-center justify-center"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

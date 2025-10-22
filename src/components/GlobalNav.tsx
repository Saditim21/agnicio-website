import { useState, useRef, useEffect } from 'react';

interface DropdownItem {
  label: string;
  href: string;
}

interface NavLink {
  label: string;
  href: string;
  dropdown?: DropdownItem[];
}

const navLinks: NavLink[] = [
  {
    label: 'Products',
    href: '#products',
    dropdown: [
      { label: 'AI Driven Maintenance and Planning', href: '/products/ai-maintenance' },
      { label: 'Demand Sensing', href: '/products/demand-sensing' },
    ],
  },
  {
    label: 'Services',
    href: '#services',
    dropdown: [
      { label: 'AI', href: '/services/ai' },
      { label: 'Data Strategy', href: '/services/data-strategy' },
      { label: 'Data Engineering', href: '/services/data-engineering' },
      { label: 'Azure CC', href: '/services/azure-cc' },
    ],
  },
  { label: 'Blog', href: '/blog' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '#contact' },
];

export function GlobalNav() {
  const [activeLink, setActiveLink] = useState<string>('');
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeTimeoutRef = useRef<number | null>(null);

  const handleMouseEnter = (label: string) => {
    // Clear any pending close timeout
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    // Add a delay before closing to allow mouse movement to dropdown
    closeTimeoutRef.current = window.setTimeout(() => {
      setOpenDropdown(null);
    }, 300); // 300ms delay
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-surface/95 backdrop-blur-sm border-b border-neutral-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="/"
              className="text-h5 font-heading font-bold text-neutral-text-primary hover:text-primary transition-colors duration-250"
            >
              Agnicio
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.dropdown && handleMouseEnter(link.label)}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href={link.href}
                  onClick={() => setActiveLink(link.label)}
                  className={`
                    relative font-body text-body font-medium
                    transition-all duration-150 ease-in-out
                    hover:scale-110 hover:text-primary
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
                    flex items-center gap-1
                    ${
                      activeLink === link.label
                        ? 'text-primary'
                        : 'text-neutral-text-secondary'
                    }
                  `}
                  style={{
                    transformOrigin: 'center',
                  }}
                >
                  {link.label}
                  {link.dropdown && (
                    <svg
                      className={`w-4 h-4 transition-transform duration-150 ${
                        openDropdown === link.label ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </a>

                {/* Dropdown Menu */}
                {link.dropdown && openDropdown === link.label && (
                  <div
                    className="
                      absolute top-full left-0 mt-2
                      bg-neutral-surface
                      border-2 border-neutral-border
                      rounded-lg shadow-lg
                      min-w-[250px]
                      animate-slide-in
                    "
                    style={{ animationDuration: '150ms' }}
                    onMouseEnter={() => handleMouseEnter(link.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {link.dropdown.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="
                          block px-4 py-3
                          font-body text-body text-neutral-text-secondary
                          hover:bg-primary-lightest hover:text-primary
                          transition-all duration-150
                          first:rounded-t-lg last:rounded-b-lg
                        "
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="
                px-6 py-2.5
                bg-primary text-white font-body font-medium rounded-lg
                shadow-sm hover:shadow-md hover:bg-primary-hover
                active:bg-primary-active
                transition-all duration-250 ease-in-out
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
              "
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-text-primary hover:text-primary transition-colors duration-150"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              <svg
                className="w-6 h-6"
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
          <div className="md:hidden py-4 border-t border-neutral-border animate-slide-in">
            {navLinks.map((link) => (
              <div key={link.label} className="mb-2">
                <a
                  href={link.href}
                  onClick={() => {
                    setActiveLink(link.label);
                    if (!link.dropdown) setMobileMenuOpen(false);
                  }}
                  className="
                    block px-4 py-2
                    font-body text-body font-medium text-neutral-text-secondary
                    hover:text-primary hover:bg-primary-lightest
                    rounded-lg
                    transition-all duration-150
                  "
                >
                  {link.label}
                </a>

                {/* Mobile Dropdown */}
                {link.dropdown && (
                  <div className="ml-4 mt-2 space-y-1">
                    {link.dropdown.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="
                          block px-4 py-2
                          font-body text-body-sm text-neutral-text-tertiary
                          hover:text-primary hover:bg-primary-lightest
                          rounded-lg
                          transition-all duration-150
                        "
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile CTA */}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="
                block mx-4 mt-4 px-6 py-3
                bg-primary text-white text-center font-body font-medium rounded-lg
                shadow-sm hover:shadow-md hover:bg-primary-hover
                transition-all duration-250 ease-in-out
              "
            >
              Get Started
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

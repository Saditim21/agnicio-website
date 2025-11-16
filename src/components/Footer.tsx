import { Link } from 'react-router-dom';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B2A4A] text-white py-12 sm:py-16 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-12">
          {/* Company */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white">Agnicio</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Empowering organizations with intelligent solutions
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-sm sm:text-base font-semibold mb-3 sm:mb-4 text-white">Useful links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" onClick={scrollToTop} className="text-sm text-gray-300 hover:text-white transition-colors duration-200">About Us</Link></li>
              <li><Link to="/contact" onClick={scrollToTop} className="text-sm text-gray-300 hover:text-white transition-colors duration-200">Contact Us</Link></li>
              <li><Link to="/products" onClick={scrollToTop} className="text-sm text-gray-300 hover:text-white transition-colors duration-200">Products</Link></li>
              <li><Link to="/services" onClick={scrollToTop} className="text-sm text-gray-300 hover:text-white transition-colors duration-200">Services</Link></li>
              <li><Link to="/blog" onClick={scrollToTop} className="text-sm text-gray-300 hover:text-white transition-colors duration-200">Blog</Link></li>
            </ul>
          </div>

          {/* Our Contacts */}
          <div>
            <h4 className="text-sm sm:text-base font-semibold mb-3 sm:mb-4 text-white">Our contacts</h4>
            <ul className="space-y-2 sm:space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Millennium Tower, Weena, 3012 CN Rotterdam</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M3 8l7.89 3.26a2 2 0 001.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@agnicio.com" className="hover:text-white transition-colors duration-200">info@agnicio.com</a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <a href="https://www.linkedin.com/company/the-bi-company/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">Follow us on LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-xs sm:text-sm text-gray-400 text-center sm:text-left">
              © Agnicio. All Rights Reserved 2024.
            </p>
            <a
              href="https://www.linkedin.com/company/the-bi-company/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs sm:text-sm text-gray-300 hover:text-white transition-colors duration-200 min-h-[44px]"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

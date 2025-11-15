export function Footer() {
  return (
    <footer className="bg-[#0B2A4A] text-white py-16 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Agnicio</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Empowering organizations with intelligent solutions
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-base font-semibold mb-4 text-white">Useful links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-sm text-gray-300 hover:text-white transition-colors duration-200">About Us</a></li>
              <li><a href="/#contact" className="text-sm text-gray-300 hover:text-white transition-colors duration-200">Contact Us</a></li>
              <li><a href="/products" className="text-sm text-gray-300 hover:text-white transition-colors duration-200">Products</a></li>
              <li><a href="/products/ssp-plan" className="text-sm text-gray-300 hover:text-white transition-colors duration-200">AI Driven Maintenance</a></li>
              <li><a href="/products/ssp-sense" className="text-sm text-gray-300 hover:text-white transition-colors duration-200">Demand Sensing</a></li>
            </ul>
          </div>

          {/* Our Contacts */}
          <div>
            <h4 className="text-base font-semibold mb-4 text-white">Our contacts</h4>
            <ul className="space-y-3 text-sm text-gray-300">
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
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © Agnicio. All Rights Reserved 2024.
          </p>
        </div>
      </div>
    </footer>
  );
}

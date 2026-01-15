import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'À Propos', href: '/a-propos' },
    { 
      name: 'Nos Destinations', 
      href: '/destinations',
      dropdown: [
        { name: 'Maroc', href: '/destinations/maroc' },
        { name: 'Turquie', href: '/destinations/turquie' },
        { name: 'Égypte', href: '/destinations/egypte' },
        { name: 'Dubaï', href: '/destinations/dubai' },
        { name: 'Thaïlande', href: '/destinations/thailande' },
        { name: 'Maldives', href: '/destinations/maldives' },
      ]
    },
    { name: 'Programmes', href: '/programmes' },
    { name: 'Entreprises', href: '/entreprises' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-navy/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2 group">
            <div className="relative w-12 h-12">
              <div className="w-full h-full bg-white rounded-lg flex items-center justify-center text-navy font-bold text-xl group-hover:scale-105 transition-transform">
                T/P+
              </div>
            </div>
            <span className="text-white font-serif text-xl hidden md:block">
              TRAVEL PLUS
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationLinks.map((link) => (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={link.href}
                  className="px-4 py-2 text-white hover:text-gold transition-colors duration-200 font-medium text-sm"
                >
                  {link.name}
                  {link.dropdown && (
                    <svg 
                      className="inline-block ml-1 w-4 h-4 transition-transform group-hover:rotate-180" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </a>

                {/* Dropdown Menu */}
                {link.dropdown && activeDropdown === link.name && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl overflow-hidden animate-slide-down">
                    {link.dropdown.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-6 py-3 text-navy hover:bg-navy hover:text-white transition-colors duration-200 text-sm border-b border-gray-100 last:border-0"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="/devis"
              className="px-6 py-2.5 bg-gold text-white rounded-full font-semibold hover:bg-gold-dark transition-all duration-200 hover:shadow-lg hover:scale-105"
            >
              Devis Gratuit
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-gold transition-colors"
            aria-label="Toggle menu"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-navy-dark rounded-lg mt-2 mb-4 overflow-hidden animate-slide-down">
            {navigationLinks.map((link) => (
              <div key={link.name}>
                <a
                  href={link.href}
                  className="block px-4 py-3 text-white hover:bg-gold hover:text-white transition-colors border-b border-navy-light"
                  onClick={() => !link.dropdown && setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
                {link.dropdown && (
                  <div className="bg-navy-light">
                    {link.dropdown.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-8 py-2 text-white text-sm hover:bg-gold transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        • {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href="/devis"
              className="block mx-4 my-4 px-6 py-3 bg-gold text-white rounded-full text-center font-semibold hover:bg-gold-dark transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Devis Gratuit
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
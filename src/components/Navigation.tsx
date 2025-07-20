import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const serviceItems = [
    { name: 'Videoproduktion för sociala medier & annonser', path: '/videoproduktion' },
    { name: 'Innehåll och publicering på sociala medier', path: '/innehall-publicering' },
    { name: 'Produktfotografering', path: '/produktfotografering' },
    { name: 'Webbdesign & utveckling', path: '/webbdesign' },
    { name: 'SEO & Lokal synlighet', path: '/seo-lokal-synlighet' }
  ];

  const mainNavItems = [
    { name: 'Om Oss', path: '/om-oss' },
    { name: 'Kunder', path: '/kunder' },
    { name: 'Kontakta Oss', path: '/kontakt' }
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-accent/95 backdrop-blur-md shadow-navbar' : 'bg-accent/90'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold tracking-tight text-white">
              Turgomedia
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {/* Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button className="flex items-center space-x-1 font-medium text-white hover:text-primary transition-colors">
                  <span>Tjänster</span>
                  <ChevronDown size={16} className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {dropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-hover border border-border/20 py-2 z-50">
                    {serviceItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block px-4 py-3 text-sm text-foreground hover:bg-muted transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Main Navigation Items */}
              {mainNavItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative font-medium transition-colors hover:text-primary ${
                    location.pathname === item.path ? 'text-primary' : 'text-white'
                  }`}
                >
                  {item.name}
                  {location.pathname === item.path && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full" />
                  )}
                </Link>
              ))}
            </div>

            {/* Right Side - Language & Phone */}
            <div className="hidden lg:flex items-center space-x-6">
              {/* Language Switch */}
              <div className="flex items-center space-x-2">
                <span className="text-primary font-semibold">SV</span>
                <span className="text-white/60">EN</span>
              </div>

              {/* Phone Number */}
              <a 
                href="tel:923214567890" 
                className="flex items-center space-x-2 text-white hover:text-secondary transition-colors"
              >
                <Phone size={18} />
                <span className="text-sm">
                  Ring oss: <span className="font-bold text-secondary">923214567890</span>
                </span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-white hover:text-primary transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden bg-accent/95 backdrop-blur-md`}>
          <div className="container mx-auto px-6 py-4 space-y-4">
            {/* Services */}
            <div>
              <div className="text-white font-semibold mb-3">Tjänster</div>
              {serviceItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 pl-4 text-sm text-white/80 hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Main Items */}
            {mainNavItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block py-3 font-medium transition-colors hover:text-primary ${
                  location.pathname === item.path ? 'text-primary' : 'text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Phone in Mobile */}
            <a 
              href="tel:923214567890" 
              className="flex items-center space-x-2 py-3 text-white hover:text-secondary transition-colors"
            >
              <Phone size={18} />
              <span className="text-sm">
                Ring oss: <span className="font-bold text-secondary">923214567890</span>
              </span>
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navigation;
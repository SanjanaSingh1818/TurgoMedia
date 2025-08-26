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
    { name: 'إنتاج الفيديو لوسائل التواصل الاجتماعي والإعلانات', path: '/videoproduktion' },
    { name: 'المحتوى والنشر على وسائل التواصل الاجتماعي', path: '/innehall-publicering' },
    { name: 'تصوير المنتجات', path: '/produktfotografering' },
    { name: 'تصميم وتطوير المواقع', path: '/webbdesign' },
    { name: 'تحسين محركات البحث والرؤية المحلية', path: '/seo-lokal-synlighet' }
  ];

  const mainNavItems = [
    { name: 'من نحن', path: '#about' },
    { name: 'عملاء', path: '#testimonials' },  // ✅ Changed
    { name: 'تواصل معنا', path: '#instagram' }
  ];

  // 🔥 Scroll handler for section IDs
  const handleNavClick = (path: string) => {
    if (path.startsWith('#')) {
      const element = document.getElementById(path.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-[#5f4c8c] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)]' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              className="text-2xl font-bold tracking-tight text-white hover:text-[#ed9542] transition-colors"
            >
              TurgoMedia
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button className="flex items-center space-x-1 font-medium text-white hover:text-[#ed9542] transition-colors">
                  <span>خدماتنا</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      dropdownOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {dropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-hover border border-border/20 py-2 z-50">
                    {serviceItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block px-4 py-3 text-sm text-black hover:text-[#ed9542] transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Main Navigation Items */}
              {mainNavItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className="relative font-medium transition-colors hover:text-[#ed9542] text-white"
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Right Side */}
            <div className="hidden lg:flex items-center space-x-6">
              {/* 🔥 Google Translate Widget */}
              <div id="google_translate_element" className="ml-4"></div>

              {/* Call Button */}
              <a
                href="tel:+46707944944"
                className="flex items-center space-x-2 text-white hover:text-[#ed9542] transition-colors"
              >
                <Phone size={18} />
                <span className="text-sm">
                  اتصل بنا: <span className="font-bold text-[#ed9542]">+46-707944944</span>
                </span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-white hover:text-[#ed9542] transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 ${
            isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden bg-white/95 backdrop-blur-md`}
        >
          <div className="container mx-auto px-6 py-4 space-y-4">
            <div>
              <div className="text-black font-semibold mb-3">خدماتنا</div>
              {serviceItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 pl-4 text-sm text-black/80 hover:text-[#ed9542] transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {mainNavItems.map((item) => (
              <button
                key={item.path}
                onClick={() => {
                  handleNavClick(item.path);
                  setIsOpen(false);
                }}
                className="block py-3 font-medium transition-colors hover:text-[#ed9542] text-black text-left w-full"
              >
                {item.name}
              </button>
            ))}

            {/* 🔥 Google Translate Widget for Mobile */}
            <div id="google_translate_element" className="ml-4"></div>

            {/* Call Button */}
            <a
              href="tel:46707944944"
              className="flex items-center space-x-2 py-3 text-black hover:text-[#ed9542] transition-colors"
            >
              <Phone size={18} />
              <span className="text-sm">
                اتصل بنا: <span className="font-bold text-[#ed9542]">+46-707944944</span>
              </span>
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-white/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navigation;

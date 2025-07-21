import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Youtube,
  ArrowUp
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const columnsRef = useRef<HTMLDivElement[]>([]);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !columnsRef.current.includes(el)) {
      columnsRef.current.push(el);
    }
  };

  useEffect(() => {
    if (!footerRef.current) return;

    // Animate footer columns
    gsap.fromTo(columnsRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer ref={footerRef} className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 border-t border-border/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-40 h-40 bg-primary/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-secondary/5 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div ref={addToRefs} className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-warm bg-clip-text text-transparent mb-4">
                Turgomedia
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Vi skapar visuellt innehåll som driver resultat. Från videoproduktion till webbdesign - 
                vi hjälper ditt varumärke att sticka ut och växa.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a 
                href="#" 
                className="bg-primary/10 hover:bg-primary hover:text-primary-foreground p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="bg-primary/10 hover:bg-primary hover:text-primary-foreground p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="bg-primary/10 hover:bg-primary hover:text-primary-foreground p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="bg-primary/10 hover:bg-primary hover:text-primary-foreground p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div ref={addToRefs} className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground mb-6">Våra Tjänster</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/videoproduktion" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Videoproduktion
                </Link>
              </li>
              <li>
                <Link to="/innehall-publicering" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Sociala Medier
                </Link>
              </li>
              <li>
                <Link to="/produktfotografering" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Produktfotografering
                </Link>
              </li>
              <li>
                <Link to="/webbdesign" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Webbdesign
                </Link>
              </li>
              <li>
                <Link to="/seo-lokal-synlighet" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  SEO & Lokal Synlighet
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div ref={addToRefs} className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground mb-6">Snabblänkar</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Hem
                </Link>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Tjänster
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Om Oss
                </a>
              </li>
              <li>
                <Link to="/kontakt" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div ref={addToRefs} className="space-y-6">
            <h4 className="text-lg font-semibold text-foreground mb-6">Kontakt</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+46 123 456 789</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">info@turgomedia.se</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">
                  Göteborg, Sverige
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2024 Turgomedia. Alla rättigheter förbehållna.
            </p>
            
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="text-muted-foreground hover:text-primary text-sm transition-colors duration-300">
                Integritetspolicy
              </Link>
              <Link to="/terms" className="text-muted-foreground hover:text-primary text-sm transition-colors duration-300">
                Användarvillkor
              </Link>
              
              {/* Scroll to Top Button */}
              <button
                onClick={scrollToTop}
                className="bg-primary/10 hover:bg-primary hover:text-primary-foreground p-2 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
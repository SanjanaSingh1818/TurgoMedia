import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Video, Users, Camera, Globe, Search } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLAnchorElement[]>([]);

  const services = [
    {
      id: 1,
      icon: <Video className="w-12 h-12" />,
      title: "Video Produktion",
      description: "Korta och slagkraftiga videor som engagerar, bygger varumärke och driver resultat.",
      link: "/videoproduktion",
      featured: true
    },
    {
      id: 2,
      icon: <Users className="w-12 h-12" />,
      title: "Sociala Medier Hantering",
      description: "Vi planerar, producerar och publicerar innehåll – så att du kan fokusera på din verksamhet.",
      link: "/innehall-publicering"
    },
    {
      id: 3,
      icon: <Camera className="w-12 h-12" />,
      title: "Produkt Fotografering",
      description: "Professionella bilder som framhäver dina produkter och ökar försäljningen online och i butik.",
      link: "/produktfotografering"
    },
    {
      id: 4,
      icon: <Globe className="w-12 h-12" />,
      title: "Webbdesign & Utveckling",
      description: "Responsiva, användarvänliga hemsidor anpassade efter ditt varumärke och målgrupp.",
      link: "/webbdesign"
    },
    {
      id: 5,
      icon: <Search className="w-12 h-12" />,
      title: "SEO & Lokal Synlighet",
      description: "Vi optimerar din hemsida för Google och hjälper dig nå fler kunder i din närhet.",
      link: "/seo-lokal-synlighet"
    }
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    // Animate section title
    gsap.fromTo('.services-title', 
      { 
        y: 50, 
        opacity: 0 
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Animate service cards
    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(card,
          {
            y: 80,
            opacity: 0,
            scale: 0.9
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            delay: index * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const addToRefs = (el: HTMLAnchorElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-background">
      <div className="container mx-auto">
        <h2 className="services-title text-5xl md:text-6xl font-bold text-center mb-16">
          <span className="bg-gradient-warm bg-clip-text text-transparent">
            Våra Tjänster
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Link
              key={service.id}
              to={service.link}
              ref={addToRefs}
              className={`group relative overflow-hidden rounded-2xl transition-all duration-700 hover:scale-105 ${
                service.featured ? 'md:col-span-2 md:row-span-1' : ''
              }`}
            >
              {/* Background with gradient */}
              <div className="absolute inset-0 bg-gradient-card opacity-20" />
              
              {/* Card Content */}
              <div className={`relative z-10 h-full bg-card/80 backdrop-blur-sm border border-border/20 rounded-2xl p-8 hover:shadow-hover transition-all duration-300 ${
                service.featured ? 'md:p-12' : ''
              }`}>
                {/* Icon */}
                <div className={`text-primary mb-6 transition-transform duration-300 group-hover:scale-110 ${
                  service.featured ? 'mb-8' : ''
                }`}>
                  {service.icon}
                </div>
                
                {/* Title */}
                <h3 className={`font-bold mb-4 transition-transform duration-300 group-hover:translate-y-[-4px] ${
                  service.featured ? 'text-3xl md:text-4xl mb-6' : 'text-xl md:text-2xl'
                }`}>
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className={`text-muted-foreground mb-6 transition-transform duration-300 group-hover:translate-y-[-4px] ${
                  service.featured ? 'text-lg md:text-xl' : 'text-base'
                }`}>
                  {service.description}
                </p>
                
                {/* CTA */}
                <div className="flex items-center text-primary font-semibold transition-transform duration-300 group-hover:translate-x-2">
                  <span className="mr-2">Läs mer</span>
                  <svg 
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              
              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-primary/0 rounded-2xl transition-colors duration-300 group-hover:border-primary/30" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
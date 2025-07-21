import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const AboutUsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Create timeline for coordinated animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        end: "bottom 25%",
        toggleActions: "play none none reverse"
      }
    });

    // Animate content from left
    tl.fromTo(contentRef.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power3.out" }
    )
    // Animate image from right
    .fromTo(imageRef.current,
      { x: 100, opacity: 0, scale: 0.8 },
      { x: 0, opacity: 1, scale: 1, duration: 1, ease: "power3.out" },
      "-=0.5"
    )
    // Animate badge with bounce
    .fromTo(badgeRef.current,
      { scale: 0, rotation: -10 },
      { scale: 1, rotation: 0, duration: 0.8, ease: "back.out(1.7)" },
      "-=0.3"
    );

    // Background particles animation
    gsap.to('.floating-element', {
      y: -20,
      duration: 3,
      ease: "power1.inOut",
      stagger: 0.5,
      repeat: -1,
      yoyo: true
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 px-6 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-element absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
        <div className="floating-element absolute top-40 right-20 w-24 h-24 bg-secondary/10 rounded-full blur-lg"></div>
        <div className="floating-element absolute bottom-20 left-1/4 w-40 h-40 bg-primary/5 rounded-full blur-2xl"></div>
        <div className="floating-element absolute bottom-40 right-10 w-28 h-28 bg-secondary/8 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Content */}
          <div ref={contentRef} className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-semibold text-primary tracking-wider uppercase">Om Oss</p>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Utforska Våra Tjänster och{' '}
                <span className="bg-gradient-warm bg-clip-text text-transparent">
                  Stärk Din Digitala Närvaro
                </span>
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Vi är en digital byrå baserad i Göteborg som hjälper företag att växa genom strategisk 
              marknadsföring, SEO, sociala medier och kreativt innehåll. Med över ett decennium av 
              erfarenhet har vi hjälpt både lokala och internationella varumärken att synas online och nå 
              sina mål.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-foreground font-medium">Skräddarsydda strategier för varje kund.</span>
              </div>
              <div className="flex items-center gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-foreground font-medium">Resultatdriven marknadsföring med mätbara resultat.</span>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-hover">
                Kom Igång
              </button>
              <button className="px-8 py-3 border border-border text-foreground rounded-lg font-semibold hover:bg-muted transition-all duration-300 hover:scale-105">
                Läs Mer
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div ref={imageRef} className="relative">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
              {/* Placeholder for professional image */}
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 bg-primary/30 rounded-full mx-auto flex items-center justify-center">
                    <div className="w-20 h-20 bg-primary/50 rounded-full"></div>
                  </div>
                  <p className="text-muted-foreground">Professional Team Photo</p>
                </div>
              </div>
              
              {/* Experience Badge */}
              <div ref={badgeRef} className="absolute -bottom-4 -right-4 bg-secondary text-secondary-foreground rounded-full w-24 h-24 flex flex-col items-center justify-center font-bold shadow-hover">
                <span className="text-2xl">10+</span>
                <span className="text-xs">ÅRS</span>
                <span className="text-xs">ERFARENHET</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      company: "Pizzeria Mums",
      category: "Restaurangvarumärke",
      description: "Turgomedia är stolta över att stödja Pizzeria Mums med engagerande videoinnehåll som markant har ökat deras synlighet på sociala medier och pizzaförsäljning.",
      website: "Www.Pizzeriamums.Se",
      logo: "🍕",
      bgColor: "from-red-50 to-orange-50"
    },
    {
      id: 2,
      company: "Sultan Grill",
      category: "Mellanösternrestaurang",
      description: "Vi samarbetar med Sultan Grill för att stärka deras varumärkesidentitet genom strategiskt innehåll och effektiv digital storytelling.",
      website: "Www.Sultangrill.Se",
      logo: "🥙",
      bgColor: "from-amber-50 to-yellow-50"
    },
    {
      id: 3,
      company: "Illos Möbelrekond",
      category: "Möbeltvätt",
      description: "Turgomedia arbetar nära med Illos Möbelrekond för att öka deras synlighet och lokala räckvidd genom Google-optimering och riktad annonsering.",
      website: "Www.Illosmöbelrekond.Se",
      logo: "🛋️",
      bgColor: "from-blue-50 to-indigo-50"
    }
  ];

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    // Title animation
    gsap.fromTo('.testimonials-title',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Cards stagger animation
    gsap.fromTo(cardsRef.current,
      { y: 80, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={sectionRef} className="relative py-24 px-6 bg-gradient-to-br from-primary/5 via-background to-secondary/5 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="testimonials-title text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-warm bg-clip-text text-transparent">
              Träffa Våra Kunder
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Turgomedia samarbetar med innovativa varumärken inom flera branscher för att skapa 
            digitala framgångshistorier.
          </p>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              ref={addToRefs}
              className={`group relative bg-gradient-to-br ${testimonial.bgColor} rounded-3xl p-8 hover:scale-105 transition-all duration-500 hover:shadow-hover cursor-pointer`}
            >
              {/* Logo */}
              <div className="text-6xl mb-6 text-center opacity-80 group-hover:scale-110 transition-transform duration-300">
                {testimonial.logo}
              </div>
              
              {/* Category */}
              <p className="text-sm font-semibold text-primary/80 mb-2 text-center">
                {testimonial.category}
              </p>
              
              {/* Company Name */}
              <h3 className="text-2xl font-bold text-center mb-4 group-hover:text-primary transition-colors duration-300">
                {testimonial.company}
              </h3>
              
              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed text-center">
                {testimonial.description}
              </p>
              
              {/* Website */}
              <div className="text-center">
                <span className="text-primary font-semibold hover:underline transition-all duration-300">
                  {testimonial.website}
                </span>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 border-2 border-primary/0 rounded-3xl group-hover:border-primary/20 transition-colors duration-300"></div>
            </div>
          ))}
        </div>

        {/* Mobile Slider View */}
        <div className="md:hidden relative">
          <div className="flex justify-center">
            <div className={`bg-gradient-to-br ${testimonials[currentIndex].bgColor} rounded-3xl p-8 max-w-sm mx-auto transform transition-all duration-500`}>
              <div className="text-6xl mb-6 text-center opacity-80">
                {testimonials[currentIndex].logo}
              </div>
              
              <p className="text-sm font-semibold text-primary/80 mb-2 text-center">
                {testimonials[currentIndex].category}
              </p>
              
              <h3 className="text-2xl font-bold text-center mb-4">
                {testimonials[currentIndex].company}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed text-center">
                {testimonials[currentIndex].description}
              </p>
              
              <div className="text-center">
                <span className="text-primary font-semibold">
                  {testimonials[currentIndex].website}
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-card hover:shadow-hover transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-card hover:shadow-hover transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary scale-125' 
                    : 'bg-primary/30 hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
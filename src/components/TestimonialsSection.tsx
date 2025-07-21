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
      company: "City Flytt",
      category: "Flyttjänster",
      description: "Vi team samarbetade med City Flytt för att designa om deras webbplats och förbättra konverteringsgraden genom en modern och användarvänlig upplevelse.",
      website: "Www.Cityflytt.Se",
      logo: "🏷️",
      bgColor: "from-orange-50 to-red-50"
    },
    {
      id: 2,
      company: "Arcus Transport",
      category: "Transportföretag",
      description: "Turgomedia samarbetar med Arcus Transport för att stärka deras digitala närvaro genom professionell produktfotografering och SEO-insatser.",
      website: "Www.Arcustransport.Se",
      logo: "🚚",
      bgColor: "from-orange-50 to-amber-50"
    },
    {
      id: 3,
      company: "Karoon",
      category: "Startup-varumärke",
      description: "Vi har levererat ett komplett digitalt lanseringspaket till Karoon – inklusiv varumärkesstrategi, innehållskapande och videomarknadsföring – för att hjälpa dem sticka ut på marknaden.",
      website: "Www.Karoon.Se",
      logo: "🌿",
      bgColor: "from-green-50 to-emerald-50"
    },
    {
      id: 4,
      company: "Pizzeria Mums",
      category: "Restaurangvarumärke",
      description: "Turgomedia är stolta över att stödja Pizzeria Mums med engagerande videoinnehåll som markant har ökat deras synlighet på sociala medier och pizzaförsäljning.",
      website: "Www.Pizzeriamums.Se",
      logo: "🍕",
      bgColor: "from-red-50 to-orange-50"
    },
    {
      id: 5,
      company: "Sultan Grill",
      category: "Mellanösternrestaurang",
      description: "Vi samarbetar med Sultan Grill för att stärka deras varumärkesidentitet genom strategiskt innehåll och effektiv digital storytelling.",
      website: "Www.Sultangrill.Se",
      logo: "🥙",
      bgColor: "from-amber-50 to-yellow-50"
    },
    {
      id: 6,
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
    <section 
      id="testimonials"
      ref={sectionRef} 
      className="relative py-24 px-6 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="testimonials-title text-5xl md:text-6xl font-bold mb-6 text-white">
            Träffa Våra Kunder
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Turgomedia samarbetar med innovativa varumärken inom flera branscher för att skapa 
            digitala framgångshistorier.
          </p>
        </div>

        {/* Carousel for all screen sizes */}
        <div className="relative max-w-7xl mx-auto">
          {/* Cards Container */}
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / (window.innerWidth >= 768 ? 3 : 1))}%)`,
                width: `${testimonials.length * (100 / (window.innerWidth >= 768 ? 3 : 1))}%`
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  ref={addToRefs}
                  className="w-full md:w-1/3 px-4 flex-shrink-0"
                >
                  <div className={`group relative bg-gradient-to-br ${testimonial.bgColor} rounded-3xl p-8 hover:scale-105 transition-all duration-500 hover:shadow-2xl cursor-pointer h-full`}>
                    {/* Logo */}
                    <div className="text-6xl mb-6 text-center opacity-80 group-hover:scale-110 transition-transform duration-300">
                      {testimonial.logo}
                    </div>
                    
                    {/* Category */}
                    <p className="text-sm font-semibold text-purple-600 mb-2 text-center">
                      {testimonial.category}
                    </p>
                    
                    {/* Company Name */}
                    <h3 className="text-2xl font-bold text-center mb-4 group-hover:text-purple-600 transition-colors duration-300">
                      {testimonial.company}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-700 mb-6 leading-relaxed text-center text-sm">
                      {testimonial.description}
                    </p>
                    
                    {/* Website */}
                    <div className="text-center">
                      <span className="text-purple-600 font-semibold hover:underline transition-all duration-300">
                        {testimonial.website}
                      </span>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 border-2 border-purple-400/0 rounded-3xl group-hover:border-purple-400/30 transition-colors duration-300"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10"
          >
            <ChevronLeft className="w-6 h-6 text-purple-600" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10"
          >
            <ChevronRight className="w-6 h-6 text-purple-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: Math.ceil(testimonials.length / (window.innerWidth >= 768 ? 3 : 1)) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/75'
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
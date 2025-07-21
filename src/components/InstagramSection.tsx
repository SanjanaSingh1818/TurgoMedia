import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Instagram } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const InstagramSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo('.instagram-content',
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

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      id="instagram"
      ref={sectionRef} 
      className="relative py-24 px-6 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="instagram-content">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-0.5 bg-white/60"></div>
              <span className="text-white/80 font-semibold tracking-wider">FÖLJ OSS</span>
              <div className="w-12 h-0.5 bg-white/60"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Senaste på Instagram
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
              Kolla in våra senaste videor och uppdateringar på Instagram
            </p>
            <a
              href="https://www.instagram.com/turgomedia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-600 font-semibold px-6 py-3 rounded-full hover:bg-white/90 transition-colors duration-300"
            >
              <span>Visa Profil</span>
              <Instagram size={20} />
            </a>
          </div>

          {/* Instagram Embed */}
          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-6 shadow-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-tr from-purple-500 via-pink-500 to-orange-500 rounded-full p-0.5">
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                  <span className="text-2xl">🎬</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">turgomedia</h3>
                <p className="text-gray-600">Turgo Media</p>
                <p className="text-sm text-gray-500">8,594 followers • 83 posts</p>
              </div>
              <div className="ml-auto">
                <Instagram className="text-purple-600" size={32} />
              </div>
            </div>

            {/* Sample Grid */}
            <div className="grid grid-cols-3 gap-2 mb-6">
              <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">📱</span>
              </div>
              <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">🎥</span>
              </div>
              <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">📸</span>
              </div>
            </div>

            <div className="text-center">
              <a
                href="https://www.instagram.com/turgomedia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 font-semibold hover:underline"
              >
                Se alla inlägg på Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

interface SlideData {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  backgroundImage: string;
  ctaText: string;
  ctaLink: string;
}

interface VerticalSliderProps {
  slides: SlideData[];
}

const VerticalSlider = ({ slides }: VerticalSliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) return;
      
      e.preventDefault();
      setIsScrolling(true);
      
      if (e.deltaY > 0 && currentSlide < slides.length - 1) {
        setCurrentSlide(prev => prev + 1);
      } else if (e.deltaY < 0 && currentSlide > 0) {
        setCurrentSlide(prev => prev - 1);
      }
      
      setTimeout(() => setIsScrolling(false), 1000);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
      return () => container.removeEventListener('wheel', handleWheel);
    }
  }, [currentSlide, slides.length, isScrolling]);

  const goToSlide = (index: number) => {
    if (!isScrolling) {
      setCurrentSlide(index);
    }
  };

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden">
      {/* Slides Container */}
      <div 
        className="h-full transition-transform duration-1000 ease-out"
        style={{
          transform: `translateY(-${currentSlide * 100}vh)`
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className="relative h-screen flex items-center justify-center"
            style={{
              backgroundImage: `url(${slide.backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            {/* Cinematic Overlay */}
            <div className="cinematic-overlay" />
            
            {/* Content */}
            <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
              <h1 className={`hero-title mb-6 ${index === currentSlide ? 'animate-hero-reveal' : ''}`}>
                {slide.title}
              </h1>
              
              <p className={`hero-subtitle mb-4 ${index === currentSlide ? 'animate-fade-up' : ''}`}>
                {slide.subtitle}
              </p>
              
              <p className={`text-lg mb-8 text-white/80 max-w-2xl mx-auto ${
                index === currentSlide ? 'animate-fade-up' : ''
              }`} style={{ animationDelay: '0.6s' }}>
                {slide.description}
              </p>
              
              <button 
                className={`btn-cinematic text-white rounded-full ${
                  index === currentSlide ? 'animate-scale-in' : ''
                }`}
                style={{ animationDelay: '0.9s' }}
                onClick={() => window.location.href = slide.ctaLink}
              >
                {slide.ctaText}
              </button>
            </div>

            {/* Scroll Indicator (only on first slide) */}
            {index === 0 && currentSlide === 0 && (
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
                <ChevronDown size={32} />
                <p className="text-sm mt-2">Scrolla nedåt</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Vertical Navigation Dots */}
      <div className="nav-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`nav-dot ${index === currentSlide ? 'active' : ''}`}
            aria-label={`Gå till slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Indicator */}
      <div className="fixed bottom-6 left-6 text-white/60 text-sm">
        <span className="text-white font-medium">{String(currentSlide + 1).padStart(2, '0')}</span>
        <span className="mx-2">/</span>
        <span>{String(slides.length).padStart(2, '0')}</span>
      </div>
    </div>
  );
};

export default VerticalSlider;
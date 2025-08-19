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

  // Handle mouse wheel navigation
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

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    if (!isScrolling) {
      setCurrentSlide(index);
    }
  };

  // Overlay color logic
  const getOverlayColor = (index: number) => {
    if (index === 1) return '#716fb0';
    if (index === 2) return '#3b3b3b';
    if (index === 3) return '#8b84b5';
    return 'rgba(0, 0, 0, 0.9)';
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
            {/* Overlay */}
            <div
              className="absolute inset-0"
              style={{
                backgroundColor: getOverlayColor(index),
                opacity: 0.7
              }}
            />

            {/* Content */}
            <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
              <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${index === currentSlide ? 'animate-hero-reveal' : ''}`}>
                {slide.title}
              </h1>

              <p className={`text-lg md:text-xl font-light mb-4 ${index === currentSlide ? 'animate-fade-up' : ''}`}>
                {slide.subtitle}
              </p>

              <p className={`text-base md:text-lg mb-8 text-white/90 max-w-2xl mx-auto ${
                index === currentSlide ? 'animate-fade-up' : ''
              }`} style={{ animationDelay: '0.6s' }}>
                {slide.description}
              </p>

              <button 
                className={`px-6 py-3 bg-white text-black font-semibold rounded-full shadow-lg hover:bg-[#ed9542] hover:text-white transition ${
                  index === currentSlide ? 'animate-scale-in' : ''
                }`}
                style={{ animationDelay: '0.9s' }}
                onClick={() => window.location.href = slide.ctaLink}
              >
                {slide.ctaText}
              </button>
            </div>

            {/* Scroll Indicator */}
            {index === 0 && currentSlide === 0 && (
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 animate-bounce">
                <ChevronDown size={32} />
                <p className="text-sm mt-2">Scrolla nedåt</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Vertical Navigation Dots */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col space-y-3 z-50">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-[#ed9542]' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Indicator */}
      <div className="fixed bottom-6 left-6 text-white/70 text-sm z-50">
        <span className="text-white font-medium">{String(currentSlide + 1).padStart(2, '0')}</span>
        <span className="mx-2">/</span>
        <span>{String(slides.length).padStart(2, '0')}</span>
      </div>
    </div>
  );
};

export default VerticalSlider;

import { useEffect, useRef } from 'react';

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  animationType?: 'fade-up' | 'scale' | 'slide-left' | 'slide-right';
  delay?: number;
}

const ScrollAnimation = ({ 
  children, 
  className = '', 
  animationType = 'fade-up',
  delay = 0 
}: ScrollAnimationProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            
            // Add delay if specified
            setTimeout(() => {
              switch (animationType) {
                case 'fade-up':
                  element.classList.add('revealed');
                  break;
                case 'scale':
                  element.classList.add('revealed');
                  break;
                case 'slide-left':
                  element.style.transform = 'translateX(0)';
                  element.style.opacity = '1';
                  break;
                case 'slide-right':
                  element.style.transform = 'translateX(0)';
                  element.style.opacity = '1';
                  break;
              }
            }, delay);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [animationType, delay]);

  const getInitialStyles = () => {
    switch (animationType) {
      case 'fade-up':
        return 'reveal-up';
      case 'scale':
        return 'reveal-scale';
      case 'slide-left':
        return 'transform translate-x-[-60px] opacity-0 transition-all duration-700';
      case 'slide-right':
        return 'transform translate-x-[60px] opacity-0 transition-all duration-700';
      default:
        return 'reveal-up';
    }
  };

  return (
    <div
      ref={elementRef}
      className={`${getInitialStyles()} ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
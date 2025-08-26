import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle } from 'lucide-react';
import aboutImage from '../assets/images/about.jpg';

gsap.registerPlugin(ScrollTrigger);

const AboutUsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        end: "bottom 25%",
        toggleActions: "play none none reverse"
      }
    });

    tl.fromTo(contentRef.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power3.out" }
    )
    .fromTo(imageRef.current,
      { x: 100, opacity: 0, scale: 0.8 },
      { x: 0, opacity: 1, scale: 1, duration: 1, ease: "power3.out" },
      "-=0.5"
    )
    .fromTo(badgeRef.current,
      { scale: 0, rotation: -10 },
      { scale: 1, rotation: 0, duration: 0.8, ease: "back.out(1.7)" },
      "-=0.3"
    );

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
    <section 
      id="about"
      ref={sectionRef} 
      dir="rtl"   // ✅ RTL support
      className="relative py-24 px-6 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-element absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
        <div className="floating-element absolute top-40 right-20 w-24 h-24 bg-secondary/10 rounded-full blur-lg"></div>
        <div className="floating-element absolute bottom-20 left-1/4 w-40 h-40 bg-primary/5 rounded-full blur-2xl"></div>
        <div className="floating-element absolute bottom-40 right-10 w-28 h-28 bg-secondary/8 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* ✅ Reverse grid so text appears on right in desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto lg:flex-row-reverse">
          
          {/* Content */}
          <div ref={contentRef} className="space-y-8 text-right">
            <div className="space-y-4">
              {/* Horizontal Line + Title */}
              <div className="flex items-center justify-end gap-2">
                <div className="w-12 h-0.5 bg-black opacity-100"></div>
                <p className="text-sm font-bold text-[#5E4B8B] tracking-wider uppercase">من نحن</p>
              </div>

              {/* Heading */}
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                استكشف خدماتنا و{' '}
                <span className="bg-gradient-warm bg-clip-text text-transparent">
                  عزّز حضورك الرقمي
                </span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed">
              نحن وكالة رقمية مقرها غوتنبرغ نساعد الشركات على النمو من خلال التسويق 
              الاستراتيجي، تحسين محركات البحث (SEO)، وسائل التواصل الاجتماعي، والمحتوى الإبداعي. 
              مع أكثر من عقد من الخبرة، ساعدنا العلامات التجارية المحلية والدولية على الظهور 
              عبر الإنترنت وتحقيق أهدافها.
            </p>

            {/* Key Features */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 justify-end">
                <CheckCircle className="w-6 h-6 text-[#5E4B8B] flex-shrink-0" />
                <span className="text-foreground font-medium">
                  استراتيجيات مخصصة لكل عميل.
                </span>
              </div>
              <div className="flex items-center gap-4 justify-end">
                <CheckCircle className="w-6 h-6 text-[#5E4B8B] flex-shrink-0" />
                <span className="text-foreground font-medium">
                  تسويق قائم على النتائج مع مؤشرات قابلة للقياس.
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 pt-4 justify-end">
              <button className="px-8 py-3 bg-[#5E4B8B] text-primary-foreground rounded-lg font-semibold hover:bg-[#ff8c19] transition-all duration-300 hover:scale-105 hover:shadow-hover">
                ابدأ الآن
              </button>
              <button className="px-8 py-3 border border-border text-foreground rounded-lg font-semibold hover:bg-[#ff8c19] transition-all duration-300 hover:scale-105">
                اقرأ المزيد
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div ref={imageRef} className="relative">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
              {/* Image */}
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl overflow-hidden">
                <img 
                  src={aboutImage} 
                  alt="فريق احترافي" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Experience Badge */}
              <div ref={badgeRef} className="absolute -bottom-4 -right-4 bg-secondary text-secondary-foreground rounded-full w-24 h-24 flex flex-col items-center justify-center font-bold shadow-hover">
                <span className="text-2xl">10+</span>
                <span className="text-xs">سنوات</span>
                <span className="text-xs">خبرة</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;

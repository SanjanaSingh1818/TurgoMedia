import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import gsap from 'gsap';
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaTiktok,
} from 'react-icons/fa';

// ✅ Import logo images
import PizzeriaLogo from '../assets/Pizzeria-logo.png';
import SultanLogo from '../assets/sultan-logo.jpg';
import MobeltvattLogo from '../assets/Mobeltvatt-logo.png';
import CityFlyttLogo from '../assets/cityflytt-logo.png';
import ArcusLogo from '../assets/arcus-logo.webp';
import KaroonLogo from '../assets/karoon-logo.png';
import DunderDonerLogo from '../assets/logo1.png';
import SteammasterLogo from '../assets/Steammaster-logo.png';
import GrillogardenLogo from '../assets/gril.avif';
import ChixeeLogo from '../assets/CHIXEE.png';
import HomeLogo from '../assets/home.png';
import AlmedalsLogo from '../assets/logo2.png';
import KalimeraLogo from '../assets/kalimera-logo.png';

const testimonials = [
  {
    logo: PizzeriaLogo,
    name: 'بيتزا مومس',
    role: 'علامة تجارية للمطاعم',
    text: 'تورجو ميديا فخورة بدعم بيتزا مومس بمحتوى فيديو مميز وجذاب...',
    link: 'https://pizzeriamums.se',
  },
  {
    logo: SultanLogo,
    name: 'سلطان جريل',
    role: 'مطعم شرق أوسطي',
    text: 'نتعاون مع سلطان جريل لتعزيز هوية علامتهم التجارية...',
    link: 'https://sultangrill.se',
  },
  {
    logo: MobeltvattLogo,
    name: 'إيلوس لغسيل الأثاث',
    role: 'خدمات تنظيف الأثاث',
    text: 'تعمل تورجو ميديا مع إيلوس لزيادة ظهورهم الرقمي...',
    link: 'https://offert.illosmobelrekond.se/mobeltvatt',
  },
  {
    logo: CityFlyttLogo,
    name: 'سيتي فليت',
    role: 'خدمات نقل',
    text: 'عمل فريقنا مع سيتي فليت لإعادة تصميم موقعهم الإلكتروني...',
    link: 'https://cityflytt.se',
  },
  {
    logo: ArcusLogo,
    name: 'آركوس للنقل',
    role: 'شركة نقل',
    text: 'تتعاون تورجو ميديا مع آركوس للنقل لتعزيز حضورهم الرقمي...',
    link: 'https://arcustransport.se',
  },
  {
    logo: KaroonLogo,
    name: 'كارون',
    role: 'شركة ناشئة',
    text: 'قمنا بتقديم حزمة إطلاق رقمي كاملة إلى كارون...',
    link: 'https://karoon.se',
  },
  {
    logo: DunderDonerLogo,
    name: 'دوندر دونر',
    role: 'منصة توصيل طعام',
    text: 'تعاون فريقنا مع دوندر دونر لإنشاء حضور رقمي حديث...',
    link: 'https://dunderdoner.se',
  },
  {
    logo: SteammasterLogo,
    name: 'ستيم ماستر',
    role: 'خدمات تنظيف',
    text: 'عمل فريقنا مع ستيم ماستر. النتيجة تعكس تركيزهم على الخدمات الموثوقة وعالية الجودة...',
    link: 'https://steammaster.se',
  },
  {
    logo: GrillogardenLogo,
    name: 'غريلوغاردن',
    role: 'مطعم',
    text: 'تعاون فريقنا مع غريلوغاردن لإنشاء حضور رقمي حديث...',
    link: 'https://grillogarden.se',
  },
  {
    logo: ChixeeLogo,
    name: 'شيكسي',
    role: 'مطعم',
    text: 'تعاونّا مع شيكسي لإبراز شغفهم بالدجاج المقلي المقرمش وتجربة طعام فريدة...',
    link: 'https://chixee.se',
  },
  {
    logo: HomeLogo,
    name: 'منزل صحي',
    role: 'خدمات تنظيف منزلية',
    text: 'تعاونّا مع منزل صحي لإبراز خدماتهم الموثوقة والمهنية...',
    link: 'https://halsosamthem.se',
  },
  {
    logo: AlmedalsLogo,
    name: 'ألْميدالس للنقل',
    role: 'شركة نقل',
    text: 'عملنا مع ألْميدالس للنقل لتعزيز حضورهم الرقمي...',
    link: 'https://almedalsflyttexpress.se',
  },
  {
    logo: KalimeraLogo,
    name: 'كالي ميرا ميزه تاباس',
    role: 'مطعم',
    text: 'تعاونّا مع كالي ميرا ميزه تاباس لالتقاط سحر البحر الأبيض المتوسط وتجربة طعام مميزة...',
    link: 'https://kalimeramezetapas.se',
  },
];

const socialIcons = [
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaTiktok,
];

export default function TestimonialSection() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const icons = bgRef.current?.querySelectorAll('.bubble');
    if (icons) {
      icons.forEach((icon) => {
        gsap.to(icon, {
          y: -150 - Math.random() * 100,
          repeat: -1,
          duration: 8 + Math.random() * 4,
          ease: 'none',
          delay: Math.random() * 5,
          yoyo: false,
        });
      });
    }
  }, []);

  return (
    <section
      id="testimonials"
      dir="rtl"
      className="relative z-10 py-20 px-6 text-center text-white bg-gradient-to-br from-[#e5ceb8] to-[#aeaacb] overflow-hidden"
    >
      {/* أيقونات التواصل العائمة */}
      <div ref={bgRef} className="absolute inset-0 z-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => {
          const IconComponent = socialIcons[i % socialIcons.length];
          const size = 24 + Math.random() * 24;
          return (
            <div
              key={i}
              className="bubble absolute text-white/60"
              style={{
                fontSize: `${size}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: 0.4 + Math.random() * 0.6,
              }}
            >
              <IconComponent />
            </div>
          );
        })}
      </div>

      {/* العنوان */}
      <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4 relative z-10">
        <span className="text-black">تعرف على </span>
        <span className="bg-gradient-warm bg-clip-text text-transparent">
          عملاؤنا
        </span>
      </h2>

      <p className="text-lg max-w-xl mx-auto text-[#4c5663] mb-12 relative z-10">
        تورجو ميديا تتعاون مع علامات تجارية مبتكرة في عدة مجالات لخلق قصص نجاح رقمية.
      </p>

      <div className="relative z-10 max-w-6xl mx-auto">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={32}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{ clickable: true, el: '.custom-pagination' }}
          loop
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div
                className="bg-white text-gray-800 shadow-lg p-6 flex flex-col justify-between mx-4 rounded-xl"
                style={{
                  height: '360px',
                  clipPath: 'polygon(9% 0, 100% 0%, 90% 100%, 0% 100%)',
                  WebkitClipPath: 'polygon(9% 0, 100% 0%, 90% 100%, 0% 100%)',
                }}
              >
                <div className="mb-4 text-center">
                  <img src={t.logo} alt={t.name} className="h-16 mx-auto object-contain" />
                  <p className="text-sm text-gray-500 mt-2">{t.role}</p>
                </div>
                <h4 className="text-lg font-semibold mb-2">{t.name}</h4>
                <p className="text-sm leading-relaxed flex-grow">{t.text}</p>
                <a
                  href={t.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 mt-4 inline-block"
                >
                  {t.link.replace('https://', '')}
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination */}
        <div className="custom-pagination mt-8 flex justify-center gap-2 relative z-10" />

        {/* أزرار التنقل */}
        <div className="swiper-button-prev z-20 w-10 h-10 bg-white/30 hover:bg-white/50 text-white rounded-full flex items-center justify-center absolute -left-6 top-1/2 -translate-y-1/2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </div>
        <div className="swiper-button-next z-20 w-10 h-10 bg-white/30 hover:bg-white/50 text-white rounded-full flex items-center justify-center absolute -right-6 top-1/2 -translate-y-1/2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </section>
  );
}

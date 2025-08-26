import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaCubes, FaLifeRing, FaDatabase } from "react-icons/fa";
import { Link } from "react-router-dom"; 
import videoImg from "../assets/images/video.jpg";
import photographyImg from "../assets/images/photography.jpg";
import socialImg from "../assets/images/social.jpg";
import seoImg from "../assets/images/seo.jpg";
import webdesignImg from "../assets/images/webdesign.jpg";


// قائمة الخدمات بالعربية
const services = [
  {
    title: "إنتاج الفيديو لوسائل التواصل والإعلانات",
    desc: "مقاطع فيديو قصيرة وفعّالة تجذب الانتباه، تبني العلامة التجارية وتحقق النتائج.",
    img: videoImg,
    icon: <FaCubes />,
    link: "/videoproduktion",
  },
  {
    title: "إدارة ونشر المحتوى على وسائل التواصل",
    desc: "نحن لا ننشئ المحتوى فقط – بل ندير أيضًا حساباتك على وسائل التواصل الاجتماعي. نقوم بالتخطيط، والإنتاج، والنشر نيابةً عنك، لتتفرغ لأعمالك بينما نهتم بحضورك الرقمي.",
    img: socialImg,
    icon: <FaLifeRing />,
    link: "/innehall-publicering",
  },
  {
    title: "تصوير المنتجات",
    desc: "صور احترافية تُبرز منتجاتك وتزيد من مبيعاتك سواء عبر الإنترنت أو في المتجر.",
    img: photographyImg,
    icon: <FaDatabase />,
    link: "/produktfotografering",
  },
  {
    title: "تصميم وتطوير المواقع",
    desc: "مواقع إلكترونية متجاوبة وسهلة الاستخدام، مصممة بما يتناسب مع علامتك التجارية وجمهورك المستهدف.",
    img: webdesignImg,
    icon: <FaCubes />,
    link: "/webbdesign",
  },
  {
    title: "تحسين محركات البحث والظهور المحلي",
    desc: "نقوم بتحسين موقعك ليتصدر نتائج البحث على Google، ونساعد شركتك على الظهور بشكل أفضل محليًا والوصول إلى عملاء قريبين منك.",
    img: seoImg,
    icon: <FaLifeRing />,
    link: "/seo-lokal-synlighet",
  },
];


// بطاقة الخدمة
const ServiceCard = ({ title, desc, img, icon, link }) => {
  const cardRef = useRef(null);
  const overlayRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const overlay = overlayRef.current;
    const textBg = textRef.current;

    const onEnter = () => {
      gsap.to(overlay, { opacity: 0.6, duration: 0.4, ease: "power2.out" });
      gsap.to(textBg, {
        backgroundColor: "#5f4c8c",
        color: "#ffffff",
        duration: 0.4,
        ease: "power2.out",
      });
    };

    const onLeave = () => {
      gsap.to(overlay, { opacity: 0, duration: 0.4, ease: "power2.out" });
      gsap.to(textBg, {
        backgroundColor: "#ffffff",
        color: "#1f2937",
        duration: 0.4,
        ease: "power2.out",
      });
    };

    card.addEventListener("mouseenter", onEnter);
    card.addEventListener("mouseleave", onLeave);

    return () => {
      card.removeEventListener("mouseenter", onEnter);
      card.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <Link to={link}>
      <div
        ref={cardRef}
        className="relative rounded-lg overflow-hidden shadow-lg transition-all duration-300 cursor-pointer"
      >
        {/* صورة الخلفية */}
        <img src={img} alt={title} className="w-full h-56 object-cover" />

        {/* تدرج لوني */}
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-[#2d2d30] opacity-0 pointer-events-none z-10 transition-opacity"
        />

        {/* أيقونة */}
        <div className="absolute top-0 right-0 m-4 w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-md text-[#5f4c8c] text-lg z-20">
          {icon}
        </div>

        {/* النص */}
        <div
          ref={textRef}
          className="bg-white text-gray-800 p-5 z-20 relative transition-colors duration-300 h-[30vh]"
        >
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-sm mt-2">{desc}</p>
        </div>
      </div>
    </Link>
  );
};

// قسم الخدمات
export default function ServiceSection() {
  const bgRef = useRef(null);

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      {/* فقاعات الخلفية */}
      <div ref={bgRef} className="absolute inset-0 z-0 pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => {
          const size = 20 + Math.random() * 40;
          const top = Math.random() * 100;
          const left = Math.random() * 100;
          const opacity = 0.4 + Math.random() * 0.4;
          const color = i % 2 === 0 ? "#F5C08F" : "#C0C0D8";

          return (
            <div
              key={i}
              className="bubble absolute rounded-full blur-md animate-pulse"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                top: `${top}%`,
                left: `${left}%`,
                backgroundColor: color,
                opacity: opacity,
              }}
            />
          );
        })}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4 relative z-10">
            <span className="text-black">نحن نقدم </span>
            <span className="bg-gradient-warm bg-clip-text text-transparent">
              خدمات مميزة
            </span>
          </h2>

          <p className="mt-2 text-gray-600 max-w-xl mx-auto">
            مصدرك الموثوق للأخبار، والتقارير، والأحداث الجارية – دائمًا محدثة ودائمًا ذات صلة.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

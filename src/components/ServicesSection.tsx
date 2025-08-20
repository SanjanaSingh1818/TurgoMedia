import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaCubes, FaLifeRing, FaDatabase } from "react-icons/fa";
import { Link } from "react-router-dom"; // 👈 import Link
import videoImg from "../assets/images/video.jpg";
import photographyImg from "../assets/images/photography.jpg";
import socialImg from "../assets/images/social.jpg";
import seoImg from "../assets/images/seo.jpg";
import webdesignImg from "../assets/images/webdesign.jpg";


// Service List with updated Swedish content and links
const services = [
  {
    title: "Videoproduktion för sociala medier & annonser",
    desc: "Korta och slagkraftiga videor som engagerar, bygger varumärke och driver resultat.",
    img: videoImg, // 👈 imported image
    icon: <FaCubes />,
    link: "/videoproduktion",
  },
  {
    title: "Innehåll och publicering på sociala medier",
    desc: "Vi skapar inte bara innehåll – vi hanterar även dina sociala medier. Vi planerar, producerar och publicerar inlägg åt dig, så att du kan fokusera på verksamheten medan vi sköter din digitala närvaro.",
    img: socialImg ,
    icon: <FaLifeRing />,
    link: "/innehall-publicering",
  },
  {
    title: "Produktfotografering",
    desc: "Professionella bilder som framhäver dina produkter och ökar försäljningen både online och i butik.",
    img: photographyImg,
    icon: <FaDatabase />,
    link: "/produktfotografering",
  },
  {
    title: "Webbdesign & utveckling",
    desc: "Responsiva och användarvänliga hemsidor anpassade efter ditt varumärke och målgrupp.",
    img: webdesignImg,
    icon: <FaCubes />,
    link: "/webbdesign",
  },
  {
    title: "SEO & Lokal synlighet",
    desc: "Vi optimerar din hemsida för att synas högre i Google och hjälper ditt företag att rankas bättre lokalt och bli mer synligt för närliggande kunder.",
    img: seoImg,
    icon: <FaLifeRing />,
    link: "/seo-lokal-synlighet",
  },
];


// Service Card Component
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
    <Link to={link}> {/* 👈 wrap card with Link */}
      <div
        ref={cardRef}
        className="relative rounded-lg overflow-hidden shadow-lg transition-all duration-300 cursor-pointer"
      >
        {/* Image */}
        <img src={img} alt={title} className="w-full h-56 object-cover" />

        {/* Overlay */}
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-[#2d2d30] opacity-0 pointer-events-none z-10 transition-opacity"
        />

        {/* Icon */}
        <div className="absolute top-0 right-0 m-4 w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-md text-[#5f4c8c] text-lg z-20">
          {icon}
        </div>

        {/* Text Block */}
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

// Section Component with Floating Bubbles
export default function ServiceSection() {
  const bgRef = useRef(null);

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      {/* Floating Bubbles */}
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
            <span className="text-black">Vi erbjuder </span>
            <span className="bg-gradient-warm bg-clip-text text-transparent">
              överlägsna tjänster
            </span>
          </h2>

          <p className="mt-2 text-gray-600 max-w-xl mx-auto">
            Din pålitliga källa för nyheter, reportage och aktuella händelser – alltid uppdaterad, alltid relevant.
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

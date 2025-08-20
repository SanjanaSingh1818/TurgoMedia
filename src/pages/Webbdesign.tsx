import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Play, Monitor, Palette, Smartphone, Globe } from 'lucide-react';
import heroImage from '../assets/hero2.jpg';
import web1 from '../assets/photo1.mp4';
import web2 from '../assets/photo2.mp4';
import web3 from '../assets/photo3.mp4';

const WebDesign = () => {
  const portfolioItems = [
    { title: "E-handelswebb", description: "Modern e-handelsdesign som ökade kundernas köpupplevelse", video: web1, stats: "40% ökad försäljning" },
    { title: "Företagswebbplats", description: "Ren och professionell design för ett konsultbolag", video: web2, stats: "Stärkt varumärkesidentitet" },
    { title: "Responsiv Design", description: "Mobilanpassad design för startup som ökade engagemanget", video: web3, stats: "60% fler mobilanvändare" }
  ];

  const services = [
    { icon: <Monitor className="w-6 h-6 sm:w-8 sm:h-8" />, title: "UI/UX Design", description: "Användarvänliga och intuitiva gränssnitt som förbättrar kundupplevelsen." },
    { icon: <Palette className="w-6 h-6 sm:w-8 sm:h-8" />, title: "Grafisk Webbdesign", description: "Attraktiv och modern design som stärker ditt varumärke." },
    { icon: <Smartphone className="w-6 h-6 sm:w-8 sm:h-8" />, title: "Responsiv Design", description: "Optimerad för alla enheter – mobil, surfplatta och dator." },
    { icon: <Globe className="w-6 h-6 sm:w-8 sm:h-8" />, title: "E-handel & Företagswebb", description: "Skräddarsydda lösningar för både småföretag och stora varumärken." }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Navigation />

      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-[60vh] sm:min-h-screen">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white max-w-[90%] mx-auto px-2 sm:px-6">
          <h1 className="text-2xl xs:text-2.5xl sm:text-5xl md:text-6xl font-bold mb-2 xs:mb-3 sm:mb-6">Webbdesign</h1>
          <p className="text-sm xs:text-base sm:text-xl mb-2 xs:mb-3 sm:mb-8">UI/UX, E-handel & företagswebbplatser</p>
          <p className="text-xs xs:text-sm sm:text-base mb-2 xs:mb-3 sm:mb-12 text-gray-200 max-w-[95%] mx-auto">
            Vi skapar moderna, responsiva och användarvänliga webbplatser som engagerar, bygger förtroende och driver resultat.
          </p>
          <a href="https://wa.me/923214567890" target="_blank" rel="noopener noreferrer">
            <button className="w-full xs:w-full sm:w-auto px-4 sm:px-8 py-2 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg transition">
              Kontakta oss idag
            </button>
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-10 xs:py-12 sm:py-16 px-2 xs:px-4 sm:px-6 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-xl xs:text-2xl sm:text-4xl md:text-5xl font-bold text-center mb-2 xs:mb-3 sm:mb-6">
            Våra Webbdesign-tjänster
          </h2>
          <p className="text-xs xs:text-sm sm:text-base text-center text-gray-600 mb-4 xs:mb-6 sm:mb-12 max-w-[95%] mx-auto">
            Från UI/UX till kompletta företagswebbplatser – vi erbjuder allt du behöver för att skapa en professionell digital närvaro.
          </p>
          <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 gap-3 xs:gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-3 xs:p-4 sm:p-6 border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="text-blue-600 mb-2">{service.icon}</div>
                <h3 className="text-sm xs:text-base sm:text-xl font-bold mb-1 xs:mb-2">{service.title}</h3>
                <p className="text-xs xs:text-sm sm:text-base text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-10 xs:py-12 sm:py-16 px-2 xs:px-4 sm:px-6 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-xl xs:text-2xl sm:text-4xl md:text-5xl font-bold text-center mb-2 xs:mb-3 sm:mb-6">Portfolio</h2>
          <p className="text-xs xs:text-sm sm:text-base text-gray-600 text-center mb-4 xs:mb-6 sm:mb-12 max-w-[95%] mx-auto">
            Ett urval av våra senaste webbdesignprojekt som hjälpt företag att växa online.
          </p>
          <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 xs:gap-4 sm:gap-6 md:gap-8">
            {portfolioItems.map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl">
                  <video 
                    src={item.video}
                    className="w-full h-40 xs:h-48 sm:h-56 md:h-72 lg:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                    autoPlay loop muted playsInline
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Play className="w-8 xs:w-10 sm:w-12 h-8 xs:h-10 sm:h-12 text-white" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-2 xs:p-3 sm:p-4 text-white z-10">
                    <h3 className="text-xs xs:text-sm sm:text-lg font-bold mb-0.5">{item.title}</h3>
                    <p className="text-[10px] xs:text-xs sm:text-sm mb-0.5">{item.description}</p>
                    <p className="text-yellow-400 font-semibold text-[10px] xs:text-xs sm:text-sm">{item.stats}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 xs:py-12 sm:py-16 px-2 xs:px-4 sm:px-6 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-lg xs:text-xl sm:text-3xl md:text-4xl font-bold mb-2 xs:mb-3 sm:mb-6">
            Vill du ha en modern och professionell webbplats?
          </h2>
          <p className="text-xs xs:text-sm sm:text-base text-gray-600 mb-4 xs:mb-6 sm:mb-12 max-w-[95%] mx-auto">
            Kontakta oss för en kostnadsfri konsultation. Vi designar webbplatser som stärker ditt varumärke och driver resultat.
          </p>
          <a href="https://wa.me/923214567890" target="_blank" rel="noopener noreferrer">
            <button className="w-full xs:w-full sm:w-auto px-4 sm:px-8 py-2 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg transition">
              Få kostnadsfri offert
            </button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebDesign;

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Play, Camera, Edit3, Share2, Users } from 'lucide-react';
import heroVideo from '../assets/hero-video.jpg';
import video1 from '../assets/1.mp4';
import video2 from '../assets/2.mp4';
import video3 from '../assets/3.mp4';

const Videoproduktion = () => {
  const portfolioItems = [
    { title: "Restaurang Reel", description: "Instagram Reel som genererade 250k visningar på en vecka", video: video1, stats: "45% ökning i konvertering" },
    { title: "Restaurang Reel", description: "Instagram Reel som genererade 250k visningar på en vecka", video: video2, stats: "250k visningar" },
    { title: "Restaurang Reel", description: "Instagram Reel som genererade 250k visningar på en vecka", video: video3, stats: "Säkrade finansiering" }
  ];

  const services = [
    { icon: <Camera className="w-6 h-6 sm:w-8 sm:h-8" />, title: "Produktvideor", description: "Framhäv dina produkters bästa egenskaper med professionella videor." },
    { icon: <Edit3 className="w-6 h-6 sm:w-8 sm:h-8" />, title: "Reklam & Annonser", description: "Slagkraftiga reklamvideor för Facebook, Instagram och Google Ads." },
    { icon: <Share2 className="w-6 h-6 sm:w-8 sm:h-8" />, title: "Sociala Medier", description: "Korta, engagerande videor optimerade för Instagram, TikTok och YouTube." },
    { icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />, title: "Företagsvideor", description: "Professionella presentationer och varumärkesvideor för ditt företag." }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Navigation />

      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-[60vh] sm:min-h-screen">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroVideo})` }} />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white max-w-[90%] mx-auto px-2 sm:px-6">
          <h1 className="text-2xl xs:text-2.5xl sm:text-5xl md:text-6xl font-bold mb-2 xs:mb-3 sm:mb-6">Videoproduktion</h1>
          <p className="text-sm xs:text-base sm:text-xl mb-2 xs:mb-3 sm:mb-8">För sociala medier & annonser</p>
          <p className="text-xs xs:text-sm sm:text-base mb-4 xs:mb-5 sm:mb-12 text-gray-200 max-w-[95%] mx-auto">
            Korta och slagkraftiga videor som engagerar, bygger varumärke och driver resultat. 
            Vi producerar allt från produktvideor till reklamkampanjer som konverterar.
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
            Våra Videotjänster
          </h2>
          <p className="text-xs xs:text-sm sm:text-base text-center text-gray-600 mb-4 xs:mb-6 sm:mb-12 max-w-[95%] mx-auto">
            Vi erbjuder ett brett utbud av videotjänster – från produktvideor till företagsfilmer. 
            Allt för att lyfta fram ditt varumärke och maximera din digitala närvaro.
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
          <h2 className="text-xl xs:text-2xl sm:text-4xl md:text-5xl font-bold text-center mb-2 xs:mb-3 sm:mb-6">Vårt Portfolio</h2>
          <p className="text-xs xs:text-sm sm:text-base text-gray-600 text-center mb-4 xs:mb-6 sm:mb-12 max-w-[95%] mx-auto">
            Ett urval av våra senaste projekt som hjälpt företag att växa genom kraftfulla videor.
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
            Redo att skapa videor som konverterar?
          </h2>
          <p className="text-xs xs:text-sm sm:text-base text-gray-600 mb-4 xs:mb-6 sm:mb-12 max-w-[95%] mx-auto">
            Kontakta oss idag för en kostnadsfri konsultation. Vi hjälper dig att skapa videor som driver verkliga resultat.
          </p>
          <button className="w-full xs:w-full sm:w-auto px-4 sm:px-8 py-2 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg transition">
            Få kostnadsfri offert
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Videoproduktion;

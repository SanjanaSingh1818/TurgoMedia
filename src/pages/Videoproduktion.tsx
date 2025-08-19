import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Play, Camera, Edit3, Share2, Users } from 'lucide-react';
import heroVideo from '../assets/hero-video.jpg';
import video1 from '../assets/1.mp4';
import video2 from '../assets/2.mp4';
import video3 from '../assets/3.mp4';


const Videoproduktion = () => {
  const portfolioItems = [
    {
      title: "Restaurang Reel",
      description: "Instagram Reel som genererade 250k visningar på en vecka",
      video: video1,
      stats: "45% ökning i konvertering"
    },
    {
      title: "Restaurang Reel",
      description: "Instagram Reel som genererade 250k visningar på en vecka",
      video: video2,
      stats: "250k visningar"
    },
    {
      title: "Restaurang Reel",
      description: "Instagram Reel som genererade 250k visningar på en vecka",
      video: video3,
      stats: "Säkrade finansiering"
    }
  ];

  const services = [
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Produktvideor",
      description: "Framhäv dina produkters bästa egenskaper med professionella videor."
    },
    {
      icon: <Edit3 className="w-8 h-8" />,
      title: "Reklam & Annonser",
      description: "Slagkraftiga reklamvideor för Facebook, Instagram och Google Ads."
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: "Sociala Medier",
      description: "Korta, engagerande videor optimerade för Instagram, TikTok och YouTube."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Företagsvideor",
      description: "Professionella presentationer och varumärkesvideor för ditt företag."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      {/* Global Header */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroVideo})` }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Videoproduktion</h1>
          <p className="text-2xl mb-8">För sociala medier & annonser</p>
          <p className="text-xl mb-12 text-gray-200 max-w-3xl mx-auto">
            Korta och slagkraftiga videor som engagerar, bygger varumärke och driver resultat. 
            Vi producerar allt från produktvideor till reklamkampanjer som konverterar.
          </p>
         <a 
  href="https://wa.me/923214567890" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg transition">
    Kontakta oss idag
  </button>
</a>

        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-6">
            Våra Videotjänster
          </h2>
          <p className="text-center text-lg text-gray-600 mb-16 max-w-2xl mx-auto">
            Vi erbjuder ett brett utbud av videotjänster – från produktvideor till företagsfilmer. 
            Allt för att lyfta fram ditt varumärke och maximera din digitala närvaro.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
              >
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-700 text-lg">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24 px-6 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-6">
            Vårt Portfolio
          </h2>
          <p className="text-center text-lg text-gray-600 mb-16 max-w-2xl mx-auto">
            Ett urval av våra senaste projekt som hjälpt företag att växa genom kraftfulla videor.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div key={index} className="group cursor-pointer">
               <div className="relative overflow-hidden rounded-2xl">
  <video 
    src={item.video}
    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
    autoPlay
    loop
    muted
    playsInline
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <Play className="w-16 h-16 text-white" />
  </div>
  <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
    <p className="text-gray-200 mb-2">{item.description}</p>
    <p className="text-yellow-400 font-semibold">{item.stats}</p>
  </div>
</div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            Redo att skapa videor som konverterar?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Kontakta oss idag för en kostnadsfri konsultation. Vi hjälper dig att skapa videor som driver verkliga resultat.
          </p>
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg transition">
            Få kostnadsfri offert
          </button>
        </div>
      </section>

      {/* Global Footer */}
      <Footer />
    </div>
  );
};

export default Videoproduktion;

import Navigation from '../components/Navigation';
import ServiceCard from '../components/ServiceCard';
import { Play, Camera, Edit3, Share2, Users, TrendingUp } from 'lucide-react';
import heroVideo from '../assets/hero-video.jpg';

const Videoproduktion = () => {
  const portfolioItems = [
    {
      title: "E-commerce Kampanj",
      description: "Produktvideo för modevarumärke som ökade konverteringen med 45%",
      image: heroVideo,
      stats: "45% ökning i konvertering"
    },
    {
      title: "Restaurang Reel",
      description: "Instagram Reel som genererade 250k visningar på en vecka",
      image: heroVideo,
      stats: "250k visningar"
    },
    {
      title: "Företagspresentation",
      description: "Varumärkesvideo för tech-startup som säkrade ny finansiering",
      image: heroVideo,
      stats: "Säkrade finansiering"
    }
  ];

  const services = [
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Produktvideor",
      description: "Framhäv dina produkters bästa egenskaper med professionella videor"
    },
    {
      icon: <Edit3 className="w-8 h-8" />,
      title: "Reklam & Annonser",
      description: "Slagkraftiga reklamvideor för Facebook, Instagram och Google Ads"
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: "Sociala Medier",
      description: "Korta, engagerande videor optimerade för Instagram, TikTok och YouTube"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Företagsvideor",
      description: "Professionella presentationer och varumärkesvideor för ditt företag"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroVideo})` }}
        />
        <div className="cinematic-overlay" />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="hero-title mb-6">
            Videoproduktion
          </h1>
          <p className="hero-subtitle mb-8">
            För sociala medier & annonser
          </p>
          <p className="text-xl mb-12 text-white/90 max-w-3xl mx-auto">
            Korta och slagkraftiga videor som engagerar, bygger varumärke och driver resultat. 
            Vi producerar allt från produktvideor till reklamkampanjer som konverterar.
          </p>
          <button className="btn-cinematic text-white rounded-full">
            Kontakta oss idag
          </button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-warm bg-clip-text text-transparent">
              Våra Videotjänster
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="reveal-up bg-card rounded-2xl p-8 border border-border/20 hover:shadow-warm transition-all duration-300">
                <div className="text-primary mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground text-lg">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-warm bg-clip-text text-transparent">
              Vårt Portfolio
            </span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div key={index} className="reveal-scale group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Play className="w-16 h-16 text-white" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-white/90 mb-2">{item.description}</p>
                    <p className="text-primary-glow font-semibold">{item.stats}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            Redo att skapa videor som konverterar?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Kontakta oss idag för en kostnadsfri konsultation. Vi hjälper dig att skapa videor som driver verkliga resultat.
          </p>
          <button className="btn-cinematic text-white rounded-full">
            Få kostnadsfri offert
          </button>
        </div>
      </section>
    </div>
  );
};

export default Videoproduktion;
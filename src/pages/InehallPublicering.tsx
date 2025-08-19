import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Play, Instagram, Youtube, Twitter, Facebook } from 'lucide-react';
import heroImage from '../assets/hero.jpg'; // <-- Add a hero image for content publishing
import sm1 from '../assets/sm1.mp4';
import sm2 from '../assets/sm2.mp4';
import sm3 from '../assets/sm3.mp4';

const InehallPublicering = () => {
  const portfolioItems = [
    {
      title: "Instagram Reel",
      description: "Kreativ reel som nådde 500k visningar på en vecka",
      video: sm1,
      stats: "500k visningar"
    },
    {
      title: "YouTube Shorts",
      description: "Engagerande shorts för tech-varumärke som ökade prenumeranter",
      video: sm2,
      stats: "+10k prenumeranter"
    },
    {
      title: "TikTok Kampanj",
      description: "Trendande TikTok-video som genererade viralt genomslag",
      video: sm3,
      stats: "1M+ visningar"
    }
  ];

  const services = [
    {
      icon: <Instagram className="w-8 h-8" />,
      title: "Instagram Reels",
      description: "Korta, snygga reels som engagerar och stärker ditt varumärke."
    },
    {
      icon: <Youtube className="w-8 h-8" />,
      title: "YouTube Shorts",
      description: "Optimerade shorts för att öka visningar och prenumeranter."
    },
    {
      icon: <Facebook className="w-8 h-8" />,
      title: "Facebook Stories",
      description: "Fånga uppmärksamheten med kreativa stories för din målgrupp."
    },
    {
      icon: <Twitter className="w-8 h-8" />,
      title: "TikTok Kampanjer",
      description: "Skapa virala TikTok-videor som når en bred publik."
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
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Innehåll & Publicering</h1>
          <p className="text-2xl mb-8">Reels • Shorts • TikTok • Stories</p>
          <p className="text-xl mb-12 text-gray-200 max-w-3xl mx-auto">
            Skapa engagerande innehåll för sociala medier som bygger varumärke och blir viralt. 
            Vi producerar allt från Instagram Reels till YouTube Shorts och TikTok-trender.
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
            Våra Tjänster för Innehåll & Publicering
          </h2>
          <p className="text-center text-lg text-gray-600 mb-16 max-w-2xl mx-auto">
            Vi erbjuder ett brett utbud av tjänster för sociala medier – från korta reels till fullständiga kampanjer. 
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
            Här är några av våra framgångsrika projekt för innehåll & publicering.
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
            Vill du växa genom innehåll & publicering?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Kontakta oss för en kostnadsfri konsultation. Vi hjälper dig att skapa virala videor som driver engagemang och resultat.
          </p>
          <a 
            href="https://wa.me/923214567890" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg transition">
              Få kostnadsfri offert
            </button>
          </a>
        </div>
      </section>

      {/* Global Footer */}
      <Footer />
    </div>
  );
};

export default InehallPublicering;

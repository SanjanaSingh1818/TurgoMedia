import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Play, Monitor, Palette, Smartphone, Globe } from 'lucide-react';
import heroImage from '../assets/hero2.jpg'; // Add a nice web design hero image
import web1 from '../assets/photo1.mp4';
import web2 from '../assets/photo2.mp4';
import web3 from '../assets/photo3.mp4';

const WebDesign = () => {
  const portfolioItems = [
    {
      title: "E-handelswebb",
      description: "Modern e-handelsdesign som ökade kundernas köpupplevelse",
      video: web1,
      stats: "40% ökad försäljning"
    },
    {
      title: "Företagswebbplats",
      description: "Ren och professionell design för ett konsultbolag",
      video: web2,
      stats: "Stärkt varumärkesidentitet"
    },
    {
      title: "Responsiv Design",
      description: "Mobilanpassad design för startup som ökade engagemanget",
      video: web3,
      stats: "60% fler mobilanvändare"
    }
  ];

  const services = [
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Användarvänliga och intuitiva gränssnitt som förbättrar kundupplevelsen."
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Grafisk Webbdesign",
      description: "Attraktiv och modern design som stärker ditt varumärke."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Responsiv Design",
      description: "Optimerad för alla enheter – mobil, surfplatta och dator."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "E-handel & Företagswebb",
      description: "Skräddarsydda lösningar för både småföretag och stora varumärken."
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Webbdesign</h1>
          <p className="text-2xl mb-8">UI/UX, E-handel & företagswebbplatser</p>
          <p className="text-xl mb-12 text-gray-200 max-w-3xl mx-auto">
            Vi skapar moderna, responsiva och användarvänliga webbplatser som engagerar, bygger förtroende och driver resultat.
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
            Våra Webbdesign-tjänster
          </h2>
          <p className="text-center text-lg text-gray-600 mb-16 max-w-2xl mx-auto">
            Från UI/UX till kompletta företagswebbplatser – vi erbjuder allt du behöver för att skapa en professionell digital närvaro.
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
            Portfolio
          </h2>
          <p className="text-center text-lg text-gray-600 mb-16 max-w-2xl mx-auto">
            Ett urval av våra senaste webbdesignprojekt som hjälpt företag att växa online.
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
            Vill du ha en modern och professionell webbplats?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Kontakta oss för en kostnadsfri konsultation. Vi designar webbplatser som stärker ditt varumärke och driver resultat.
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

export default WebDesign;

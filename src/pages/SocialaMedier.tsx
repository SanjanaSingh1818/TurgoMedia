import Navigation from '../components/Navigation';
import { Calendar, BarChart3, MessageCircle, Users2, Camera, TrendingUp } from 'lucide-react';
import heroSocial from '../assets/hero-social.jpg';

const SocialaMedier = () => {
  const portfolioItems = [
    {
      title: "Fitness Studio",
      description: "3 månaders kampanj som ökade medlemsantalet med 120%",
      image: heroSocial,
      stats: "120% ökning medlemmar",
      platform: "Instagram & Facebook"
    },
    {
      title: "Restaurang Kedja",
      description: "Månadsvis innehållsproduktion med 89% engagemang",
      image: heroSocial,
      stats: "89% engagement rate",
      platform: "Instagram & TikTok"
    },
    {
      title: "E-handel Mode",
      description: "Influencer kampanj som genererade 2.3M visningar",
      image: heroSocial,
      stats: "2.3M visningar",
      platform: "Instagram & YouTube"
    }
  ];

  const services = [
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Innehållsplanering",
      description: "Strategisk planering av inlägg för maximalt engagemang och räckvidd"
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Fotografi & Design",
      description: "Professionell produktion av bilder, grafik och videor för sociala medier"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Community Management",
      description: "Hantering av kommentarer, meddelanden och community-byggande"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analys & Rapportering",
      description: "Månadsvis rapportering med insikter och rekommendationer för tillväxt"
    },
    {
      icon: <Users2 className="w-8 h-8" />,
      title: "Influencer Marketing",
      description: "Samarbeten med relevanta influencers för att nå nya målgrupper"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Annonsering",
      description: "Strategiska betalda kampanjer för ökad räckvidd och konverteringar"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroSocial})` }}
        />
        <div className="cinematic-overlay" />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="hero-title mb-6">
            Sociala Medier
          </h1>
          <p className="hero-subtitle mb-8">
            Innehåll och publicering
          </p>
          <p className="text-xl mb-12 text-white/90 max-w-3xl mx-auto">
            Vi skapar inte bara innehåll – vi hanterar även dina sociala medier. Vi planerar, 
            producerar och publicerar inlägg åt dig, så att du kan fokusera på verksamheten 
            medan vi sköter din digitala närvaro.
          </p>
          <button className="btn-cinematic text-white rounded-full">
            Starta din resa
          </button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-warm bg-clip-text text-transparent">
              Komplett Social Media-hantering
            </span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="reveal-up bg-card rounded-2xl p-8 border border-border/20 hover:shadow-warm transition-all duration-300">
                <div className="text-primary mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
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
              Framgångshistorier
            </span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div key={index} className="reveal-scale">
                <div className="bg-card rounded-2xl overflow-hidden border border-border/20 hover:shadow-warm transition-all duration-300">
                  <div className="relative h-48">
                    <img 
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      {item.platform}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground mb-4">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-primary font-semibold">{item.stats}</span>
                      <TrendingUp className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Så fungerar vårt samarbete
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Strategi", desc: "Vi analyserar din målgrupp och skapar en skräddarsydd strategi" },
              { step: "02", title: "Produktion", desc: "Vi producerar högkvalitativt innehåll anpassat för varje plattform" },
              { step: "03", title: "Publicering", desc: "Vi publicerar och optimerar inlägg för bästa resultat" },
              { step: "04", title: "Analys", desc: "Vi mäter resultat och justerar strategin för kontinuerlig förbättring" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-hero text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            Låt oss bygga ditt varumärke tillsammans
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto text-white/90">
            Kontakta oss för en kostnadsfri konsultation där vi diskuterar din social media-strategi.
          </p>
          <button className="bg-white text-primary font-semibold px-8 py-4 rounded-full hover:bg-white/90 transition-colors">
            Boka kostnadsfri konsultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default SocialaMedier;
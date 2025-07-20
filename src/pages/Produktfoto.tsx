import Navigation from '../components/Navigation';
import { Package, Zap, Eye, ShoppingCart, Camera, Palette } from 'lucide-react';
import heroProducts from '../assets/hero-products.jpg';

const Produktfoto = () => {
  const portfolioItems = [
    {
      title: "Lyxklockor",
      description: "E-commerce bilder som ökade försäljningen med 67%",
      image: heroProducts,
      stats: "67% försäljningsökning",
      category: "Smycken & Accessoarer"
    },
    {
      title: "Skönhetsprodukter",
      description: "Lifestyle fotografi för Instagram-lansering",
      image: heroProducts,
      stats: "2.1M Instagram-visningar",
      category: "Beauty & Skincare"
    },
    {
      title: "Heminredning",
      description: "Katalogfotografering för möbelföretag",
      image: heroProducts,
      stats: "85% CTR-förbättring",
      category: "Hem & Inredning"
    },
    {
      title: "Tech & Gadgets",
      description: "Produktbilder för e-handelssajt",
      image: heroProducts,
      stats: "45% konverteringsökning",
      category: "Teknik"
    },
    {
      title: "Mat & Dryck",
      description: "Menyfotografering för restaurangkedja",
      image: heroProducts,
      stats: "30% orderökning",
      category: "Food & Beverage"
    },
    {
      title: "Mode & Kläder",
      description: "Lookbook för modevarumärke",
      image: heroProducts,
      stats: "156% social engagement",
      category: "Fashion"
    }
  ];

  const services = [
    {
      icon: <Package className="w-8 h-8" />,
      title: "E-commerce Fotografi",
      description: "Professionella produktbilder optimerade för online-försäljning"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Lifestyle Fotografi",
      description: "Produkter i naturliga miljöer för starkare varumärkesupplevelse"
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Studio Fotografi",
      description: "Kontrollerad miljö för perfekt belysning och detaljer"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "360° Produktvisning",
      description: "Interaktiva vyer som låter kunder utforska produkten från alla vinklar"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroProducts})` }}
        />
        <div className="cinematic-overlay" />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="hero-title mb-6">
            Produktfotografering
          </h1>
          <p className="hero-subtitle mb-8">
            Professionella bilder som säljer
          </p>
          <p className="text-xl mb-12 text-white/90 max-w-3xl mx-auto">
            Framhäv dina produkters bästa egenskaper med professionella bilder som 
            ökar försäljningen både online och i butik. Vi skapar bilder som konverterar.
          </p>
          <button className="btn-cinematic text-white rounded-full">
            Se vårt arbete
          </button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-warm bg-clip-text text-transparent">
              Våra Fotografitjänster
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

      {/* Stats Section */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Produkter fotograferade" },
              { number: "85%", label: "Genomsnittlig CTR-förbättring" },
              { number: "48h", label: "Genomsnittlig leveranstid" },
              { number: "98%", label: "Nöjda kunder" }
            ].map((stat, index) => (
              <div key={index} className="reveal-scale">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-warm bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div key={index} className="reveal-scale group cursor-pointer">
                <div className="bg-card rounded-2xl overflow-hidden border border-border/20 hover:shadow-warm transition-all duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      {item.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground mb-4">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-primary font-semibold">{item.stats}</span>
                      <ShoppingCart className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Vår fotografiprocess
          </h2>
          
          <div className="grid md:grid-cols-5 gap-6">
            {[
              { step: "01", title: "Konsultation", desc: "Vi diskuterar dina behov och mål" },
              { step: "02", title: "Planering", desc: "Vi skapar en skjutplan och stil" },
              { step: "03", title: "Fotografering", desc: "Professionell fotografering i studio" },
              { step: "04", title: "Retuschering", desc: "Efterbehandling för perfekta resultat" },
              { step: "05", title: "Leverans", desc: "Snabb leverans i önskat format" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            Redo att öka din försäljning?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Professionella produktbilder är investering som betalar sig. Kontakta oss för en offert.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-cinematic text-white rounded-full">
              Få kostnadsfri offert
            </button>
            <button className="border border-primary text-primary font-semibold px-8 py-4 rounded-full hover:bg-primary hover:text-white transition-colors">
              Se fler exempel
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Produktfoto;
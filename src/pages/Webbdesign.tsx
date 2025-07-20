import Navigation from '../components/Navigation';
import { Monitor, Smartphone, Zap, Search, Code, Palette } from 'lucide-react';
import heroWeb from '../assets/hero-web.jpg';

const Webbdesign = () => {
  const portfolioItems = [
    {
      title: "E-handel Plattform",
      description: "Modern e-handelssajt med 180% konverteringsökning",
      image: heroWeb,
      stats: "180% konverteringsökning",
      tech: "React, Node.js, Stripe",
      url: "www.example-store.se"
    },
    {
      title: "Restaurang Kedja",
      description: "Responsiv webbsajt med onlinebeställningar",
      image: heroWeb,
      stats: "300% online-beställningar",
      tech: "WordPress, WooCommerce",
      url: "www.restaurant-chain.se"
    },
    {
      title: "Konsultföretag",
      description: "Professionell företagshemsida med bokningssystem",
      image: heroWeb,
      stats: "250% fler bokningar",
      tech: "Next.js, TypeScript",
      url: "www.consulting-firm.se"
    },
    {
      title: "Fitness Studio",
      description: "Medlemsportal med schema och betalningar",
      image: heroWeb,
      stats: "95% medlemsnöjdhet",
      tech: "Vue.js, Firebase",
      url: "www.fitness-studio.se"
    }
  ];

  const services = [
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Responsiv Webbdesign",
      description: "Webbsidor som fungerar perfekt på alla enheter och skärmstorlekar"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Utveckling & Programmering",
      description: "Skräddarsydda lösningar med modern teknik och bästa praxis"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "SEO-Optimering",
      description: "Teknisk SEO från start för bättre synlighet i sökmotorer"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Prestanda-optimering",
      description: "Snabba laddningstider för bättre användarupplevelse"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile-First Design",
      description: "Designade först för mobil för optimal användarupplevelse"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UX/UI Design",
      description: "Användarvänliga interfaces som konverterar besökare till kunder"
    }
  ];

  const technologies = [
    { name: "React", desc: "Modern frontend-utveckling" },
    { name: "Next.js", desc: "Full-stack React framework" },
    { name: "WordPress", desc: "Flexibelt CMS system" },
    { name: "Node.js", desc: "Backend-utveckling" },
    { name: "TypeScript", desc: "Typ-säker kod" },
    { name: "Tailwind CSS", desc: "Utility-first CSS" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroWeb})` }}
        />
        <div className="cinematic-overlay" />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="hero-title mb-6">
            Webbdesign
          </h1>
          <p className="hero-subtitle mb-8">
            & utveckling
          </p>
          <p className="text-xl mb-12 text-white/90 max-w-3xl mx-auto">
            Responsiva och användarvänliga hemsidor anpassade efter ditt varumärke och målgrupp. 
            Vi skapar webbsidor som konverterar besökare till kunder.
          </p>
          <button className="btn-cinematic text-white rounded-full">
            Se våra projekt
          </button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-warm bg-clip-text text-transparent">
              Våra Webbtjänster
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

      {/* Technologies Section */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Tekniker vi behärskar
          </h2>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="text-center reveal-scale">
                <div className="bg-card rounded-xl p-6 border border-border/20 hover:shadow-warm transition-all duration-300">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-lg mx-auto mb-3">
                    {tech.name.charAt(0)}
                  </div>
                  <h3 className="font-bold mb-2">{tech.name}</h3>
                  <p className="text-muted-foreground text-sm">{tech.desc}</p>
                </div>
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
              Våra Webbprojekt
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {portfolioItems.map((item, index) => (
              <div key={index} className="reveal-scale group">
                <div className="bg-card rounded-2xl overflow-hidden border border-border/20 hover:shadow-warm transition-all duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="text-sm opacity-80">{item.url}</div>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tech.split(', ').map((technology, techIndex) => (
                        <span key={techIndex} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                          {technology}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-primary font-semibold">{item.stats}</span>
                      <Monitor className="w-5 h-5 text-primary" />
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
            Från idé till färdig webbsida
          </h2>
          
          <div className="grid md:grid-cols-5 gap-6">
            {[
              { step: "01", title: "Planering", desc: "Vi kartlägger behov och mål" },
              { step: "02", title: "Design", desc: "Mockups och prototyper skapas" },
              { step: "03", title: "Utveckling", desc: "Kodning och programmering" },
              { step: "04", title: "Testning", desc: "Kvalitetssäkring och optimering" },
              { step: "05", title: "Lansering", desc: "Driftsättning och support" }
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

      {/* Stats Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "150+", label: "Webbsidor skapade" },
              { number: "99.9%", label: "Upptid på våra sajter" },
              { number: "< 2s", label: "Genomsnittlig laddningstid" },
              { number: "100%", label: "Mobiloptimerade" }
            ].map((stat, index) => (
              <div key={index} className="reveal-scale">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-hero text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            Redo för en ny webbsida?
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto text-white/90">
            Låt oss skapa en webbsida som representerar ditt företag på bästa sätt och konverterar besökare till kunder.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary font-semibold px-8 py-4 rounded-full hover:bg-white/90 transition-colors">
              Starta ditt projekt
            </button>
            <button className="border border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-colors">
              Se fler exempel
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Webbdesign;
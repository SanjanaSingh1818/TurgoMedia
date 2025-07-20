import Navigation from '../components/Navigation';
import { Search, TrendingUp, MapPin, BarChart3, Users, Target } from 'lucide-react';
import heroWeb from '../assets/hero-web.jpg';

const SEO = () => {
  const portfolioItems = [
    {
      title: "Lokala Restauranger",
      description: "5 restauranger nådde topp 3 i lokala sökningar på 6 månader",
      results: "+400% organisk trafik",
      timeframe: "6 månader",
      keywords: "85 förstaplats-rankningar"
    },
    {
      title: "E-handel Kläder",
      description: "Modebutik ökade online-försäljningen genom SEO-optimering",
      results: "+250% försäljning",
      timeframe: "8 månader", 
      keywords: "120+ topp 10-rankningar"
    },
    {
      title: "Tandläkarklinik",
      description: "Lokal tandläkare blev #1 för alla viktiga lokala söktermer",
      results: "+180% bokningar",
      timeframe: "4 månader",
      keywords: "15 förstaplats lokalt"
    }
  ];

  const services = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Teknisk SEO",
      description: "Optimering av webbsidans struktur, hastighet och indexerbarhet"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Lokal SEO",
      description: "Google My Business-optimering och lokala sökningar"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Nyckelordsanalys",
      description: "Forskning och strategi för rätt söktermer för din bransch"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Innehållsstrategi",
      description: "SEO-optimerat innehåll som rankar och konverterar"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Länkbyggning",
      description: "Kvalitetslänkar från relevanta och auktoritära webbsidor"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Konkurrentanalys",
      description: "Analys av konkurrenters strategier och möjligheter"
    }
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
            SEO & Lokal Synlighet
          </h1>
          <p className="hero-subtitle mb-8">
            Syns högre i Google
          </p>
          <p className="text-xl mb-12 text-white/90 max-w-3xl mx-auto">
            Vi optimerar din hemsida för att synas högre i Google och hjälper ditt företag 
            att rankas bättre lokalt och bli mer synligt för närliggande kunder.
          </p>
          <button className="btn-cinematic text-white rounded-full">
            Få gratis SEO-analys
          </button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-warm bg-clip-text text-transparent">
              Våra SEO-tjänster
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

      {/* Why SEO Section */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">
                Varför är SEO viktigt för ditt företag?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">93% av alla webbupplevelser börjar med en sökning</h3>
                    <p className="text-muted-foreground">Dina potentiella kunder söker efter dina tjänster på Google just nu</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Organisk trafik har 8x högre konvertering än betald reklam</h3>
                    <p className="text-muted-foreground">SEO ger mer kvalificerade besökare som är redo att köpa</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">75% klickar aldrig förbi första sidan</h3>
                    <p className="text-muted-foreground">Om du inte är på första sidan syns du inte för dina kunder</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "68%", label: "av onlineupplevelser börjar med en sökning" },
                { number: "46%", label: "av alla Google-sökningar är lokala" },
                { number: "28%", label: "av lokala sökningar leder till köp" },
                { number: "88%", label: "av konsumenter litar på online-recensioner" }
              ].map((stat, index) => (
                <div key={index} className="text-center p-6 bg-card rounded-xl border border-border/20">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-warm bg-clip-text text-transparent">
              Våra SEO-framgångar
            </span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div key={index} className="reveal-scale">
                <div className="bg-card rounded-2xl p-8 border border-border/20 hover:shadow-warm transition-all duration-300">
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground mb-6">{item.description}</p>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Resultat:</span>
                      <span className="font-bold text-primary">{item.results}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Tidsram:</span>
                      <span className="font-medium">{item.timeframe}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Nyckelord:</span>
                      <span className="font-medium">{item.keywords}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local SEO Section */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Specialist på Lokal SEO
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">
                Perfekt för svenska företag som vill nå lokala kunder
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Google My Business-optimering</span>
                </li>
                <li className="flex items-center gap-3">
                  <Search className="w-5 h-5 text-primary" />
                  <span>Lokala nyckelordsstrategier</span>
                </li>
                <li className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-primary" />
                  <span>Recensionshantering</span>
                </li>
                <li className="flex items-center gap-3">
                  <Target className="w-5 h-5 text-primary" />
                  <span>Lokala kataloger och citeringar</span>
                </li>
              </ul>
            </div>
            <div className="bg-card rounded-2xl p-8 border border-border/20">
              <h4 className="text-xl font-bold mb-6 text-center">Typiska resultat efter 6 månader</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Organisk trafik:</span>
                  <span className="font-bold text-primary">+200-400%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Lokala rankningar:</span>
                  <span className="font-bold text-primary">Topp 3</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Telefonsamtal:</span>
                  <span className="font-bold text-primary">+150-300%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Vägbeskrivningar:</span>
                  <span className="font-bold text-primary">+100-250%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Vår SEO-process
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "SEO-Audit", desc: "Teknisk analys av din webbsida och konkurrenter" },
              { step: "02", title: "Strategi", desc: "Skräddarsydd SEO-plan baserad på dina mål" },
              { step: "03", title: "Optimering", desc: "Tekniska förbättringar och innehållsproduktion" },
              { step: "04", title: "Rapportering", desc: "Månadsvis uppföljning av rankningar och trafik" }
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
            Redo att dominera Google?
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto text-white/90">
            Få en kostnadsfri SEO-analys av din webbsida och se exakt vad som behöver förbättras.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary font-semibold px-8 py-4 rounded-full hover:bg-white/90 transition-colors">
              Få gratis SEO-analys
            </button>
            <button className="border border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-colors">
              Ring för konsultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SEO;
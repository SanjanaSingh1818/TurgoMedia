import Navigation from '../components/Navigation';
import VerticalSlider from '../components/VerticalSlider';
import ServicesSection from '../components/ServicesSection';
import AboutUsSection from '../components/AboutUsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import Footer from '../components/Footer';
import heroPhotography from '../assets/hero-photography.jpg';
import heroVideo from '../assets/hero-video.jpg';
import heroSocial from '../assets/hero-social.jpg';
import heroProducts from '../assets/hero-products.jpg';
import heroWeb from '../assets/hero-web.jpg';

const Index = () => {
  const slides = [
    {
      id: 1,
      title: "Turgomedia",
      subtitle: "Kreativ produktion för moderna företag",
      description: "Vi skapar visuellt innehåll som driver resultat. Från videoproduktion till webbdesign - vi hjälper ditt varumärke att sticka ut och växa.",
      backgroundImage: heroPhotography,
      ctaText: "Upptäck våra tjänster",
      ctaLink: "#services"
    },
    {
      id: 2,
      title: "Videoproduktion",
      subtitle: "För sociala medier & annonser",
      description: "Korta och slagkraftiga videor som engagerar, bygger varumärke och driver resultat på alla plattformar.",
      backgroundImage: heroVideo,
      ctaText: "Se våra videor",
      ctaLink: "/videoproduktion"
    },
    {
      id: 3,
      title: "Sociala Medier",
      subtitle: "Innehåll och publicering",
      description: "Vi skapar inte bara innehåll – vi hanterar även dina sociala medier. Vi planerar, producerar och publicerar åt dig.",
      backgroundImage: heroSocial,
      ctaText: "Läs mer om tjänsten",
      ctaLink: "/innehall-publicering"
    },
    {
      id: 4,
      title: "Produktfotografering",
      subtitle: "Professionella bilder som säljer",
      description: "Framhäv dina produkter med professionella bilder som ökar försäljningen både online och i butik.",
      backgroundImage: heroProducts,
      ctaText: "Se vårt portfolio",
      ctaLink: "/produktfotografering"
    },
    {
      id: 5,
      title: "Webbdesign",
      subtitle: "& utveckling",
      description: "Responsiva och användarvänliga hemsidor anpassade efter ditt varumärke och målgrupp.",
      backgroundImage: heroWeb,
      ctaText: "Utforska våra webbsidor",
      ctaLink: "/webbdesign"
    }
  ];

  return (
    <div className="relative">
      <Navigation />
      <VerticalSlider slides={slides} />
      <ServicesSection />
      <AboutUsSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;

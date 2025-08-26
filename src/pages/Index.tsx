import Navigation from '../components/Navigation';
import VerticalSlider from '../components/VerticalSlider';
import ServicesSection from '../components/ServicesSection';
import AboutUsSection from '../components/AboutUsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import InstagramSection from '../components/InstagramSection';
import FloatingActions from '../components/FloatingActions';
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
      title: "TurgoMedia",
      subtitle: "إنتاج إبداعي للشركات الحديثة",
      description: "نحن نصنع محتوى بصرياً يقود إلى النتائج. من إنتاج الفيديو إلى تصميم المواقع – نساعد علامتك التجارية على التميز والنمو.",
      backgroundImage: heroPhotography,
      ctaText: "اكتشف خدماتنا",
      ctaLink: "#services"
    },
    {
      id: 2,
      title: "إنتاج الفيديو",
      subtitle: "لوسائل التواصل الاجتماعي والإعلانات",
      description: "مقاطع فيديو قصيرة وقوية تجذب الانتباه، تبني العلامة التجارية وتحقق النتائج على جميع المنصات.",
      backgroundImage: heroVideo,
      ctaText: "شاهد مقاطعنا",
      ctaLink: "/videoproduktion"
    },
    {
      id: 3,
      title: "وسائل التواصل الاجتماعي",
      subtitle: "المحتوى والنشر",
      description: "نحن لا ننشئ المحتوى فقط – بل ندير أيضاً حساباتك على وسائل التواصل الاجتماعي. نخطط، ننتج وننشر بالنيابة عنك.",
      backgroundImage: heroSocial,
      ctaText: "اقرأ المزيد عن الخدمة",
      ctaLink: "/innehall-publicering"
    },
    {
      id: 4,
      title: "تصوير المنتجات",
      subtitle: "صور احترافية تزيد المبيعات",
      description: "أبرز منتجاتك بصور احترافية تزيد من المبيعات سواء عبر الإنترنت أو في المتاجر.",
      backgroundImage: heroProducts,
      ctaText: "شاهد أعمالنا",
      ctaLink: "/produktfotografering"
    },
    {
      id: 5,
      title: "تصميم المواقع",
      subtitle: "والتطوير",
      description: "مواقع متجاوبة وسهلة الاستخدام مصممة لتناسب علامتك التجارية وجمهورك المستهدف.",
      backgroundImage: heroWeb,
      ctaText: "استكشف مواقعنا",
      ctaLink: "/webbdesign"
    }
  ];

  return (
    <div className="relative" dir="rtl">
      <Navigation />
      <VerticalSlider slides={slides} />
      <ServicesSection />
      <AboutUsSection />
      <TestimonialsSection />
      <InstagramSection />
      <FloatingActions />
      <Footer />
    </div>
  );
};

export default Index;

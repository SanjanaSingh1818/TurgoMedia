import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Play, Search, MapPin, TrendingUp, Globe } from 'lucide-react';
import heroImage from '../assets/hero3.jpg';
import seo1 from '../assets/sm1.mp4';
import seo2 from '../assets/sm2.mp4';
import seo3 from '../assets/sm3.mp4';

const SeoLokalSynlighet = () => {
  const portfolioItems = [
    { title: "تحسين محركات البحث لمطعم محلي", description: "تحسين الظهور على خرائط جوجل وجذب المزيد من العملاء", video: seo1, stats: "زيادة الحجوزات بنسبة 70%" },
    { title: "تحسين محركات البحث للتجارة الإلكترونية", description: "تحسينات عضوية زادت من حركة المرور إلى المتجر الإلكتروني", video: seo2, stats: "زيادة بنسبة 50% في الزيارات العضوية" },
    { title: "تحسين محركات البحث للشركات", description: "استراتيجية SEO لشركة استشارية زادت العملاء المحتملين عبر جوجل", video: seo3, stats: "زيادة 3 أضعاف في الاستفسارات" }
  ];

  const services = [
    { icon: <Search className="w-6 h-6 sm:w-8 sm:h-8" />, title: "تحسين الصفحات الداخلية (On-page SEO)", description: "تحسين العناوين، الوسوم، المحتوى والبنية لزيادة الترتيب." },
    { icon: <MapPin className="w-6 h-6 sm:w-8 sm:h-8" />, title: "السيو المحلي", description: "مساعدة عملك في الظهور على خرائط جوجل ونتائج البحث المحلية." },
    { icon: <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8" />, title: "استراتيجية SEO", description: "استراتيجيات مبنية على البيانات لزيادة الظهور العضوي وحركة المرور." },
    { icon: <Globe className="w-6 h-6 sm:w-8 sm:h-8" />, title: "السيو التقني", description: "تحسين سرعة التحميل، التوافق مع الهواتف الذكية وهيكل الموقع." }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900" dir="rtl">
      <Navigation />

      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-[60vh] sm:min-h-screen">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white max-w-[90%] mx-auto px-2 sm:px-6">
          <h1 className="text-2xl xs:text-2.5xl sm:text-5xl md:text-6xl font-bold mb-2 xs:mb-3 sm:mb-6">تحسين محركات البحث و الظهور المحلي</h1>
          <p className="text-sm xs:text-base sm:text-2xl mb-2 xs:mb-3 sm:mb-8">كن في متناول العملاء المناسبين، في المكان المناسب، وفي الوقت المناسب</p>
          <p className="text-xs xs:text-sm sm:text-xl mb-4 xs:mb-5 sm:mb-12 text-gray-200 max-w-[95%] mx-auto">
            نحن نساعد الشركات على الظهور بترتيب أعلى في جوجل، تحسين الظهور المحلي، وزيادة حركة المرور التي تؤدي إلى المزيد من العملاء والمبيعات.
          </p>
          <a href="https://wa.me/46722282221" target="_blank" rel="noopener noreferrer">
            <button className="w-full xs:w-full sm:w-auto px-4 sm:px-8 py-2 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg transition">
              تواصل معنا اليوم
            </button>
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-10 xs:py-12 sm:py-24 px-2 xs:px-4 sm:px-6 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-xl xs:text-2xl sm:text-5xl font-bold text-center mb-2 xs:mb-3 sm:mb-6">خدمات تحسين محركات البحث لدينا</h2>
          <p className="text-xs xs:text-sm sm:text-lg text-center text-gray-600 mb-4 xs:mb-6 sm:mb-16 max-w-[95%] mx-auto">
            من تحسين السيو المحلي إلى التحسينات التقنية – نقدم حلولاً متكاملة لتحسين ظهورك الرقمي وزيادة نتائجك.
          </p>
          <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 gap-3 xs:gap-4 sm:gap-8 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-3 xs:p-4 sm:p-8 border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="text-blue-600 mb-2">{service.icon}</div>
                <h3 className="text-sm xs:text-base sm:text-2xl font-bold mb-1 xs:mb-2">{service.title}</h3>
                <p className="text-xs xs:text-sm sm:text-lg text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-10 xs:py-12 sm:py-24 px-2 xs:px-4 sm:px-6 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-xl xs:text-2xl sm:text-5xl font-bold text-center mb-2 xs:mb-3 sm:mb-6">نتائج تحسين محركات البحث لدينا</h2>
          <p className="text-xs xs:text-sm sm:text-lg text-gray-600 text-center mb-4 xs:mb-6 sm:mb-16 max-w-[95%] mx-auto">
            فيما يلي بعض الأمثلة على الشركات التي ساعدناها على النمو من خلال تحسين محركات البحث والظهور المحلي.
          </p>
          <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 xs:gap-4 sm:gap-8">
            {portfolioItems.map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl">
                  <video 
                    src={item.video}
                    className="w-full h-40 xs:h-48 sm:h-64 md:h-72 lg:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                    autoPlay loop muted playsInline
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Play className="w-8 xs:w-10 sm:w-16 h-8 xs:h-10 sm:h-16 text-white" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-2 xs:p-3 sm:p-6 text-white z-10">
                    <h3 className="text-xs xs:text-sm sm:text-xl font-bold mb-0.5">{item.title}</h3>
                    <p className="text-[10px] xs:text-xs sm:text-base mb-0.5">{item.description}</p>
                    <p className="text-yellow-400 font-semibold text-[10px] xs:text-xs sm:text-base">{item.stats}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 xs:py-12 sm:py-24 px-2 xs:px-4 sm:px-6 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-lg xs:text-xl sm:text-4xl font-bold mb-2 xs:mb-3 sm:mb-8">هل تريد السيطرة على نتائج البحث؟</h2>
          <p className="text-xs xs:text-sm sm:text-xl text-gray-600 mb-4 xs:mb-6 sm:mb-12 max-w-[95%] mx-auto">
            تواصل معنا للحصول على تحليل SEO مجاني. سنساعدك على أن تكون مرئيًا للعملاء المناسبين، في المكان المناسب، وفي الوقت المناسب.
          </p>
          <a href="https://wa.me/46722282221" target="_blank" rel="noopener noreferrer">
            <button className="w-full xs:w-full sm:w-auto px-4 sm:px-8 py-2 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg transition">
              احصل على تحليل SEO مجاني
            </button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SeoLokalSynlighet;

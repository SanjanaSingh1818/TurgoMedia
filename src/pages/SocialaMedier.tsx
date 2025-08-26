import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Play, Instagram, Youtube, Twitter, Facebook } from 'lucide-react';
import heroImage from '../assets/social-hero.jpg';
import sm1 from '../assets/sm1.mp4';
import sm2 from '../assets/sm2.mp4';
import sm3 from '../assets/sm3.mp4';

const SocialaMedier = () => {
  const portfolioItems = [
    {
      title: "ريل إنستغرام",
      description: "ريل إبداعي وصل إلى 500 ألف مشاهدة في أسبوع واحد",
      video: sm1,
      stats: "500 ألف مشاهدة"
    },
    {
      title: "يوتيوب شورتس",
      description: "شورتس جذاب لعلامة تقنية زاد عدد المشتركين بشكل كبير",
      video: sm2,
      stats: "+10 آلاف مشترك"
    },
    {
      title: "حملة تيك توك",
      description: "فيديو تيك توك ترند حقق انتشارًا واسعًا",
      video: sm3,
      stats: "1M+ مشاهدة"
    }
  ];

  const services = [
    {
      icon: <Instagram className="w-8 h-8" />,
      title: "ريل إنستغرام",
      description: "ريل قصير وجذاب يعزز تفاعل جمهورك ويقوي علامتك التجارية."
    },
    {
      icon: <Youtube className="w-8 h-8" />,
      title: "يوتيوب شورتس",
      description: "شورتس محسّنة لزيادة المشاهدات والمشتركين."
    },
    {
      icon: <Facebook className="w-8 h-8" />,
      title: "قصص فيسبوك",
      description: "اجذب الانتباه بقصص إبداعية مخصصة لجمهورك."
    },
    {
      icon: <Twitter className="w-8 h-8" />,
      title: "حملات تيك توك",
      description: "اصنع فيديوهات تيك توك تنتشر بسرعة وتصل إلى جمهور واسع."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900" dir="rtl">
      {/* الهيدر */}
      <Navigation />

      {/* القسم الرئيسي */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">وسائل التواصل الاجتماعي</h1>
          <p className="text-2xl mb-8">ريلز • شورتس • تيك توك • ستوريات</p>
          <p className="text-xl mb-12 text-gray-200 max-w-3xl mx-auto">
            أنشئ فيديوهات جذابة لوسائل التواصل الاجتماعي تصل لجمهورك، تعزز علامتك التجارية وتصبح ترند. 
            نحن ننتج كل شيء من ريل إنستغرام إلى شورتس يوتيوب وصيحات تيك توك.
          </p>
          <a 
            href="https://wa.me/46722282221 " 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg transition">
              تواصل معنا اليوم
            </button>
          </a>
        </div>
      </section>

      {/* الخدمات */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-6">
            خدماتنا في وسائل التواصل الاجتماعي
          </h2>
          <p className="text-center text-lg text-gray-600 mb-16 max-w-2xl mx-auto">
            نقدم مجموعة واسعة من الخدمات لوسائل التواصل الاجتماعي – من الريلز القصيرة إلى الحملات الكاملة. 
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

      {/* البورتفوليو */}
      <section className="py-24 px-6 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-6">
            أعمالنا
          </h2>
          <p className="text-center text-lg text-gray-600 mb-16 max-w-2xl mx-auto">
            إليك بعضًا من مشاريعنا الناجحة على وسائل التواصل الاجتماعي.
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

      {/* القسم الأخير */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            هل تريد النمو على وسائل التواصل الاجتماعي؟
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            تواصل معنا للحصول على استشارة مجانية. نساعدك في إنشاء فيديوهات تنتشر بسرعة وتحقق نتائج فعلية.
          </p>
          <a 
            href="https://wa.me/46722282221 " 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg transition">
              احصل على عرض مجاني
            </button>
          </a>
        </div>
      </section>

      {/* الفوتر */}
      <Footer />
    </div>
  );
};

export default SocialaMedier;

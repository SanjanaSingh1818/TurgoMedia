import Navigation from '../components/Navigation';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';
import heroPhotography from '../assets/hero-photography.jpg';

const Kontakt = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('تم إرسال النموذج:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroPhotography})` }}
        />
        <div className="cinematic-overlay" />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="hero-title mb-6">
            اتصل بنا
          </h1>
          <p className="hero-subtitle">
            دعنا نناقش مشروعك القادم
          </p>
        </div>
      </section>

      <div className="py-24 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="reveal-up">
              <h2 className="text-3xl font-bold mb-8">
                أرسل لنا رسالة
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      الاسم *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-background"
                      placeholder="اسمك الكامل"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      البريد الإلكتروني *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-background"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      الهاتف
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-background"
                      placeholder="+966 500 000 000"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2">
                      مهتم بـ
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-background"
                    >
                      <option value="">اختر الخدمة</option>
                      <option value="videoproduktion">إنتاج الفيديو</option>
                      <option value="sociala-medier">وسائل التواصل الاجتماعي</option>
                      <option value="produktfoto">تصوير المنتجات</option>
                      <option value="webbdesign">تصميم وتطوير المواقع</option>
                      <option value="seo">تحسين محركات البحث & الظهور المحلي</option>
                      <option value="kombination">دمج الخدمات</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    الرسالة *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-background"
                    placeholder="أخبرنا عن مشروعك، أهدافك وميزانيتك..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="btn-cinematic text-white rounded-lg w-full flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  إرسال الرسالة
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="reveal-up">
              <h2 className="text-3xl font-bold mb-8">
                معلومات التواصل
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">البريد الإلكتروني</h3>
                    <p className="text-muted-foreground">hej@turgomedia.se</p>
                    <p className="text-muted-foreground">info@turgomedia.se</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">الهاتف</h3>
                    <p className="text-muted-foreground">+46 70 123 45 67</p>
                    <p className="text-sm text-muted-foreground">أيام الأسبوع 9:00-17:00</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">الموقع</h3>
                    <p className="text-muted-foreground">ستوكهولم، السويد</p>
                    <p className="text-sm text-muted-foreground">نعمل في جميع أنحاء البلاد</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">ساعات العمل</h3>
                    <p className="text-muted-foreground">الإثنين - الجمعة: 9:00-17:00</p>
                    <p className="text-muted-foreground">العطلات: حسب الاتفاق</p>
                  </div>
                </div>
              </div>

              {/* Quick Response Times */}
              <div className="mt-12 bg-card rounded-2xl p-8 border border-border/20">
                <h3 className="text-xl font-bold mb-6">سرعة الاستجابة</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">البريد الإلكتروني:</span>
                    <span className="font-medium">خلال ساعتين</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">الهاتف:</span>
                    <span className="font-medium">رد مباشر</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">عرض السعر:</span>
                    <span className="font-medium">خلال 24 ساعة</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">بدء المشروع:</span>
                    <span className="font-medium">خلال أسبوع واحد</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            الأسئلة الشائعة
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "كم يستغرق المشروع عادةً؟",
                answer: "يعتمد على حجم المشروع، ولكن معظم المشاريع تستغرق من 2 إلى 6 أسابيع من البداية حتى التسليم."
              },
              {
                question: "هل تعملون في جميع أنحاء السويد؟",
                answer: "نعم، نعمل في جميع أنحاء السويد. وللمشاريع المحلية يمكننا الاجتماع شخصياً."
              },
              {
                question: "ما تكلفة خدماتكم؟",
                answer: "الأسعار تختلف حسب المشروع. تواصل معنا للحصول على عرض مجاني."
              },
              {
                question: "هل أمتلك حقوق المواد المنتجة؟",
                answer: "نعم، ستحصل على حقوق ملكية كاملة لجميع المواد التي ننتجها لشركتك."
              },
              {
                question: "هل تقدمون دعماً بعد انتهاء المشروع؟",
                answer: "بالتأكيد! نقدم دعماً وصيانة مستمرة لجميع مشاريعنا."
              },
              {
                question: "هل يمكنكم المساعدة في إدارة وسائل التواصل بشكل مستمر؟",
                answer: "نعم، نقدم باقات شهرية لإدارة وسائل التواصل الاجتماعي وإنتاج المحتوى بشكل مستمر."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-card rounded-xl p-6 border border-border/20">
                <h3 className="font-bold mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            جاهز لبدء مشروعك؟
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            نحن نتطلع لسماع تفاصيل مشروعك وكيف يمكننا مساعدة شركتك على النمو.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="btn-cinematic text-white rounded-full"
              onClick={() => document.getElementById('name')?.focus()}
            >
              املأ النموذج
            </button>
            <button className="border border-primary text-primary font-semibold px-8 py-4 rounded-full hover:bg-primary hover:text-white transition-colors">
              اتصل بنا مباشرة
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Kontakt;

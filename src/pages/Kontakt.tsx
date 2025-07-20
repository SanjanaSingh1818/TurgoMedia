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
    // Handle form submission here
    console.log('Form submitted:', formData);
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
            Kontakta Oss
          </h1>
          <p className="hero-subtitle">
            Låt oss diskutera ditt nästa projekt
          </p>
        </div>
      </section>

      <div className="py-24 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="reveal-up">
              <h2 className="text-3xl font-bold mb-8">
                Skicka oss ett meddelande
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Namn *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-background"
                      placeholder="Ditt fullständiga namn"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      E-post *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-background"
                      placeholder="din@email.se"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-background"
                      placeholder="070-123 45 67"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2">
                      Intresserad av
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-background"
                    >
                      <option value="">Välj tjänst</option>
                      <option value="videoproduktion">Videoproduktion</option>
                      <option value="sociala-medier">Sociala Medier</option>
                      <option value="produktfoto">Produktfotografering</option>
                      <option value="webbdesign">Webbdesign & Utveckling</option>
                      <option value="seo">SEO & Lokal Synlighet</option>
                      <option value="kombination">Kombination av tjänster</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Meddelande *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-background"
                    placeholder="Berätta om ditt projekt, mål och budget..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="btn-cinematic text-white rounded-lg w-full flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Skicka meddelande
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="reveal-up">
              <h2 className="text-3xl font-bold mb-8">
                Kontaktinformation
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">E-post</h3>
                    <p className="text-muted-foreground">hej@turgomedia.se</p>
                    <p className="text-muted-foreground">info@turgomedia.se</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Telefon</h3>
                    <p className="text-muted-foreground">+46 70 123 45 67</p>
                    <p className="text-sm text-muted-foreground">Vardagar 9:00-17:00</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Plats</h3>
                    <p className="text-muted-foreground">Stockholm, Sverige</p>
                    <p className="text-sm text-muted-foreground">Vi arbetar över hela landet</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Öppettider</h3>
                    <p className="text-muted-foreground">Måndag - Fredag: 9:00-17:00</p>
                    <p className="text-muted-foreground">Helger: Efter överenskommelse</p>
                  </div>
                </div>
              </div>

              {/* Quick Response Times */}
              <div className="mt-12 bg-card rounded-2xl p-8 border border-border/20">
                <h3 className="text-xl font-bold mb-6">Snabba svarstider</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">E-post:</span>
                    <span className="font-medium">Inom 2 timmar</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Telefon:</span>
                    <span className="font-medium">Direkt svar</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Offert:</span>
                    <span className="font-medium">Inom 24 timmar</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Projektstart:</span>
                    <span className="font-medium">Inom 1 vecka</span>
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
            Vanliga frågor
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "Hur lång tid tar ett typiskt projekt?",
                answer: "Det beror på omfattningen, men de flesta projekt tar 2-6 veckor från start till leverans."
              },
              {
                question: "Arbetar ni över hela Sverige?",
                answer: "Ja, vi arbetar över hela Sverige. För lokala projekt kan vi också träffas på plats."
              },
              {
                question: "Vad kostar era tjänster?",
                answer: "Priserna varierar beroende på projekt. Kontakta oss för en kostnadsfri offert."
              },
              {
                question: "Får jag äga rättigheterna till materialet?",
                answer: "Ja, du äger full rätt till allt material vi producerar för ditt företag."
              },
              {
                question: "Erbjuder ni support efter projektets slut?",
                answer: "Absolut! Vi erbjuder kontinuerlig support och underhåll för alla våra projekt."
              },
              {
                question: "Kan ni hjälpa med sociala medier löpande?",
                answer: "Ja, vi erbjuder månadspaket för löpande hantering av sociala medier och innehållsproduktion."
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
            Redo att starta ditt projekt?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Vi ser fram emot att höra om ditt projekt och hur vi kan hjälpa ditt företag att växa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="btn-cinematic text-white rounded-full"
              onClick={() => document.getElementById('name')?.focus()}
            >
              Fyll i formuläret
            </button>
            <button className="border border-primary text-primary font-semibold px-8 py-4 rounded-full hover:bg-primary hover:text-white transition-colors">
              Ring oss direkt
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Kontakt;
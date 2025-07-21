import { Phone, MessageCircle, Instagram } from 'lucide-react';

const FloatingActions = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed right-6 bottom-6 z-50 flex flex-col gap-4">
      {/* Instagram */}
      <button
        onClick={() => scrollToSection('instagram')}
        className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Instagram"
      >
        <Instagram size={24} className="group-hover:scale-110 transition-transform duration-300" />
      </button>

      {/* WhatsApp */}
      <a
        href="https://wa.me/923214567890"
        target="_blank"
        rel="noopener noreferrer"
        className="group bg-green-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="WhatsApp"
      >
        <MessageCircle size={24} className="group-hover:scale-110 transition-transform duration-300" />
      </a>

      {/* Call */}
      <a
        href="tel:923214567890"
        className="group bg-blue-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Call"
      >
        <Phone size={24} className="group-hover:scale-110 transition-transform duration-300" />
      </a>
    </div>
  );
};

export default FloatingActions;
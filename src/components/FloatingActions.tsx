import { Phone, Mail } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
const FloatingActions = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed right-6 bottom-6 z-50 flex flex-col gap-4">
     

      {/* WhatsApp */}
      <a
        href="https://wa.me/46722282221"
        target="_blank"
        rel="noopener noreferrer"
        className="group bg-[#5f4c8c] text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="WhatsApp"
      >
        <FaWhatsapp size={24} className="group-hover:scale-110 transition-transform duration-300" />
      </a>

      {/* Call */}
      <a
        href="tel:+46707944944‬ "
        className="group bg-[#5f4c8c] text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Call"
      >
        <Phone size={24} className="group-hover:scale-110 transition-transform duration-300" />
      </a>

       {/* Mail */}
     <a
  href="mailto:info@turgomedia.se"
  className="group bg-[#5f4c8c] text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
  aria-label="Mail"
>
  <Mail size={24} className="group-hover:scale-110 transition-transform duration-300" />
</a>

    </div>
  );
};

export default FloatingActions;

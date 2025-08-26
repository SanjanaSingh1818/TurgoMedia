import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  featured?: boolean;
}

const ServiceCard = ({ title, description, image, link, featured = false }: ServiceCardProps) => {
  return (
    <Link 
      to={link}
      className={`group relative overflow-hidden rounded-2xl transition-all duration-700 hover:scale-105 ${
        featured ? 'md:col-span-2 md:row-span-2' : ''
      }`}
    >
      {/* خلفية الصورة */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      />
      
      {/* تدرج لوني فوق الصورة */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      
      {/* المحتوى */}
      <div className={`relative z-10 h-full flex flex-col justify-end p-6 text-white ${
        featured ? 'md:p-12' : ''
      }`}>
        <h3 className={`font-bold mb-3 transition-transform duration-300 group-hover:translate-y-[-4px] ${
          featured ? 'text-3xl md:text-4xl' : 'text-xl md:text-2xl'
        }`}>
          {title}
        </h3>
        
        <p className={`text-white/90 mb-4 line-clamp-3 transition-transform duration-300 group-hover:translate-y-[-4px] ${
          featured ? 'text-lg md:text-xl' : 'text-base'
        }`}>
          {description}
        </p>
        
        <div className="flex items-center text-primary-glow font-semibold transition-transform duration-300 group-hover:translate-x-2">
          <span className="mr-2">اقرأ المزيد</span>
          <ArrowRight 
            size={featured ? 24 : 20} 
            className="transition-transform duration-300 group-hover:translate-x-1" 
          />
        </div>
      </div>
      
      {/* تأثير الإطار عند التمرير */}
      <div className="absolute inset-0 border-2 border-primary/0 rounded-2xl transition-colors duration-300 group-hover:border-primary/30" />
    </Link>
  );
};

export default ServiceCard;

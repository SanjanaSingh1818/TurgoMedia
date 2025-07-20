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
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      
      {/* Content */}
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
          <span className="mr-2">Läs mer</span>
          <ArrowRight 
            size={featured ? 24 : 20} 
            className="transition-transform duration-300 group-hover:translate-x-1" 
          />
        </div>
      </div>
      
      {/* Hover Effect Border */}
      <div className="absolute inset-0 border-2 border-primary/0 rounded-2xl transition-colors duration-300 group-hover:border-primary/30" />
    </Link>
  );
};

export default ServiceCard;
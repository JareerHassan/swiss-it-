import { Mail, ChevronDown } from 'lucide-react';
import { Link } from '@/i18n/routing';

// 1. Pehle interface define karein ke props mein kya aa raha hai
interface HeaderUtilitiesProps {
  isSolid: boolean;
}

// 2. Component ko batayein ke ye props use karega
const HeaderUtilities = ({ isSolid }: HeaderUtilitiesProps) => {
  return (
    <div className="hidden lg:flex items-center space-x-8 font-medium">
      
      {/* Language Selector */}
      {/* <button className={`hover:text-accent-red transition-all text-[13px] uppercase tracking-wider flex items-center gap-1.5 cursor-pointer group ${isSolid ? 'text-charcoal' : 'text-white'}`}>
        Language 
        <ChevronDown className={`w-3 h-3 transition-colors group-hover:text-accent-red ${isSolid ? 'text-charcoal/50' : 'text-slate-400'}`} />
      </button> */}

      {/* Glassmorphic/Solid Contact Button */}
      <Link 
        href="/contact" 
        className={`
          relative inline-flex items-center gap-2 px-5 py-2.5 
          transition-all duration-500 rounded-full shadow-lg active:scale-95
          text-[13px] font-bold uppercase tracking-widest border
          
          ${isSolid 
            ? 'bg-charcoal text-white border-charcoal shadow-black/10' // Solid state
            : 'bg-white/40 backdrop-blur-md border-white/40 text-white shadow-black/5' // Transparent state
          }

          /* Hover States */
          hover:bg-accent-red hover:text-white hover:border-accent-red 
          hover:shadow-accent-red/20 
        `}
      >
        <Mail className="w-3.5 h-3.5" />
        Contact Us
      </Link>

    </div>
  );
};

export default HeaderUtilities;
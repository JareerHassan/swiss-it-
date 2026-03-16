import { Mail, ChevronDown } from 'lucide-react';
import { Link } from '@/i18n/routing';

const HeaderUtilities = () => {
  return (
    <div className="hidden md:flex items-center space-x-8 font-medium">
      
      {/* Language Selector */}
      <button className="hover:text-accent-red transition-all text-[13px] uppercase tracking-wider flex items-center gap-1.5 cursor-pointer group text-charcoal/80">
        Language 
        <ChevronDown className="w-3 h-3 text-slate-400 group-hover:text-accent-red transition-colors" />
      </button>

      {/* Glassmorphic Contact Button */}
      <Link 
        href="/contact" 
        className={`
          relative inline-flex items-center gap-2 px-5 py-2.5 
          /* Glass Effect */
          bg-white/40 backdrop-blur-md 
          border border-white/40 
          text-white text-[13px] font-bold uppercase tracking-widest 
          rounded-full shadow-lg shadow-black/5
          /* Hover States */
          hover:bg-accent-red hover:text-white hover:border-accent-red 
          hover:shadow-accent-red/20 transition-all duration-500 
          active:scale-95
        `}
      >
        <Mail className="w-3.5 h-3.5" />
        Contact Us
      </Link>

    </div>
  );
};

export default HeaderUtilities;
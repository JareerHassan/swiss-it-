import { MapPin, Info } from 'lucide-react';
import { Link } from '@/i18n/routing';

const HeaderUtilities = () => {
  return (
    <div className="hidden md:flex items-center space-x-6 font-medium">
      <Link href="/meetings" className="hover:text-[#e3000f] transition-colors text-sm">
        Meetings
      </Link>

      <div className="hover:text-[#e3000f] transition-colors text-sm flex items-center gap-1 cursor-pointer">
        Language <span className="text-[10px]">▼</span>
      </div>

      <button className="hover:text-[#e3000f] transition-colors">
        <MapPin className="w-6 h-6" />
      </button>
      <button className="hover:text-[#e3000f] transition-colors">
        <Info className="w-6 h-6" />
      </button>
    </div>
  );
};

export default HeaderUtilities;


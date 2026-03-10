'use client';

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Search, MapPin, Info } from 'lucide-react'
import { Link } from "@/i18n/routing"

const Header = () => {
  // State for hover effect
  const [isHovered, setIsHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event to make header solid
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine if header should be transparent (no interaction) or solid dark (hovered or scrolled)
  const isSolid = isHovered || isScrolled;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 border-b border-white/10 ${
        isSolid ? 'bg-[#221115] text-white' : 'bg-transparent text-white'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[100px]"> {/* Taller header to match design */}
          
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="text-[28px] font-bold tracking-tight">
                swi<span className="text-[#e3000f]">+</span>zerland
              </span>
            </Link>
          </div>
          
          {/* Main Navigation */}
          <nav className="hidden md:flex space-x-8 items-center font-medium text-lg">
            <Link href="/destinations" className="hover:text-[#e3000f] transition-colors">Destinations</Link>
            <Link href="/experiences" className="hover:text-[#e3000f] transition-colors">Experiences</Link>
            <Link href="/accommodation" className="hover:text-[#e3000f] transition-colors">Accommodation</Link>
            <Link href="/planning" className="hover:text-[#e3000f] transition-colors">Planning</Link>
            
            {/* Divider */}
            <div className="h-6 w-[1px] bg-white/20 mx-4" />
            
            <button className="flex items-center space-x-2 hover:text-[#e3000f] transition-colors">
              <Search className="w-6 h-6" />
              <span>Search</span>
            </button>
          </nav>
          
          {/* Right Utilities */}
          <div className="hidden md:flex items-center space-x-6 font-medium">
            <Link href="/meetings" className="hover:text-[#e3000f] transition-colors text-sm">Meetings</Link>
            
            {/* Minimalist LocalSelect without custom complex styles for now, assume generic text */}
            <div className="hover:text-[#e3000f] transition-colors text-sm flex items-center gap-1 cursor-pointer">
               Language <span className="text-[10px]">▼</span>
            </div>
            {/* Note: In real app, integrate LocalSelect but style carefully for dark header */}
            {/* <LocalSelect defaultValue={locale} label="Language"  /> */}
            
            <button className="hover:text-[#e3000f] transition-colors">
              <MapPin className="w-6 h-6" />
            </button>
            <button className="hover:text-[#e3000f] transition-colors">
              <Info className="w-6 h-6" />
            </button>
          </div>
          
          {/* Mobile Menu Trigger */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="hover:bg-white/10 hover:text-white">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#221115] text-white border-l-[#44222a]">
                <nav className="flex flex-col space-y-4 mt-8 text-lg">
                  <Link href="/destinations" className="hover:text-[#e3000f]">Destinations</Link>
                  <Link href="/experiences" className="hover:text-[#e3000f]">Experiences</Link>
                  <Link href="/accommodation" className="hover:text-[#e3000f]">Accommodation</Link>
                  <Link href="/planning" className="hover:text-[#e3000f]">Planning</Link>
                  <div className="h-[1px] w-full bg-white/20 my-4" />
                  <Link href="/meetings" className="hover:text-[#e3000f]">Meetings</Link>
                  <span className="hover:text-[#e3000f]">Language</span>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
          
        </div>
      </div>
    </header>
  )
}

export default Header

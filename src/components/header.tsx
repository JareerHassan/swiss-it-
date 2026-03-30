'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from 'lucide-react';
import { Link } from "@/i18n/routing";
import Image from 'next/image';
import {
  Globe,
  Hotel,
  Smartphone,
  Megaphone,
  Bot,
  Lightbulb,
} from "lucide-react";

import HeaderUtilities from '@/components/HeaderUtilities';

const servicesList = [
  { title: 'AI Automation', slug: 'ai-automation', icon: Bot },
  { title: 'Website Development', slug: 'website-development', icon: Globe },
  { title: 'Hotel Direct Booking Solutions', slug: 'hotel-booking-systems', icon: Hotel },
  { title: 'Mobile App Development', slug: 'mobile-app-development', icon: Smartphone },
  { title: 'Digital Marketing', slug: 'digital-marketing', icon: Megaphone },
  { title: 'Consulting & Growth Support', slug: 'consulting-growth-support', icon: Lightbulb },
];

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = () => {
    setIsServicesOpen(true);
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
  };

  const handleMouseLeave = () => {
    // Delay 5 seconds (5000ms) before closing
    hoverTimeout.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 100);
  };

  const isSolid = isHovered || isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 border-b border-border-light ${isSolid ? 'bg-bg-main text-charcoal shadow-sm' : 'bg-transparent text-white'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[100px]">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src={isSolid ? "/assets/logo.png" : "/assets/logo1.png"}
              alt="Logo"
              width={180}
              height={50}
              className="object-contain transition-all duration-300"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex space-x-8 items-center font-medium text-lg relative">
            <Link href="/about" className="hover:text-accent-red transition-colors">About</Link>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link 
                href="/services"
                className="flex items-center gap-1.5 py-2 hover:text-accent-red transition-colors"
              >
                Services
                <svg className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </Link>

              {/* Dropdown */}
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-3 w-72 bg-white text-charcoal rounded-xl shadow-xl border border-border-light/60 overflow-hidden z-50">
                  <div className="py-2">
                    {servicesList.map((service) => {
                      const Icon = service.icon;
                      return (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className="flex items-center gap-3 px-5 py-3.5 hover:bg-accent-red/10 transition-colors duration-200 group"
                        >
                          {/* <div className="w-8 h-8 rounded-lg bg-accent-red/10 flex items-center justify-center group-hover:bg-accent-red/20 transition-colors">
                            <Icon className="w-5 h-5 text-accent-red" />
                          </div> */}
                          <span className="font-medium">{service.title}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
            <Link href="/faq" className="hover:text-accent-red transition-colors">Faq</Link>

            <Link href="/blog" className="hover:text-accent-red transition-colors">Blogs</Link>
            <Link href="/contact" className="hover:text-accent-red transition-colors">Contact</Link>
          </nav>

          {/* Right Utilities */}
          <HeaderUtilities isSolid={isSolid} />

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="hover:bg-[#d91f26] hover:text-white transition-colors">
                  <Menu className="h-7 w-7" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="bg-bg-main text-charcoal border-border-light w-[85%] sm:w-96">
                <nav className="flex flex-col space-y-5 mt-10 text-lg font-medium">
                  <Link href="/about" onClick={() => setIsMobileOpen(false)} className="hover:text-accent-red transition-colors py-1">About</Link>
                  {/* Mobile Services Accordion */}
                  <details className="group">
                    <summary className="cursor-pointer hover:text-accent-red list-none flex items-center justify-between py-1">
                      <span>Services</span>
                      <svg className="w-5 h-5 transition-transform duration-200 group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </summary>
                    <div className="flex flex-col pl-3 mt-3 space-y-3 border-l-2 border-accent-red/30">
                      {servicesList.map((service) => {
                        const Icon = service.icon;
                        return (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            onClick={() => setIsMobileOpen(false)}
                            className="flex items-center gap-3 py-2 w-full text-left hover:text-accent-red transition-colors"
                          >
                       
                            <span>{service.title}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </details>
                  <Link href="/faq" onClick={() => setIsMobileOpen(false)} className="hover:text-accent-red transition-colors py-1">Faq</Link>
                  <Link href="/blog" onClick={() => setIsMobileOpen(false)} className="hover:text-accent-red transition-colors py-1">Blogs</Link>
                  <Link href="/contact" onClick={() => setIsMobileOpen(false)} className="hover:text-accent-red transition-colors py-1 ">Contact</Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
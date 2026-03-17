'use client';

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Search } from 'lucide-react';
import { Link } from "@/i18n/routing";
import HeaderUtilities from '@/components/HeaderUtilities';
import Image from 'next/image'; // Next.js Image component

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isSolid = isHovered || isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 border-b border-border-light ${isSolid ? 'bg-bg-main text-charcoal shadow-sm' : 'bg-transparent text-white'
        }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[100px]">

          {/* Logo Section */}
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image
                src={isSolid ? "/assets/logo.png" : "/assets/logo1.png"}
                alt="Logo"
                width={180}
                height={50}
                className="object-contain transition-all duration-300"
              />
            </Link>
          </div>

          {/* Main Navigation */}
          <nav className="hidden lg:flex space-x-8 items-center font-medium text-lg">
            <Link href="/about" className="hover:text-accent-red transition-colors">About</Link>
            <Link href="/services" className="hover:text-accent-red transition-colors">Services</Link>
            <Link href="/blog" className="hover:text-accent-red transition-colors">Blogs</Link>
            <Link href="/faq" className="hover:text-accent-red transition-colors">Faq</Link>
            <Link href="/contact" className="hover:text-accent-red transition-colors">Contact</Link>


           
          </nav>

          {/* Right Utilities */}
        {/* Right Utilities */}
<HeaderUtilities isSolid={isSolid} />

          {/* Mobile Menu Trigger */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="hover:bg-bg-soft hover:text-white">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-bg-main text-charcoal border-border-light">
                <nav className="flex flex-col space-y-4 mt-8 text-lg">
                  <Link href="/about" className="hover:text-accent-red">About</Link>
                  <Link href="/services" className="hover:text-accent-red">Services</Link>
                  <Link href="/blog" className="hover:text-accent-red">Blogs</Link>
                  <Link href="/faq" className="hover:text-accent-red">Faq</Link>
                  <div className="h-[1px] w-full bg-white/20 my-4" />
                  <Link href="/contact" className="hover:text-accent-red">Contact</Link>
                  <span className="hover:text-accent-red">Language</span>
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
"use client";

import Link from 'next/link';
import { FaFacebookF, FaTiktok, FaInstagram, FaLinkedinIn, FaPinterestP, FaYoutube } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import Image from 'next/image';

interface FooterProps {
  locale?: string;
}

const Footer = ({ locale = 'en' }: FooterProps) => {
  const tLink = (path: string) => `/${locale}${path}`;

  return (
    <footer className="bg-bg-soft text-charcoal pt-16 pb-8 font-sans border-t border-border-light">
      {/* Decorative Banner */}
      <div className="relative w-full h-40 mb-12 overflow-hidden shadow-lg">
        <Image
          src="/assets/contact-banner.jpg"
          alt="Decorative Footer Banner"
          fill
          className="object-cover object-center filter brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-soft/90 to-transparent" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl">
        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

          
          {/* Column 2: More Pages */}
          <div>
            <h3 className="font-bold text-lg mb-6">More Pages</h3>
            <ul className="space-y-4 border-t border-border-light pt-4">
              <li><Link href={tLink('/about')} className="text-sm hover:underline text-muted">About</Link></li>
              <li><Link href={tLink('/services')} className="text-sm hover:underline text-muted">Services</Link></li>
              <li><Link href={tLink('/faq')} className="text-sm hover:underline text-muted">Faq</Link></li>
              <li><Link href={tLink('/blog')} className="text-sm hover:underline text-muted">Blogs</Link></li>
              <li><Link href={tLink('/contact')} className="text-sm hover:underline text-muted">Contact</Link></li>
            </ul>
          </div>
          {/* Column 1: Services */}
          <div>
            <h3 className="font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-4 border-t border-border-light pt-4">
              <li><Link href={tLink('/services/website-development')} className="text-sm hover:underline text-muted">Website Development</Link></li>
              <li><Link href={tLink('/services/hotel-booking-systems')} className="text-sm hover:underline text-muted">Hotel Direct Booking Solutions</Link></li>
              <li><Link href={tLink('/services/mobile-app-development')} className="text-sm hover:underline text-muted">Mobile App Development</Link></li>
              <li><Link href={tLink('/services/digital-marketing')} className="text-sm hover:underline text-muted">Digital Marketing</Link></li>
              <li><Link href={tLink('/services/ai-automation')} className="text-sm hover:underline text-muted">AI Automation</Link></li>
              <li><Link href={tLink('/services/consulting-growth-support')} className="text-sm hover:underline text-muted">Consulting & Growth Support</Link></li>
            </ul>
          </div>


          {/* Column 3: Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6">Contact</h3>
            <ul className="space-y-4 border-t border-border-light pt-4 text-sm text-muted">
              <li>
                Address:{" "}
                <Link href="https://maps.app.goo.gl/wC5QgkJp5MQJ7e8M9" target="_blank" className="hover:underline">
                  Bahnhofstrasse 21, 3860 Meiringen, Switzerland
                </Link>
              </li>
              <li>
                Phone / WhatsApp:{" "}
                <Link href="tel:+4915223506691" className="hover:underline">+49 1522 3506691</Link>
              </li>
              <li>
                Email:{" "}
                <Link href="mailto:highlandgroupgmbh@gmail.com" className="hover:underline">highlandgroupgmbh@gmail.com</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter and Social Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-16">
          {/* Newsletter Button */}
          <div>
            <p className="text-sm font-bold mb-4">Newsletter</p>
            <a
              href="mailto:highlandgroupgmbh@gmail.com"
              className="bg-accent-red hover:opacity-90 text-white px-8 py-4 rounded-full flex items-center gap-3 transition-colors font-semibold"
            >
              <MdOutlineEmail className="text-xl" />
              Register via Email
            </a>
          </div>

          {/* Social Icons */}
          <div>
            <p className="text-sm font-bold mb-4">Follow us</p>
            <div className="flex gap-2">
              {[FaFacebookF, FaTiktok, FaInstagram, FaLinkedinIn, FaPinterestP, FaYoutube].map((Icon, idx) => (
                <Link key={idx} href="#" className="bg-bg-main border border-border-light hover:bg-border-light p-3 rounded-lg transition-colors">
                  <Icon className="text-lg text-muted" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border-light pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-muted font-medium">
            © {new Date().getFullYear()} Highland Group GmbH   .
            <Link
              href="https://oxmite.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d91f26]  hover:text-[#d91f26]/80"
            >
              Developed by Oxmite Digital Ltd
            </Link>
          
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
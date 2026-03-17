"use client";

import Link from 'next/link';
import { FaFacebookF, FaTiktok, FaInstagram, FaLinkedinIn, FaPinterestP, FaYoutube } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import Image from 'next/image';

interface FooterProps {
  locale?: string;
}

const Footer = ({ locale = 'en' }: FooterProps) => {
  // Helper to prepend locale to path
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
          {/* Column 1: Legal */}
          <div>
            <h3 className="font-bold text-lg mb-6">Legal Information</h3>
            <ul className="space-y-4 border-t border-border-light pt-4">
              <li><Link href={tLink('/terms')} className="text-sm hover:underline text-muted">Terms of Use</Link></li>
              <li><Link href={tLink('/data-protection')} className="text-sm hover:underline text-muted">Data Protection</Link></li>
              <li><Link href={tLink('/cookies')} className="text-sm hover:underline text-muted">Cookies</Link></li>
              <li><Link href={tLink('/imprint')} className="text-sm hover:underline text-muted">Imprint</Link></li>
              <li><Link href={tLink('/accessibility')} className="text-sm hover:underline text-muted">Accessibility Statement</Link></li>
            </ul>
          </div>

          {/* Column 2: More Pages */}
          <div>
            <h3 className="font-bold text-lg mb-6">More Pages</h3>
            <ul className="space-y-4 border-t border-border-light pt-4">
              <li><Link href={tLink('/about')} className="text-sm hover:underline text-muted">About</Link></li>
              <li><Link href={tLink('/services')} className="text-sm hover:underline text-muted">Services</Link></li>
              <li><Link href={tLink('/blog')} className="text-sm hover:underline text-muted">Blogs</Link></li>
              <li><Link href={tLink('/faq')} className="text-sm hover:underline text-muted">Faq</Link></li>
              <li><Link href={tLink('/contact')} className="text-sm hover:underline text-muted">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6">Contact</h3>
            <ul className="space-y-4 border-t border-border-light pt-4">
              <li><Link href={tLink('/contact')} className="text-sm hover:underline text-muted">Address</Link></li>
              <li><Link href={tLink('/help')} className="text-sm hover:underline text-muted">Help Center</Link></li>
              <li><Link href={tLink('/media')} className="text-sm hover:underline text-muted">Media Corner</Link></li>
              <li><Link href={tLink('/trade')} className="text-sm hover:underline text-muted">Trade Corner</Link></li>
            </ul>
          </div>
        </div>

        {/* Newsletter and Social Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-16">
          {/* Newsletter Button */}
          <div>
            <p className="text-sm font-bold mb-4">Newsletter</p>
            <button className="bg-accent-red hover:opacity-90 text-white px-8 py-4 rounded-full flex items-center gap-3 transition-colors font-semibold">
              <MdOutlineEmail className="text-xl" />
              Register for Newsletter
            </button>
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
            © {new Date().getFullYear()} Highland Group GmbH
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
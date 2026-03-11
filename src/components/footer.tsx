import Link from 'next/link'
import { FaFacebookF, FaTiktok, FaInstagram, FaLinkedinIn, FaPinterestP, FaYoutube } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'
import { HiOutlineSearch } from 'react-icons/hi'

const Footer = () => {
  return (
    <footer className="bg-[#221115] text-white pt-16 pb-8 font-sans">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Search Bar Section */}
        <div className="relative mb-16">
          <div className="flex items-center bg-[#2d1619] rounded-full px-6 py-4 w-full max-w-4xl mx-auto border border-zinc-800/50">
            <HiOutlineSearch className="text-zinc-400 text-2xl mr-3" />
            <input 
              type="text" 
              placeholder="Search" 
              className="bg-transparent border-none outline-none text-zinc-300 w-full placeholder:text-zinc-500"
            />
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Column 1: Legal */}
          <div>
            <h3 className="font-bold text-lg mb-6">Legal information</h3>
            <ul className="space-y-4 border-t border-zinc-800/50 pt-4">
              {['Terms of use', 'Data protection', 'Cookies', 'Imprint', 'Accessibility Statement'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm hover:underline text-zinc-300">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: More Pages */}
          <div>
            <h3 className="font-bold text-lg mb-6">More Pages</h3>
            <ul className="space-y-4 border-t border-zinc-800/50 pt-4">
              {['STnet.ch - B2B Portal', 'Jobs', 'Partners', 'Apps', 'Annual report'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm hover:underline text-zinc-300">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6">Contact</h3>
            <ul className="space-y-4 border-t border-zinc-800/50 pt-4">
              {['Address', 'Help center', 'Media Corner', 'Trade Corner'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm hover:underline text-zinc-300">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter and Social Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-16">
          {/* Newsletter Button */}
          <div>
            <p className="text-sm font-bold mb-4">Newsletter</p>
            <button className="bg-red-700 hover:bg-red-500 text-white px-8 py-4 rounded-full flex items-center gap-3 transition-colors font-semibold">
              <MdOutlineEmail className="text-xl" />
              Register for newsletter
            </button>
          </div>

          {/* Social Icons */}
          <div>
            <p className="text-sm font-bold mb-4">Follow us</p>
            <div className="flex gap-2">
              {[FaFacebookF, FaTiktok, FaInstagram, FaLinkedinIn, FaPinterestP, FaYoutube].map((Icon, idx) => (
                <Link key={idx} href="#" className="bg-[#2d1619] hover:bg-[#3d2125] p-3 rounded-lg transition-colors">
                  <Icon className="text-lg text-zinc-300" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Awards/Logos Placeholder */}
          <div className="flex gap-4 grayscale opacity-70">
            <div className="h-10 w-10 bg-zinc-800 rounded"></div>
            <div className="h-10 w-10 bg-zinc-800 rounded"></div>
            <div className="h-10 w-10 bg-zinc-800 rounded"></div>
          </div>

          <div className="text-sm text-zinc-400 font-medium">
            © {new Date().getFullYear()} Switzerland Tourism
          </div>

          {/* Language Selector */}
          <div className="flex items-center gap-4 text-sm text-zinc-300">
             <span>Language</span>
             <div className="bg-[#2d1619] px-4 py-2 rounded-full border border-zinc-800 flex items-center cursor-pointer">
               English <span className="ml-2 text-[10px]">▼</span>
             </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
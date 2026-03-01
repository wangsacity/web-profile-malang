import Link from "next/link";
import { 
  Instagram, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Youtube, 
  Phone, 
  MapPin 
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#8da282] text-slate-900 py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Deskripsi Perusahaan */}
          <div className="col-span-1 md:col-span-1">
            <p className="text-sm leading-relaxed font-medium">
              PT Bumi Redjo Abadi merupakan pengembang perumahan yang berfokus pada 
              penyediaan hunian nyaman, tertata, dan bernilai bagi masyarakat, 
              dengan pengelolaan yang profesional dan berkelanjutan.
            </p>
            <div className="mt-8">
              <h3 className="font-bold mb-4 uppercase tracking-wider text-sm">Stay Connected</h3>
              <div className="flex gap-4">
                <Link href="https://instagram.com" className="hover:text-white transition-colors">
                  <Instagram size={20} />
                </Link>
                <Link href="https://facebook.com" className="hover:text-white transition-colors">
                  <Facebook size={20} />
                </Link>
                <Link href="https://twitter.com" className="hover:text-white transition-colors">
                  <Twitter size={20} />
                </Link>
                <Link href="https://linkedin.com" className="hover:text-white transition-colors">
                  <Linkedin size={20} />
                </Link>
                <Link href="https://youtube.com" className="hover:text-white transition-colors">
                  <Youtube size={20} />
                </Link>
              </div>
            </div>
          </div>

          {/* Kantor Pemasaran & Map */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-bold mb-4 text-lg">Kantor Pemasaran</h3>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <div className="flex items-start gap-2 mb-4">
                  <MapPin size={18} className="mt-1 shrink-0" />
                  <p className="text-sm leading-snug">
                    Jl. Angkawijaya, Bunton, Sidorahayu,<br />
                    Kec. Wagir, Kota Malang, Jawa Timur 65158
                  </p>
                </div>
                <Link 
                  href="https://wa.me/6282143694994" 
                  className="flex items-center gap-2 hover:text-white transition-colors font-semibold"
                >
                  <Phone size={18} />
                  <span>6282143694994</span>
                </Link>
              </div>
              
              {/* Google Maps Embed */}
              <div className="flex-1 h-32 md:h-40 rounded-lg overflow-hidden border border-black/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.923456789!2d112.59!3d-7.98!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNTgnNDguMCJTIDExMsKwMzUnMjQuMCJF!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Navigasi Page */}
          <div className="col-span-1">
            <h3 className="font-bold mb-4 text-lg">Page</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/about" className="hover:underline">About Us</Link></li>
              <li><Link href="/portfolio" className="hover:underline">Portofolio</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-6 border-t border-black/10 text-center text-xs opacity-70">
          © {currentYear} PT Bumi Redjo Abadi. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
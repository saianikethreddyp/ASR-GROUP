import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-3xl font-bold tracking-tighter">
              <span className="text-white">ASR</span>
              <span className="text-primary">GROUP</span>
            </div>
            <p className="text-gray-400 max-w-sm text-sm leading-relaxed">
              Where Style Meets Comfort. A comprehensive organization offering integrated solutions across interiors, construction, architectural elevations, and uPVC window systems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About Us", "Our Projects", "Gallery", "Contact Us"].map((link) => (
                <li key={link}>
                  <Link 
                    href={link === "Home" ? "/" : `/${link.toLowerCase().replace(" ", "-")}`}
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Divisions */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Our Divisions</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>ASR Homes PVT LTD (Interiors)</li>
              <li>
                <a 
                  href="https://avaniprojectsindia.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  ASR Homes PVT LTD (Construction)
                </a>
              </li>
              <li>Avani Realestate</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary shrink-0" size={18} />
                <span>Plot No. 8, 9, Krithika Layout Vasantha Cyber View Apartment, Madhapur, Hyderabad, Telangana 500081, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary shrink-0" size={18} />
                <span>+91 9908606867 (Vamsi)</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary shrink-0" size={18} />
                <span>+91 8008667766 (Rama)</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary shrink-0" size={18} />
                <a href="mailto:info@asrgroup.com" className="hover:text-primary transition-colors">info@asrgroup.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p>© {currentYear} ASR Group. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { Home, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Logo & About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Home className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">
                ServiceHub
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Connecting customers with trusted local professionals.
              Fast, reliable, and secure service booking platform.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <Facebook className="w-5 h-5 hover:text-indigo-400 cursor-pointer" />
              <Instagram className="w-5 h-5 hover:text-pink-400 cursor-pointer" />
              <Twitter className="w-5 h-5 hover:text-blue-400 cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-indigo-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-indigo-400 transition">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-indigo-400 transition">
                  About
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="hover:text-indigo-400 transition">
                  How It Works
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Popular Services
            </h3>
            <ul className="space-y-3">
              <li className="hover:text-indigo-400">Home Cleaning</li>
              <li className="hover:text-indigo-400">Plumbing</li>
              <li className="hover:text-indigo-400">Electrician</li>
              <li className="hover:text-indigo-400">AC Repair</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-indigo-400" />
                <span>Mumbai, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-indigo-400" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-indigo-400" />
                <span>support@servicehub.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} ServiceHub. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
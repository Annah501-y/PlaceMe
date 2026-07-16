
/*
 Purpose:
Provide secondary navigation, company information, contact
details, and social media links.
*/
import {
  
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">

      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Footer Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Company Information */}
          <div>
            <h3 className="text-2xl font-bold text-orange-500">
              Foodie
            </h3>

            <p className="mt-4 text-sm leading-relaxed">
              Bringing your favorite meals directly to your doorstep.
              Fast, reliable, and convenient food delivery.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>

            <ul className="space-y-3 text-sm">
              <li>
              <Link
                to="/" className="hover:text-orange-500 transition">
                  Home
              </Link>
              </li>
              <li>
              <Link
                  to="/restaurants"
                  className="hover:text-orange-500 transition">
                  Restaurants
              </Link>
              </li>
                    <li>
              <Link
               to="/about"
                  className="hover:text-orange-500 transition" >
                  About Us
              </Link>
              </li>
              <li>
              <Link
                  to="/contact"
                  className="hover:text-orange-500 transition">
                  Contact
              </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact
            </h4>

            <div className="space-y-3 text-sm">

              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+255 700 000 000</span>
              </div>

              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>support@foodie.com</span>
              </div>

              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Dar es Salaam, Tanzania</span>
              </div>

            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Follow Us
            </h4>

            <div className="flex gap-4">

              

            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-gray-800 pt-6 text-center text-sm">

          <p>
            © {currentYear} Foodie. All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
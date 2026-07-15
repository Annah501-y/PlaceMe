import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-12">
        
        {/* Footer content */}
        <div className="grid gap-10 md:grid-cols-3">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-orange-500">
              PlaceMe
            </h2>

            <p className="mt-4 text-sm leading-6">
              Fast, reliable food delivery that connects you with your
              favorite restaurants anytime, anywhere.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-orange-500">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/restaurants" className="hover:text-orange-500">
                  Restaurants
                </Link>
              </li>

              <li>
                <Link to="/orders" className="hover:text-orange-500">
                  Orders
                </Link>
              </li>

              <li>
                <Link to="/cart" className="hover:text-orange-500">
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Contact
            </h3>

            <p>Email: support@placeme.com</p>
            <p>Phone: 0618770830</p>
            <p>Dar es Salaam, Tanzania</p>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm">
          © {new Date().getFullYear()} PlaceMe. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
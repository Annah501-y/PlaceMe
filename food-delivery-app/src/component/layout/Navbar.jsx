import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Application logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-orange-500"
        >
          PlaceMe
        </Link>

        {/* Navigation links */}
        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="font-medium text-gray-700 hover:text-orange-500 transition-colors"
          >
            Home
          </Link>

          <Link
            to="/restaurants"
            className="font-medium text-gray-700 hover:text-orange-500 transition-colors"
          >
            Restaurants
          </Link>

          <Link
            to="/orders"
            className="font-medium text-gray-700 hover:text-orange-500 transition-colors"
          >
            Orders
          </Link>

          <Link
            to="/cart"
            className="font-medium text-gray-700 hover:text-orange-500 transition-colors"
          >
            Cart
          </Link>

          <Link
            to="/login"
            className="rounded-md border border-orange-500 px-4 py-2 text-orange-500 transition hover:bg-orange-500 hover:text-white"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="rounded-md bg-orange-500 px-4 py-2 text-white transition hover:bg-orange-600"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-slate-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          {/* <img src="/logo.png" alt="Logo" className="h-10" />{" "} */}
          <p>HOME SERVICE MANAGEMNET</p>
          {/* Replace with your logo */}
        </Link>

        {/* Navigation Buttons */}
        <div className="space-x-4">
          <Link
            to="/about"
            className="px-4 py-2 hover:bg-blue-700"
          >
            About Us
          </Link>
          <Link
            to="/login"
            className="px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-gray-200"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

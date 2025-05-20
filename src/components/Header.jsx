import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white text-blue-900 shadow-md sticky top-0 z-50 border-b border-gray-100 backdrop-blur-sm transition">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4 md:px-6 lg:px-8">
        {/* Logo */}
        <NavLink to="/" className="flex items-center space-x-2">
          <div className=" bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition">
            <img
              src="./img/logo1.png"
              alt="Logo"
              className="h-20 w-auto object-contain"
            />
          </div>
          <span className="hidden sm:inline-block text-xl font-bold text-red-600 tracking-wide">
            
          </span>
        </NavLink>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-800 focus:outline-none transition"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation Links */}
        <nav
          className={`absolute md:static top-[4.5rem] left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none border md:border-none md:flex md:items-center rounded-b-xl md:rounded-none transition-all duration-300 ease-in-out ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row gap-6 md:gap-10 px-6 py-4 md:p-0 text-lg font-medium text-center md:text-left">
            {[
              { to: "/about", label: "About Us" },
              { to: "/rates", label: "Standard Rates" },
              { to: "/contact", label: "Contact Us" },
            ].map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block px-2 py-1 transition duration-200 rounded-md ${
                      isActive
                        ? "text-red-600 underline underline-offset-4"
                        : "hover:text-red-600 hover:bg-red-50"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

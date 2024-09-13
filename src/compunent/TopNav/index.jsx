import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TopNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-20 top-0 left-0 border-b border-gray-200">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Logo"
          />
          <span className="text-xl font-semibold text-gray-800">Logo</span>
        </Link>
        <div className="hidden md:flex md:space-x-4">
          <Link
            to="/home"
            className="text-gray-800 hover:text-blue-600"
            aria-current="page"
          >
            Home
          </Link>
          <Link to="/about" className="text-gray-800 hover:text-blue-600">
            About
          </Link>
          <Link to="/services" className="text-gray-800 hover:text-blue-600">
            Services
          </Link>
          <Link to="/contact" className="text-gray-800 hover:text-blue-600">
            Contact
          </Link>
        </div>
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-800 flex items-center"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
      <div
        className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-full left-0 w-full bg-white border-t border-gray-200`}
      >
        <Link
          to="/home"
          className="block py-2 px-4 text-gray-800 hover:text-blue-600"
          aria-current="page"
        >
          Home
        </Link>
        <Link to="/about" className="block py-2 px-4 text-gray-800 hover:text-blue-600">
          About
        </Link>
        <Link to="/services" className="block py-2 px-4 text-gray-800 hover:text-blue-600">
          Services
        </Link>
        <Link to="/contact" className="block py-2 px-4 text-gray-800 hover:text-blue-600">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default TopNav;

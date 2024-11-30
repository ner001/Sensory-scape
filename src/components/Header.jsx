import React from 'react';
import logo from '../assets/Logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="flex items-center font-semibold justify-between px-6 py-4 max-w-screen-xl mx-auto">
        {/* Left side: Navigation Links */}
        <div className="flex space-x-9">
          <Link to="/" className="text-lg  text-gray-800 hover:text-green-500 transition-all duration-300">Home</Link>
          <Link  to="/features" className="text-lg text-gray-800 hover:text-green-500 transition-all duration-300">Features</Link>
          <Link to="/forums" className="text-lg text-gray-800 hover:text-green-500 transition-all duration-300">Forums</Link>
        </div>
        
        {/* Center: Logo */}
        <div className="flex items-center justify-center flex-1">
          <img src={logo} alt="Sensory Scape Logo" className="w-32 h-auto" />
        </div>

        {/* Right side: Additional Links */}
        <div className="flex space-x-6">
          <Link to="/shop" className="text-lg text-gray-800 hover:text-green-500 transition-all duration-300">Shop</Link>
          <Link to="/contact" className="text-lg text-gray-800 hover:text-green-500 transition-all duration-300">Contact</Link>
          <Link to="/about" className="text-lg text-gray-800 hover:text-green-500 transition-all duration-300">About</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;

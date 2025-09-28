import React, { useState } from 'react';
import { Link } from 'react-scroll'; 
import stmlogo from '../assets/images/stthomaskannur.png';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Navigation links array (to keep things DRY)
  const navLinks = [
    { name: "HOME", to: "slider" },
    { name: "GALLERY", to: "gallery" },
    { name: "COORDINATORS", to: "coordinators" },
    { name: "SCORES", to: "scoreboard" },
    { name: "EVENTS", to: "events" },
    { name: "TEAMS", to: "teams" },
    { name: "STATISTICS", href: "https://stthomaskannur.ac.in/ignite/statistics" },
    { name: "REGISTER NOW", href: "https://stthomaskannur.ac.in/ignite/" }
  ];

  return (
    <div>
      <nav className="h-28 w-full bg-white flex items-center justify-between px-6 border-b border-gray-200 shadow-md">
        
        {/* Logo */}
        <div className="ml-3 mr-3 sm:ml-0">
          <img src={stmlogo} alt="St Thomas Kannur" className="h-20 w-72 mt-2 sm:w-24 md:w-auto lg:w-auto"/>
        </div>

        {/* Hamburger (mobile only) */}
        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="text-cyan-700 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor"
              viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex space-x-4 mr-14">
          {navLinks.map((link, index) =>
            link.to ? (
              <Link
                key={index}
                to={link.to}
                smooth={true}
                duration={500}
                className="bg-black text-white px-5 py-2 rounded flex items-center justify-center border border-black hover:bg-white hover:text-black transition-colors duration-300 font-semibold cursor-pointer"
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={index}
                href={link.href}
                className="bg-black text-white px-5 py-2 rounded flex items-center justify-center border border-black hover:bg-white hover:text-black transition-colors duration-300 font-semibold cursor-pointer"
              >
                {link.name}
              </a>
            )
          )}
        </div>

        {/* Mobile Menu */}
        <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50`}>
          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 bg-white w-4/5 max-w-xl p-8 rounded-lg shadow-lg space-y-4">
            
            {/* Close Button */}
            <button onClick={toggleMenu} className="absolute top-4 right-4 text-2xl text-gray-700">
              &times;
            </button>

            {/* Menu Items */}
            <div className="flex flex-col items-center space-y-4">
              {navLinks.map((link, index) =>
                link.to ? (
                  <Link
                    key={index}
                    to={link.to}
                    smooth={true}
                    duration={500}
                    onClick={closeMenu}
                    className="bg-black text-white px-6 py-3 rounded flex items-center justify-center border border-black hover:bg-white hover:text-black transition-colors duration-300 font-semibold w-full text-center"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={index}
                    href={link.href}
                    onClick={closeMenu}
                    className="bg-black text-white px-6 py-3 rounded flex items-center justify-center border border-black hover:bg-white hover:text-black transition-colors duration-300 font-semibold w-full text-center"
                  >
                    {link.name}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;

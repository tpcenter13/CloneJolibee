'use client'; 
import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-[#D6001C] w-full h-36 text-white flex items-center justify-between px-4 md:px-[450px]">
      {/* Logo */}
      <img
        src="/jolibee1.png"
        alt="Logo"
        className="h-[180px] w-[310px] p-7"
      />

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-8"
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

      {/* Button Group for Desktop */}
      <div className="hidden md:flex gap-4 items-center flex-wrap">
        <button className="text-white bg-transparent border-white px-4 py-2 rounded-md hover:bg-white hover:text-[#D6001C] text-xl sm:text-2xl font-semibold">
          Delivery
        </button>
        <button className="text-white bg-transparent border-white px-4 py-2 rounded-md hover:bg-white hover:text-[#D6001C] text-xl sm:text-2xl font-semibold">
          Location
        </button>
        <button className="text-white bg-transparent border-white px-4 py-2 rounded-md hover:bg-white hover:text-[#D6001C] text-xl sm:text-2xl font-semibold">
          Menu
        </button>
        <button className="text-white bg-transparent border-white px-4 py-2 rounded-md hover:bg-white hover:text-[#D6001C] text-xl sm:text-2xl font-semibold">
          Promotion
        </button>
        {/* Order Now Button */}
        <button className="bg-[#FA8003] text-white px-6 py-2 rounded-full hover:bg-[#FF620F] text-xl sm:text-3xl font-bold">
          Order Now
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-0 left-0 w-full bg-[#D6001C] flex flex-col items-center gap-4 py-6`}
      >
        <button className="text-white bg-transparent border-white px-4 py-2 rounded-md hover:bg-white hover:text-[#D6001C] text-2xl font-semibold">
          Delivery
        </button>
        <button className="text-white bg-transparent border-white px-4 py-2 rounded-md hover:bg-white hover:text-[#D6001C] text-2xl font-semibold">
          Location
        </button>
        <button className="text-white bg-transparent border-white px-4 py-2 rounded-md hover:bg-white hover:text-[#D6001C] text-2xl font-semibold">
          Menu
        </button>
        <button className="text-white bg-transparent border-white px-4 py-2 rounded-md hover:bg-white hover:text-[#D6001C] text-2xl font-semibold">
          Promotion
        </button>
        {/* Order Now Button */}
        <button className="bg-[#FA8003] text-white px-6 py-2 rounded-full hover:bg-[#FF620F] text-2xl font-bold">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Header;

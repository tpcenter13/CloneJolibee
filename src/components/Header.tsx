'use client';
import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const menuItems = [
    { label: 'Delivery', href: '#' },
    { label: 'Location', href: '#' },
    { label: 'Menu', href: '#' },
    { label: 'Promotion', href: '#' },
  ];

  return (
    <div className="bg-[#D6001C] w-full h-36 fixed top-0 left-0 z-50 flex items-center justify-between px-4 md:px-[450px] text-white">
      {/* Logo */}
      <img
        src="/jolibee1.png"
        alt="Logo"
        className="h-[180px] w-[310px] p-7"
      />

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMenu}
          aria-label="Open menu"
          className="text-white"
        >
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

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-4 items-center">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="text-white px-4 py-2 text-xl hover:underline"
          >
            {item.label}
          </a>
        ))}
        <button className="bg-[#FA8003] text-white px-6 py-2 rounded-full text-xl font-bold hover:bg-[#FF620F]">
          Order Now
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu fixed inset-0 bg-[#D6001C] flex flex-col items-center gap-4 py-10 z-40 transition-transform duration-300 ease-in-out">
          {/* Close Button */}
          <button
            onClick={closeMenu}
            aria-label="Close menu"
            className="self-end mr-6 text-white hover:text-gray-300 text-5xl absolute top-21 right-17"
          >
            &times;
          </button>

          {/* Mobile Menu Items */}
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-white px-4 py-2 text-xl hover:underline"
            >
              {item.label}
            </a>
          ))}
          <button className="bg-[#FA8003] text-white px-6 py-2 rounded-full text-xl font-bold hover:bg-[#FF620F]">
            Order Now
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;

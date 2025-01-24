'use client';
import React from 'react';

export const Content = () => {
  return (
    <div className="relative w-full">
      {/* Background Image */}
      <img
        src="/bgbackground.png"
        alt="Content Background"
        className="w-full h-auto"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        {/* Text */}
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white drop-shadow-lg">
          Hello
        </div>

        {/* Button */}
        <button
          className="bg-[#FA8003] px-4 py-2 mt-6 rounded-full hover:bg-[#FF620F] text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold transition duration-300 ease-in-out"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

'use client'; 
import React from 'react';

export const Content = () => {
  return (
    <div className="relative">
      {/* Image */}
      <img 
        src="/Frame 1.png" 
        alt="Content Image" 
        className="w-full h-auto mt-[1px]" 
      />
      
      {/* Button */}
      <button 
        className="bg-[#FA8003] px-4 py-2 rounded-full hover:bg-[#FF620F] absolute left-[35%] bottom-[10%] transform -translate-x-1/2 text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold"
      >
        Buy Now
      </button>
    </div>
  );
};

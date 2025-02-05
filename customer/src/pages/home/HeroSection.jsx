import React from "react";
import hero from "../../assets/hero1.jpg";

export default function HeroSection() {
  return (
    <div className="relative w-full h-[650px]">
      {/* Background Image */}
      <img src={hero} alt="Hero Image" className="w-full h-full object-cover" />

      {/* Overlay Text */}
      {/* <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center p-4">
        <h1 className="text-4xl font-bold">Welcome to Home Services</h1>
        <p className="mt-2 text-lg">
          Find the best professionals for your needs
        </p>
        <button className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg">
          Get Started
        </button>
      </div> */}
    </div>
  );
}

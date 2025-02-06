import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook

export default function HeroSection2() {
  const navigate = useNavigate(); // Initialize navigate function

  return (
    <section className="w-full hero-section bg-blue-500 text-white text-center py-20">
      <h1 className="text-4xl font-bold">Welcome to Home Service Management</h1>
      <p className="mt-4 text-lg">
        Providing reliable and trusted home services, with integrity and care.
        We're here to solve your home maintenance needs.
      </p>
      <button
        className="mt-6 px-6 py-2 bg-yellow-500 text-black rounded-lg"
        onClick={() => navigate("/services")} // Redirect to /services
      >
        Book a Service
      </button>
    </section>
  );
}

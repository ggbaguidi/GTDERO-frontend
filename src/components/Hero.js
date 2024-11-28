// src/components/Hero.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const history = useNavigate();

  return (
    <section className="bg-purple-700 text-white py-20 text-center">
      <h2 className="text-4xl font-bold mb-4">Optimizing Green Telecom Energy</h2>
      <p className="text-xl mb-8">
        Efficiently manage your telecom networks with solar, grid, and diesel energy sources.
      </p>
      <button className="bg-white text-purple-700 px-6 py-3 font-semibold rounded-full hover:bg-purple-100"
      onClick={()=> history("/signup")}
      >
        Get Started
      </button>
    </section>
  );
};

export default Hero;

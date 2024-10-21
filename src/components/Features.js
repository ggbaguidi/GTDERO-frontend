// src/components/Features.js
import React from 'react';

const Features = () => {
  return (
    <section id="features" className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h3 className="text-3xl font-bold text-center text-purple-700 mb-12">Key Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <h4 className="text-xl font-bold text-purple-600 mb-4">Solar Energy Prediction</h4>
            <p className="text-gray-700">
              Leverage advanced machine learning models to predict and optimize solar energy usage.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <h4 className="text-xl font-bold text-purple-600 mb-4">Battery Management</h4>
            <p className="text-gray-700">
              Smart battery management ensures seamless transitions between energy sources.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <h4 className="text-xl font-bold text-purple-600 mb-4">Multi-Source Optimization</h4>
            <p className="text-gray-700">
              Efficiently combine solar, grid, and diesel energy sources for cost-effective telecom operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

import React from 'react';
import { Clock, Coffee, Lightbulb, Heart } from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    title: 'Hourly Flexibility',
    description: 'Book by the hour, work on your terms. Perfect for busy schedules and spontaneous productivity bursts.',
  },
  {
    icon: Coffee,
    title: 'Cozy Amenities',
    description: 'Complimentary coffee, comfy seating, and all the little touches that make work feel like home.',
  },
  {
    icon: Lightbulb,
    title: 'Inspiring Spaces',
    description: 'Thoughtfully designed environments that spark creativity and boost your productivity naturally.',
  },
  {
    icon: Heart,
    title: 'No Commitments',
    description: 'Use what you need, when you need it. No contracts, no pressure, just pure workspace freedom.',
  },
];

const BenefitsGrid = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-handwritten text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Why Nesters Love Us
          </h2>
          <p className="font-body text-xl text-gray-600 max-w-2xl mx-auto">
            Discover what makes DreamNest the perfect workspace haven for modern professionals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-pastel-purple/20 to-sage-green/20 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <benefit.icon className="text-deep-sage" size={28} />
              </div>
              <h3 className="font-handwritten text-2xl font-bold text-gray-800 mb-4">
                {benefit.title}
              </h3>
              <p className="font-body text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsGrid;
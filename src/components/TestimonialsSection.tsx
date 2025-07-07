import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    profession: 'Freelance Designer',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
    rating: 5,
    quote: "DreamNest is my creative sanctuary! The cozy atmosphere and flexible hours mean I can work when inspiration strikes. It's like having a second home for my business.",
  },
  {
    name: 'Marcus Rodriguez',
    profession: 'Tech Consultant',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
    rating: 5,
    quote: "Finally, a workspace that gets it! No long contracts, just pure productivity. The amenities are incredible and the spaces actually inspire me to do my best work.",
  },
  {
    name: 'Emma Thompson',
    profession: 'Content Creator',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
    rating: 5,
    quote: "I've tried countless co-working spaces, but DreamNest feels different. It's warm, welcoming, and the hourly booking system fits my chaotic schedule perfectly.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-soft-beige to-pastel-purple/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-handwritten text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Stories from Our Nesters
          </h2>
          <p className="font-body text-xl text-gray-600 max-w-2xl mx-auto">
            Real experiences from real people who've found their perfect workspace haven
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-handwritten text-xl font-bold text-gray-800">
                    {testimonial.name}
                  </h4>
                  <p className="font-body text-gray-600 text-sm">
                    {testimonial.profession}
                  </p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="text-sage-green fill-current"
                    size={20}
                  />
                ))}
              </div>

              <p className="font-body text-gray-700 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
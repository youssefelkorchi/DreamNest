import React, { useState } from 'react';
import { Mail, ArrowRight, CheckCircle } from 'lucide-react';

const SignupSection = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
      setEmail('');
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-deep-sage to-sage-green">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-handwritten text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Find Your Perfect Nest?
          </h2>
          <p className="font-body text-xl text-white/90 mb-8">
            Join thousands of happy nesters and get exclusive access to new locations, 
            special offers, and productivity tips delivered to your inbox.
          </p>

          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full pl-12 pr-4 py-4 rounded-full font-body text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30 transition-all duration-300"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-white text-deep-sage px-8 py-4 rounded-full font-body font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  Get Started
                  <ArrowRight size={20} />
                </button>
              </div>
            </form>
          ) : (
            <div className="flex items-center justify-center gap-3 text-white">
              <CheckCircle className="text-green-200" size={24} />
              <span className="font-body text-xl">Thanks for joining! Check your email for next steps.</span>
            </div>
          )}

          <p className="font-body text-white/80 text-sm mt-6">
            No spam, ever. Unsubscribe anytime with one click.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignupSection;
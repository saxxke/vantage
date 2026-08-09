import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { InfoModalTopic } from '../types';

interface FooterProps {
  onOpenInfo: (topic: InfoModalTopic) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenInfo }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="w-full py-20 px-5 md:px-16 flex flex-col bg-[#f7f3f2] border-t border-[#c4c7c7]/50 mt-16">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
        {/* Navigation Column */}
        <div className="md:col-span-4 flex flex-col gap-3 font-sans text-xs uppercase tracking-widest font-semibold">
          <button
            onClick={() => onOpenInfo('journal')}
            className="text-left text-[#444748] hover:text-[#1c1b1b] transition-colors py-1"
          >
            JOURNAL
          </button>
          <button
            onClick={() => onOpenInfo('sustainability')}
            className="text-left text-[#444748] hover:text-[#1c1b1b] transition-colors py-1"
          >
            SUSTAINABILITY
          </button>
          <button
            onClick={() => onOpenInfo('shipping')}
            className="text-left text-[#444748] hover:text-[#1c1b1b] transition-colors py-1"
          >
            SHIPPING
          </button>
          <button
            onClick={() => onOpenInfo('returns')}
            className="text-left text-[#444748] hover:text-[#1c1b1b] transition-colors py-1"
          >
            RETURNS
          </button>
          <button
            onClick={() => onOpenInfo('privacy')}
            className="text-left text-[#444748] hover:text-[#1c1b1b] transition-colors py-1"
          >
            PRIVACY
          </button>
        </div>

        {/* Newsletter Signup Column */}
        <div className="md:col-span-8 flex flex-col justify-start space-y-3">
          <h4 className="font-serif text-lg font-medium text-[#1c1b1b]">
            The Dispatches
          </h4>
          <p className="font-sans text-xs text-[#444748] max-w-md leading-relaxed">
            Subscribe for private collection previews, editorial essays, and seasonal releases.
          </p>

          <form onSubmit={handleSubscribe} className="flex max-w-md gap-2 pt-1">
            <input
              type="email"
              required
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-11 px-3 bg-[#fdf8f8] border border-[#c4c7c7] text-xs text-[#1c1b1b] rounded-xs focus:outline-none focus:border-[#1c1b1b]"
            />
            <button
              type="submit"
              className="px-5 h-11 bg-[#1c1b1b] text-white text-xs font-semibold uppercase tracking-wider rounded-xs flex items-center justify-center gap-1 hover:bg-black transition-colors"
            >
              {subscribed ? <Check className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
            </button>
          </form>

          {subscribed && (
            <p className="text-xs text-emerald-800 font-medium">
              Thank you for subscribing to VANTAGE Dispatches.
            </p>
          )}
        </div>
      </div>

      {/* Brand Title */}
      <div className="max-w-7xl mx-auto w-full border-t border-[#c4c7c7]/40 pt-8">
        <div className="font-serif text-4xl md:text-7xl lg:text-8xl tracking-tighter text-[#1c1b1b] font-medium mb-4 select-none">
          VANTAGE
        </div>

        <div className="font-sans text-xs text-[#444748] tracking-wider uppercase font-medium">
          © 2024 VANTAGE. ELEGANCE REDEFINED.
        </div>
      </div>
    </footer>
  );
};

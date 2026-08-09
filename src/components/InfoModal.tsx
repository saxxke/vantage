import React from 'react';
import { X, ShieldCheck, Truck, RefreshCw, BookOpen, Leaf } from 'lucide-react';
import { InfoModalTopic } from '../types';

interface InfoModalProps {
  topic: InfoModalTopic | null;
  onClose: () => void;
}

export const InfoModal: React.FC<InfoModalProps> = ({ topic, onClose }) => {
  if (!topic) return null;

  const contentMap: Record<InfoModalTopic, { title: string; icon: React.ReactNode; body: React.ReactNode }> = {
    journal: {
      title: 'The Vantage Journal',
      icon: <BookOpen className="w-6 h-6 stroke-[1.5]" />,
      body: (
        <div className="space-y-4 text-xs md:text-sm text-[#444748] leading-relaxed">
          <p className="font-serif text-base text-[#1c1b1b] italic">
            "Refinement is not the addition of grandeur, but the subtraction of distraction."
          </p>
          <p>
            In our latest editorial dispatch, we explore the quiet luxury of Japanese cotton twill and French flax linen. We believe garment longevity begins with architectural design discipline.
          </p>
          <div className="p-4 bg-[#f7f3f2] rounded-xs space-y-1 border-l-2 border-[#1c1b1b]">
            <div className="font-semibold text-[#1c1b1b] uppercase tracking-wider text-[11px]">Issue 04 — Essential Drape</div>
            <p className="text-[11px] text-[#747878]">An essay on weight distribution in drop-shoulder silhouettes.</p>
          </div>
        </div>
      ),
    },
    sustainability: {
      title: 'Sustainability & Ethics',
      icon: <Leaf className="w-6 h-6 stroke-[1.5]" />,
      body: (
        <div className="space-y-4 text-xs md:text-sm text-[#444748] leading-relaxed">
          <p>
            VANTAGE operates on a zero-waste, slow-batch production framework. All raw materials are 100% traceably sourced from certified organic farms and family-owned mills in Portugal, Italy, and Japan.
          </p>
          <ul className="list-disc list-inside space-y-2 text-[#1c1b1b] font-medium">
            <li>GOTS Certified Organic Heavyweight Cotton</li>
            <li>Grade-A Cruelty-Free Mongolian Cashmere</li>
            <li>100% Biodegradable Plastic-Free Packaging</li>
          </ul>
        </div>
      ),
    },
    shipping: {
      title: 'Shipping Policy',
      icon: <Truck className="w-6 h-6 stroke-[1.5]" />,
      body: (
        <div className="space-y-4 text-xs md:text-sm text-[#444748] leading-relaxed">
          <p>
            We offer Complimentary Express Courier Shipping on all orders over $150 USD worldwide.
          </p>
          <div className="space-y-2 border-t border-[#c4c7c7]/30 pt-3">
            <div className="flex justify-between font-semibold text-[#1c1b1b]">
              <span>Domestic Express (2-3 Days)</span>
              <span>$15 USD (Free over $150)</span>
            </div>
            <div className="flex justify-between font-semibold text-[#1c1b1b]">
              <span>International Priority (3-5 Days)</span>
              <span>$25 USD</span>
            </div>
          </div>
        </div>
      ),
    },
    returns: {
      title: 'Returns & Exchanges',
      icon: <RefreshCw className="w-6 h-6 stroke-[1.5]" />,
      body: (
        <div className="space-y-4 text-xs md:text-sm text-[#444748] leading-relaxed">
          <p>
            We invite you to try VANTAGE garments in the comfort of your home. If a piece does not satisfy your expectations, return or exchange it within 30 days of receipt in unworn condition with original tags attached.
          </p>
          <p>
            Pre-paid return labels are included in every shipment box.
          </p>
        </div>
      ),
    },
    privacy: {
      title: 'Privacy & Security',
      icon: <ShieldCheck className="w-6 h-6 stroke-[1.5]" />,
      body: (
        <div className="space-y-4 text-xs md:text-sm text-[#444748] leading-relaxed">
          <p>
            Your personal information and transaction privacy are paramount. VANTAGE never sells customer data or tracks browsing habits across third-party networks.
          </p>
          <p className="text-[11px] text-[#747878]">
            Encrypted with TLS 1.3 standard military-grade security.
          </p>
        </div>
      ),
    },
  };

  const topicInfo = contentMap[topic];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fadeIn">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-lg bg-[#fdf8f8] shadow-2xl rounded-sm overflow-hidden z-10 border border-[#c4c7c7]/40 p-6">
        <div className="flex justify-between items-start border-b border-[#c4c7c7]/40 pb-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="text-[#1c1b1b]">{topicInfo.icon}</div>
            <h3 className="font-serif text-xl font-medium text-[#1c1b1b]">
              {topicInfo.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#1c1b1b] hover:opacity-70"
            aria-label="Close information"
          >
            <X className="w-5 h-5 stroke-[1.5]" />
          </button>
        </div>

        <div>{topicInfo.body}</div>

        <div className="pt-6 border-t border-[#c4c7c7]/30 mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 h-10 bg-[#1c1b1b] text-white text-xs font-semibold uppercase tracking-widest rounded-xs hover:bg-black transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

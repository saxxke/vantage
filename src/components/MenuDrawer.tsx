import React from 'react';
import { X, ArrowRight, Compass, BookOpen, Leaf, Shield, Globe } from 'lucide-react';
import { InfoModalTopic } from '../types';

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCategory: (category: string) => void;
  onOpenInfo: (topic: InfoModalTopic) => void;
}

export const MenuDrawer: React.FC<MenuDrawerProps> = ({
  isOpen,
  onClose,
  onSelectCategory,
  onOpenInfo,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-start bg-black/40 backdrop-blur-sm animate-fadeIn">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-sm h-full bg-[#fdf8f8] shadow-2xl flex flex-col z-10 animate-slideRight">
        {/* Header */}
        <div className="p-5 border-b border-[#c4c7c7]/40 flex justify-between items-center">
          <span className="font-serif text-2xl tracking-tight text-[#1c1b1b]">VANTAGE</span>
          <button
            onClick={onClose}
            className="p-1.5 text-[#1c1b1b] hover:opacity-70"
            aria-label="Close menu"
          >
            <X className="w-5 h-5 stroke-[1.5]" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          {/* Main Navigation */}
          <div>
            <h3 className="text-[11px] uppercase tracking-widest font-bold text-[#747878] mb-4">
              Collections
            </h3>
            <ul className="space-y-3 font-serif text-xl text-[#1c1b1b]">
              <li>
                <button
                  onClick={() => {
                    onSelectCategory('All');
                    onClose();
                  }}
                  className="hover:translate-x-1 transition-transform flex items-center justify-between w-full text-left"
                >
                  <span>The Core Collection</span>
                  <ArrowRight className="w-4 h-4 text-[#747878]" />
                </button>
              </li>
              {['Tees', 'Pants', 'Shirts', 'Jackets', 'Knitwear', 'Accessories'].map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => {
                      onSelectCategory(cat);
                      onClose();
                    }}
                    className="hover:translate-x-1 transition-transform text-[#444748] hover:text-[#1c1b1b] text-lg flex items-center justify-between w-full text-left"
                  >
                    <span>{cat}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Editorial & Philosophy */}
          <div className="border-t border-[#c4c7c7]/40 pt-6">
            <h3 className="text-[11px] uppercase tracking-widest font-bold text-[#747878] mb-3">
              Journal & Values
            </h3>
            <ul className="space-y-3 text-xs uppercase tracking-wider font-semibold text-[#1c1b1b]">
              <li>
                <button
                  onClick={() => {
                    onOpenInfo('journal');
                    onClose();
                  }}
                  className="flex items-center gap-2 hover:opacity-70 transition-opacity"
                >
                  <BookOpen className="w-4 h-4 text-[#747878]" />
                  <span>The Vantage Journal</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onOpenInfo('sustainability');
                    onClose();
                  }}
                  className="flex items-center gap-2 hover:opacity-70 transition-opacity"
                >
                  <Leaf className="w-4 h-4 text-[#747878]" />
                  <span>Sustainability & Ethics</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div className="border-t border-[#c4c7c7]/40 pt-6">
            <h3 className="text-[11px] uppercase tracking-widest font-bold text-[#747878] mb-3">
              Client Services
            </h3>
            <ul className="space-y-2 text-xs uppercase tracking-wider font-semibold text-[#1c1b1b]">
              <li>
                <button
                  onClick={() => {
                    onOpenInfo('shipping');
                    onClose();
                  }}
                  className="hover:underline underline-offset-4"
                >
                  Complimentary Shipping
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onOpenInfo('returns');
                    onClose();
                  }}
                  className="hover:underline underline-offset-4"
                >
                  30-Day Returns & Exchanges
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onOpenInfo('privacy');
                    onClose();
                  }}
                  className="hover:underline underline-offset-4"
                >
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>

          {/* Region / Currency */}
          <div className="border-t border-[#c4c7c7]/40 pt-6">
            <div className="flex items-center gap-2 text-xs text-[#444748] font-mono">
              <Globe className="w-4 h-4" />
              <span>United States / USD ($)</span>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="p-5 border-t border-[#c4c7c7]/40 bg-[#f7f3f2] text-[11px] text-[#747878] text-center">
          © 2024 VANTAGE. ELEGANCE REDEFINED.
        </div>
      </div>
    </div>
  );
};

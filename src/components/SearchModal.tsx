import React, { useState } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { Product } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  products,
  onSelectProduct,
}) => {
  if (!isOpen) return null;

  const [query, setQuery] = useState('');

  const filtered = query.trim()
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.color.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()) ||
          p.fabric.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-black/40 backdrop-blur-sm animate-fadeIn">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-[#fdf8f8] shadow-2xl rounded-sm overflow-hidden z-10 border border-[#c4c7c7]/40">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-[#c4c7c7]/40 flex items-center gap-3">
          <Search className="w-5 h-5 text-[#747878] stroke-[1.5]" />
          <input
            type="text"
            autoFocus
            placeholder="Search shirts, trousers, jackets, or colors..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-sm md:text-base font-sans text-[#1c1b1b] placeholder:text-[#747878] focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-[#747878] hover:text-[#1c1b1b]"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 text-[#1c1b1b] hover:opacity-70"
            aria-label="Close search"
          >
            <X className="w-5 h-5 stroke-[1.5]" />
          </button>
        </div>

        {/* Results Body */}
        <div className="p-4 max-h-[60vh] overflow-y-auto">
          {!query.trim() ? (
            <div className="py-8 text-center space-y-3">
              <div className="text-xs uppercase tracking-widest font-semibold text-[#747878]">
                Suggested Searches
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                {['Oversized Tee', 'Linen', 'Chino', 'Charcoal', 'Cashmere', 'Jackets'].map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-3 py-1.5 bg-[#f7f3f2] hover:bg-[#e5e2e1] text-xs text-[#1c1b1b] rounded-xs transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          ) : filtered.length === 0 ? (
            <div className="py-12 text-center text-xs text-[#747878]">
              No items matching "<strong className="text-[#1c1b1b]">{query}</strong>" were found.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {filtered.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    onSelectProduct(item);
                    onClose();
                  }}
                  className="flex gap-3 p-2 border border-[#c4c7c7]/30 hover:border-[#1c1b1b] bg-white rounded-xs cursor-pointer group transition-all"
                >
                  <img
                    src={item.primaryImage}
                    alt={item.name}
                    className="w-14 h-18 object-cover rounded-xs bg-[#f7f3f2]"
                  />
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div>
                      <h4 className="font-sans text-xs font-semibold text-[#1c1b1b] group-hover:underline">
                        {item.name}
                      </h4>
                      <p className="text-[11px] text-[#444748] mt-0.5">
                        {item.color}
                      </p>
                    </div>
                    <div className="flex justify-between items-center text-xs font-medium text-[#1c1b1b]">
                      <span>${item.price}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#747878] group-hover:text-[#1c1b1b] group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

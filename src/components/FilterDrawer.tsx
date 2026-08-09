import React from 'react';
import { X, Check } from 'lucide-react';
import { FilterState } from '../types';

interface FilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  filters: FilterState;
  onUpdateFilters: (newFilters: FilterState) => void;
  onResetFilters: () => void;
  totalFilteredCount: number;
}

export const FilterDrawer: React.FC<FilterDrawerProps> = ({
  isOpen,
  onClose,
  filters,
  onUpdateFilters,
  onResetFilters,
  totalFilteredCount,
}) => {
  if (!isOpen) return null;

  const categories = ['Tees', 'Pants', 'Shirts', 'Jackets', 'Knitwear', 'Accessories'];
  const colors = [
    { name: 'Obsidian Black', hex: '#1a1a1a' },
    { name: 'Sandstone', hex: '#d2c1b0' },
    { name: 'Pure White', hex: '#ffffff' },
    { name: 'Charcoal', hex: '#404040' },
    { name: 'Oatmeal', hex: '#e0d6c8' },
    { name: 'Sky Tint', hex: '#e1e8ed' },
  ];
  const sizes = ['XS', 'S', 'M', 'L', 'XL'];

  const toggleCategory = (cat: string) => {
    const updated = filters.categories.includes(cat)
      ? filters.categories.filter((c) => c !== cat)
      : [...filters.categories, cat];
    onUpdateFilters({ ...filters, categories: updated });
  };

  const toggleColor = (colName: string) => {
    const updated = filters.colors.includes(colName)
      ? filters.colors.filter((c) => c !== colName)
      : [...filters.colors, colName];
    onUpdateFilters({ ...filters, colors: updated });
  };

  const toggleSize = (sz: string) => {
    const updated = filters.sizes.includes(sz)
      ? filters.sizes.filter((s) => s !== sz)
      : [...filters.sizes, sz];
    onUpdateFilters({ ...filters, sizes: updated });
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-sm animate-fadeIn">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-md h-full bg-[#fdf8f8] shadow-2xl flex flex-col z-10 animate-slideLeft">
        {/* Header */}
        <div className="p-5 border-b border-[#c4c7c7]/40 flex justify-between items-center">
          <h2 className="font-serif text-xl font-medium text-[#1c1b1b]">
            Refine Collection
          </h2>
          <button
            onClick={onClose}
            className="p-1.5 text-[#1c1b1b] hover:opacity-70"
            aria-label="Close filter drawer"
          >
            <X className="w-5 h-5 stroke-[1.5]" />
          </button>
        </div>

        {/* Filter Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          {/* Categories */}
          <div>
            <h3 className="text-xs uppercase tracking-widest font-semibold text-[#1c1b1b] mb-3">
              Category
            </h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => {
                const isSelected = filters.categories.includes(cat);
                return (
                  <button
                    key={cat}
                    onClick={() => toggleCategory(cat)}
                    className={`px-3 py-2 text-xs uppercase tracking-wider rounded-xs border transition-colors ${
                      isSelected
                        ? 'bg-[#1c1b1b] text-white border-[#1c1b1b]'
                        : 'bg-[#f7f3f2] text-[#1c1b1b] border-transparent hover:border-[#c4c7c7]'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Color Filter */}
          <div>
            <h3 className="text-xs uppercase tracking-widest font-semibold text-[#1c1b1b] mb-3">
              Color Palette
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {colors.map((col) => {
                const isSelected = filters.colors.includes(col.name);
                return (
                  <button
                    key={col.name}
                    onClick={() => toggleColor(col.name)}
                    className={`flex items-center gap-2.5 p-2 rounded-xs border text-xs font-medium transition-all ${
                      isSelected
                        ? 'border-[#1c1b1b] bg-[#f1edec]'
                        : 'border-[#c4c7c7]/50 hover:border-[#1c1b1b]'
                    }`}
                  >
                    <span
                      className="w-4 h-4 rounded-full border border-black/10 flex items-center justify-center"
                      style={{ backgroundColor: col.hex }}
                    >
                      {isSelected && (
                        <Check
                          className={`w-2.5 h-2.5 ${
                            col.hex === '#ffffff' ? 'text-black' : 'text-white'
                          }`}
                        />
                      )}
                    </span>
                    <span className="text-[#1c1b1b] tracking-tight">{col.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Sizes */}
          <div>
            <h3 className="text-xs uppercase tracking-widest font-semibold text-[#1c1b1b] mb-3">
              Size
            </h3>
            <div className="flex gap-2">
              {sizes.map((sz) => {
                const isSelected = filters.sizes.includes(sz);
                return (
                  <button
                    key={sz}
                    onClick={() => toggleSize(sz)}
                    className={`w-11 h-11 border text-xs font-semibold uppercase tracking-wider rounded-xs flex items-center justify-center transition-colors ${
                      isSelected
                        ? 'bg-[#1c1b1b] text-white border-[#1c1b1b]'
                        : 'bg-[#f7f3f2] text-[#1c1b1b] border-transparent hover:border-[#1c1b1b]'
                    }`}
                  >
                    {sz}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Price Range Slider */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-xs uppercase tracking-widest font-semibold text-[#1c1b1b]">
                Max Price
              </h3>
              <span className="text-sm font-semibold text-[#1c1b1b]">
                ${filters.maxPrice}
              </span>
            </div>
            <input
              type="range"
              min="40"
              max="400"
              step="10"
              value={filters.maxPrice}
              onChange={(e) =>
                onUpdateFilters({
                  ...filters,
                  maxPrice: Number(e.target.value),
                })
              }
              className="w-full accent-[#1c1b1b] bg-[#f1edec] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-[#444748] mt-1 font-mono">
              <span>$40</span>
              <span>$400</span>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-5 border-t border-[#c4c7c7]/40 bg-[#fdf8f8] space-y-2">
          <button
            onClick={onClose}
            className="w-full h-12 bg-[#1c1b1b] text-white text-xs font-semibold uppercase tracking-widest rounded-xs hover:bg-black transition-colors"
          >
            Show {totalFilteredCount} Results
          </button>
          <button
            onClick={onResetFilters}
            className="w-full py-2 text-xs font-semibold uppercase tracking-wider text-[#444748] hover:text-[#1c1b1b] transition-colors"
          >
            Clear All Filters
          </button>
        </div>
      </div>
    </div>
  );
};

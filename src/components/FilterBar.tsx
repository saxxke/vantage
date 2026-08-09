import React, { useState } from 'react';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import { SortOption } from '../types';

interface FilterBarProps {
  totalItems: number;
  activeFilterCount: number;
  currentSort: SortOption;
  onOpenFilter: () => void;
  onSortChange: (sort: SortOption) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  totalItems,
  activeFilterCount,
  currentSort,
  onOpenFilter,
  onSortChange,
}) => {
  const [isSortOpen, setIsSortOpen] = useState(false);

  const sortLabels: Record<SortOption, string> = {
    featured: 'Featured',
    newest: 'Newest First',
    'price-asc': 'Price: Low to High',
    'price-desc': 'Price: High to Low',
  };

  return (
    <div className="sticky top-[56px] z-40 bg-[#fdf8f8]/95 backdrop-blur-sm border-b border-[#c4c7c7]/50 py-3 px-5 md:px-16 flex justify-between items-center font-sans text-xs uppercase tracking-widest text-[#1c1b1b]">
      {/* Filter Button */}
      <button
        onClick={onOpenFilter}
        className="flex items-center gap-2 hover:opacity-70 transition-opacity font-semibold py-1 focus:outline-none"
      >
        <SlidersHorizontal className="w-4 h-4 stroke-[1.5]" />
        <span>Filter</span>
        {activeFilterCount > 0 && (
          <span className="w-4 h-4 bg-[#1c1b1b] text-white text-[10px] font-bold rounded-full flex items-center justify-center leading-none">
            {activeFilterCount}
          </span>
        )}
      </button>

      {/* Item Count */}
      <div className="text-[#444748] font-medium tracking-wider">
        {totalItems} {totalItems === 1 ? 'Item' : 'Items'}
      </div>

      {/* Sort Dropdown */}
      <div className="relative">
        <button
          onClick={() => setIsSortOpen(!isSortOpen)}
          className="flex items-center gap-1.5 hover:opacity-70 transition-opacity font-semibold py-1 focus:outline-none"
        >
          <span>Sort</span>
          <ChevronDown className={`w-4 h-4 stroke-[1.5] transition-transform duration-200 ${isSortOpen ? 'rotate-180' : ''}`} />
        </button>

        {isSortOpen && (
          <>
            <div
              className="fixed inset-0 z-10"
              onClick={() => setIsSortOpen(false)}
            />
            <div className="absolute right-0 top-full mt-2 w-48 bg-[#fdf8f8] border border-[#c4c7c7] shadow-lg rounded-sm py-2 z-20">
              {(['featured', 'newest', 'price-asc', 'price-desc'] as SortOption[]).map((option) => (
                <button
                  key={option}
                  onClick={() => {
                    onSortChange(option);
                    setIsSortOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 text-[11px] uppercase tracking-wider transition-colors ${
                    currentSort === option
                      ? 'bg-[#f1edec] font-bold text-[#1c1b1b]'
                      : 'text-[#444748] hover:bg-[#f7f3f2]'
                  }`}
                >
                  {sortLabels[option]}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { Plus, Check } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onSelectProduct: (product: Product) => void;
  onQuickAdd: (product: Product, size: 'XS' | 'S' | 'M' | 'L' | 'XL') => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelectProduct,
  onQuickAdd,
}) => {
  const [added, setAdded] = useState(false);

  const handleQuickAddClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Default size is 'M' for quick add or first available
    const size = product.sizes.includes('M') ? 'M' : product.sizes[0];
    onQuickAdd(product, size);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <article
      onClick={() => onSelectProduct(product)}
      className="flex flex-col group cursor-pointer relative image-swap-container select-none"
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] bg-[#f7f3f2] mb-3 overflow-hidden rounded-sm">
        {/* Badges */}
        {product.isNew && (
          <span className="absolute top-2 left-2 z-10 bg-[#1c1b1b] text-white text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-xs">
            New
          </span>
        )}

        <img
          src={product.primaryImage}
          alt={product.name}
          className="primary-image absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-in-out opacity-100"
          loading="lazy"
        />
        <img
          src={product.secondaryImage}
          alt={`${product.name} alternate view`}
          className="secondary-image absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-in-out opacity-0"
          loading="lazy"
        />

        {/* Quick Add Button */}
        <button
          onClick={handleQuickAddClick}
          className={`absolute bottom-2 right-2 w-8 h-8 rounded-full flex items-center justify-center text-[#1c1b1b] shadow-sm active:scale-95 transition-all duration-200 z-10 ${
            added ? 'bg-[#1c1b1b] text-white' : 'bg-[#fdf8f8]/90 hover:bg-white backdrop-blur-sm'
          }`}
          title="Quick Add to Bag"
          aria-label={`Quick add ${product.name}`}
        >
          {added ? (
            <Check className="w-4 h-4 stroke-[2]" />
          ) : (
            <Plus className="w-4 h-4 stroke-[2]" />
          )}
        </button>
      </div>

      {/* Info Container */}
      <div className="flex flex-col flex-grow justify-between">
        <div>
          <h3 className="font-sans text-sm md:text-base font-semibold text-[#1c1b1b] group-hover:underline underline-offset-4 decoration-1">
            {product.name}
          </h3>
          <p className="font-sans text-xs text-[#444748] mt-0.5">
            {product.color}
          </p>
        </div>
        <div className="font-sans text-sm font-medium text-[#1c1b1b] mt-1.5">
          ${product.price}
        </div>
      </div>
    </article>
  );
};

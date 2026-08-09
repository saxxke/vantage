import React, { useState } from 'react';
import { X, Check, ShieldCheck, Truck, RefreshCw } from 'lucide-react';
import { Product } from '../types';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, size: 'XS' | 'S' | 'M' | 'L' | 'XL', color: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  if (!product) return null;

  const [selectedSize, setSelectedSize] = useState<'XS' | 'S' | 'M' | 'L' | 'XL'>(
    product.sizes[0] || 'M'
  );
  const [selectedColor, setSelectedColor] = useState<string>(product.color);
  const [selectedImage, setSelectedImage] = useState<string>(product.primaryImage);
  const [isAdded, setIsAdded] = useState(false);

  const images = [product.primaryImage, product.secondaryImage, ...(product.additionalImages || [])];

  const handleAdd = () => {
    onAddToCart(product, selectedSize, selectedColor);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 md:p-6 bg-black/40 backdrop-blur-sm animate-fadeIn">
      {/* Backdrop click */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Box */}
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-[#fdf8f8] shadow-2xl rounded-sm overflow-hidden flex flex-col md:flex-row z-10 my-auto border border-[#c4c7c7]/30">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 p-2 text-[#1c1b1b] bg-[#fdf8f8]/80 backdrop-blur-md rounded-full hover:bg-white transition-colors"
          aria-label="Close detail modal"
        >
          <X className="w-5 h-5 stroke-[1.5]" />
        </button>

        {/* Left Side - Image Gallery */}
        <div className="w-full md:w-1/2 flex flex-col bg-[#f7f3f2] p-4 md:p-6">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm bg-white mb-3">
            <img
              src={selectedImage}
              alt={product.name}
              className="w-full h-full object-cover transition-opacity duration-300"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex gap-2 overflow-x-auto pb-1">
            {images.map((imgUrl, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(imgUrl)}
                className={`w-16 h-20 flex-shrink-0 border rounded-xs overflow-hidden transition-all ${
                  selectedImage === imgUrl ? 'border-[#1c1b1b] ring-1 ring-[#1c1b1b]' : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <img src={imgUrl} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Right Side - Information & Actions */}
        <div className="w-full md:w-1/2 p-6 md:p-8 overflow-y-auto flex flex-col justify-between">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#444748] mb-1 font-semibold">
              {product.category}
            </div>
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-[#1c1b1b] mb-2">
              {product.name}
            </h2>
            <div className="font-sans text-xl font-medium text-[#1c1b1b] mb-4">
              ${product.price}
            </div>

            <p className="font-sans text-sm text-[#444748] leading-relaxed mb-6 border-b border-[#c4c7c7]/40 pb-4">
              {product.description}
            </p>

            {/* Color Swatches */}
            <div className="mb-6">
              <label className="block text-xs uppercase tracking-widest font-semibold text-[#1c1b1b] mb-2">
                Color: <span className="font-normal text-[#444748]">{selectedColor}</span>
              </label>
              <div className="flex gap-3">
                {product.colorsAvailable.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => setSelectedColor(c.name)}
                    className={`group relative w-8 h-8 rounded-full border flex items-center justify-center transition-all ${
                      selectedColor === c.name ? 'ring-2 ring-[#1c1b1b] ring-offset-2' : 'border-[#c4c7c7] hover:scale-105'
                    }`}
                    style={{ backgroundColor: c.hex }}
                    title={c.name}
                  >
                    {selectedColor === c.name && (
                      <span className={`w-2 h-2 rounded-full ${c.hex === '#ffffff' ? 'bg-[#1c1b1b]' : 'bg-white'}`} />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selector */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs uppercase tracking-widest font-semibold text-[#1c1b1b]">
                  Size
                </label>
                <span className="text-[11px] text-[#444748] underline cursor-pointer hover:text-black">
                  Size Guide
                </span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {product.sizes.map((sz) => (
                  <button
                    key={sz}
                    onClick={() => setSelectedSize(sz)}
                    className={`h-11 border text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors ${
                      selectedSize === sz
                        ? 'border-[#1c1b1b] bg-[#1c1b1b] text-white'
                        : 'border-[#c4c7c7] text-[#1c1b1b] hover:border-[#1c1b1b]'
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>

            {/* Product Details List */}
            <div className="mb-6 bg-[#f7f3f2] p-4 rounded-xs text-xs space-y-2">
              <div className="font-semibold uppercase tracking-wider text-[#1c1b1b] mb-1">
                Fabric & Care
              </div>
              <p className="text-[#444748]"><strong className="text-[#1c1b1b]">Material:</strong> {product.fabric}</p>
              <p className="text-[#444748]"><strong className="text-[#1c1b1b]">Care:</strong> {product.care}</p>
              <ul className="list-disc list-inside text-[#444748] pt-1 space-y-1">
                {product.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="pt-4 border-t border-[#c4c7c7]/40 space-y-3">
            <button
              onClick={handleAdd}
              className={`w-full h-12 text-xs font-semibold uppercase tracking-widest rounded-xs flex items-center justify-center gap-2 transition-all duration-200 ${
                isAdded
                  ? 'bg-emerald-800 text-white'
                  : 'bg-[#1c1b1b] text-white hover:bg-black'
              }`}
            >
              {isAdded ? (
                <>
                  <Check className="w-4 h-4" /> Added to Bag
                </>
              ) : (
                `Add to Bag — $${product.price}`
              )}
            </button>

            {/* Guarantees */}
            <div className="grid grid-cols-3 gap-2 text-[10px] uppercase tracking-wider text-[#444748] text-center pt-2">
              <div className="flex items-center justify-center gap-1">
                <Truck className="w-3.5 h-3.5" /> Express Shipping
              </div>
              <div className="flex items-center justify-center gap-1">
                <RefreshCw className="w-3.5 h-3.5" /> Easy 30-Day Returns
              </div>
              <div className="flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> Guaranteed Authentic
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

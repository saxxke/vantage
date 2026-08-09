import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ArrowRight, ShoppingBag, Tag, Check } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (cartItemId: string, newQty: number) => void;
  onRemoveItem: (cartItemId: string) => void;
  onOpenCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onOpenCheckout,
}) => {
  if (!isOpen) return null;

  const [promoCode, setPromoCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
  const [promoError, setPromoError] = useState('');

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const discountAmount = discountApplied ? subtotal * 0.1 : 0;
  const shippingThreshold = 150;
  const freeShipping = subtotal >= shippingThreshold || subtotal === 0;
  const shippingCost = freeShipping ? 0 : 15;
  const total = subtotal - discountAmount + shippingCost;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'VANTAGE10') {
      setDiscountApplied(true);
      setPromoError('');
    } else {
      setPromoError('Invalid code. Try VANTAGE10 for 10% off.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-sm animate-fadeIn">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-md h-full bg-[#fdf8f8] shadow-2xl flex flex-col z-10 animate-slideLeft">
        {/* Header */}
        <div className="p-5 border-b border-[#c4c7c7]/40 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
            <h2 className="font-serif text-xl font-medium text-[#1c1b1b]">
              Shopping Bag ({cartItems.reduce((acc, i) => acc + i.quantity, 0)})
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#1c1b1b] hover:opacity-70"
            aria-label="Close shopping bag"
          >
            <X className="w-5 h-5 stroke-[1.5]" />
          </button>
        </div>

        {/* Free Shipping Progress */}
        <div className="px-5 py-3 bg-[#f7f3f2] border-b border-[#c4c7c7]/30 text-xs text-[#1c1b1b]">
          {freeShipping ? (
            <p className="text-emerald-800 font-semibold flex items-center gap-1.5">
              <Check className="w-4 h-4" /> You've unlocked Complimentary Express Shipping!
            </p>
          ) : (
            <div>
              <p className="mb-1 text-[#444748]">
                Add <strong className="text-[#1c1b1b]">${(shippingThreshold - subtotal).toFixed(0)}</strong> more to qualify for Free Express Shipping.
              </p>
              <div className="w-full bg-[#c4c7c7]/40 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-[#1c1b1b] h-full transition-all duration-300"
                  style={{ width: `${Math.min(100, (subtotal / shippingThreshold) * 100)}%` }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <ShoppingBag className="w-12 h-12 stroke-[1] text-[#c4c7c7] mb-3" />
              <p className="font-serif text-lg text-[#1c1b1b] mb-1">
                Your bag is currently empty
              </p>
              <p className="font-sans text-xs text-[#444748] max-w-xs mb-6">
                Discover refined everyday essentials from The Core Collection.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-[#1c1b1b] text-white text-xs font-semibold uppercase tracking-widest rounded-xs hover:bg-black transition-colors"
              >
                Explore Collection
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.cartItemId}
                className="flex gap-4 p-3 bg-white border border-[#c4c7c7]/30 rounded-xs shadow-xs"
              >
                <img
                  src={item.product.primaryImage}
                  alt={item.product.name}
                  className="w-20 h-24 object-cover rounded-xs bg-[#f7f3f2]"
                />

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <h4 className="font-sans text-sm font-semibold text-[#1c1b1b]">
                        {item.product.name}
                      </h4>
                      <button
                        onClick={() => onRemoveItem(item.cartItemId)}
                        className="text-[#747878] hover:text-red-700 transition-colors p-1"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4 stroke-[1.5]" />
                      </button>
                    </div>
                    <p className="text-xs text-[#444748] mt-0.5">
                      {item.selectedColor} • Size {item.selectedSize}
                    </p>
                  </div>

                  <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center border border-[#c4c7c7] rounded-xs h-7">
                      <button
                        onClick={() => onUpdateQuantity(item.cartItemId, item.quantity - 1)}
                        className="w-7 h-full flex items-center justify-center text-[#1c1b1b] hover:bg-[#f1edec]"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-8 text-center text-xs font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.cartItemId, item.quantity + 1)}
                        className="w-7 h-full flex items-center justify-center text-[#1c1b1b] hover:bg-[#f1edec]"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <div className="font-sans text-sm font-semibold text-[#1c1b1b]">
                      ${item.product.price * item.quantity}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer & Checkout */}
        {cartItems.length > 0 && (
          <div className="p-5 border-t border-[#c4c7c7]/40 bg-[#fdf8f8] space-y-4">
            {/* Promo Code Input */}
            <form onSubmit={handleApplyPromo} className="flex gap-2">
              <div className="relative flex-1">
                <Tag className="w-3.5 h-3.5 absolute left-3 top-3 text-[#747878]" />
                <input
                  type="text"
                  placeholder="Promo Code (VANTAGE10)"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="w-full h-9 pl-9 pr-3 bg-white border border-[#c4c7c7] text-xs text-[#1c1b1b] uppercase tracking-wider rounded-xs focus:outline-none focus:border-[#1c1b1b]"
                />
              </div>
              <button
                type="submit"
                className="px-3 h-9 bg-[#f1edec] hover:bg-[#e5e2e1] text-[#1c1b1b] text-xs font-semibold uppercase tracking-wider rounded-xs border border-[#c4c7c7]"
              >
                Apply
              </button>
            </form>
            {discountApplied && (
              <p className="text-[11px] text-emerald-800 font-semibold">
                ✓ Promo code VANTAGE10 applied (10% OFF)
              </p>
            )}
            {promoError && (
              <p className="text-[11px] text-red-700 font-medium">
                {promoError}
              </p>
            )}

            {/* Calculations */}
            <div className="space-y-1.5 text-xs text-[#444748]">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="text-[#1c1b1b] font-medium">${subtotal.toFixed(2)}</span>
              </div>
              {discountApplied && (
                <div className="flex justify-between text-emerald-800 font-medium">
                  <span>Discount (10%)</span>
                  <span>-${discountAmount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-[#1c1b1b] font-medium">
                  {freeShipping ? 'Complimentary' : `$${shippingCost.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between font-bold text-sm text-[#1c1b1b] pt-2 border-t border-[#c4c7c7]/40">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Action */}
            <button
              onClick={() => {
                onClose();
                onOpenCheckout();
              }}
              className="w-full h-12 bg-[#1c1b1b] text-white text-xs font-semibold uppercase tracking-widest rounded-xs flex items-center justify-center gap-2 hover:bg-black transition-colors"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Lock, CreditCard } from 'lucide-react';
import { CartItem } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onOrderComplete: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  cartItems,
  onOrderComplete,
}) => {
  if (!isOpen) return null;

  const [step, setStep] = useState<'shipping' | 'payment' | 'confirmation'>('shipping');
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    zip: '',
    country: 'United States',
    cardNumber: '•••• •••• •••• 4242',
    expDate: '12/28',
    cvv: '123',
  });
  const [orderNumber, setOrderNumber] = useState('');

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const total = subtotal >= 150 ? subtotal : subtotal + 15;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedOrderNum = `VTG-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderNumber(generatedOrderNum);
    setStep('confirmation');
    onOrderComplete();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl max-h-[90vh] bg-[#fdf8f8] shadow-2xl rounded-sm overflow-hidden flex flex-col z-10 border border-[#c4c7c7]/40">
        {/* Header */}
        <div className="p-5 border-b border-[#c4c7c7]/40 flex justify-between items-center bg-[#fdf8f8]">
          <div className="flex items-center gap-2">
            <span className="font-serif text-xl tracking-tight text-[#1c1b1b]">VANTAGE</span>
            <span className="text-xs text-[#747878] font-mono">/ Express Checkout</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#1c1b1b] hover:opacity-70"
            aria-label="Close checkout"
          >
            <X className="w-5 h-5 stroke-[1.5]" />
          </button>
        </div>

        {/* Steps Progress */}
        {step !== 'confirmation' && (
          <div className="flex border-b border-[#c4c7c7]/30 text-xs text-[#444748] font-semibold uppercase tracking-wider bg-[#f7f3f2]">
            <div className={`flex-1 py-3 text-center border-b-2 ${step === 'shipping' ? 'border-[#1c1b1b] text-[#1c1b1b]' : 'border-transparent'}`}>
              1. Shipping
            </div>
            <div className={`flex-1 py-3 text-center border-b-2 ${step === 'payment' ? 'border-[#1c1b1b] text-[#1c1b1b]' : 'border-transparent'}`}>
              2. Payment & Review
            </div>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {step === 'shipping' && (
            <form onSubmit={handleShippingSubmit} className="space-y-4">
              <h3 className="font-serif text-lg text-[#1c1b1b] mb-3">Contact & Delivery Address</h3>
              
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#444748] mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="alex.vantage@example.com"
                  className="w-full h-10 px-3 bg-white border border-[#c4c7c7] text-sm text-[#1c1b1b] rounded-xs focus:outline-none focus:border-[#1c1b1b]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#444748] mb-1">First Name</label>
                  <input
                    type="text"
                    required
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Alex"
                    className="w-full h-10 px-3 bg-white border border-[#c4c7c7] text-sm text-[#1c1b1b] rounded-xs focus:outline-none focus:border-[#1c1b1b]"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#444748] mb-1">Last Name</label>
                  <input
                    type="text"
                    required
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Morgan"
                    className="w-full h-10 px-3 bg-white border border-[#c4c7c7] text-sm text-[#1c1b1b] rounded-xs focus:outline-none focus:border-[#1c1b1b]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#444748] mb-1">Street Address</label>
                <input
                  type="text"
                  required
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="740 Park Avenue, Apt 12B"
                  className="w-full h-10 px-3 bg-white border border-[#c4c7c7] text-sm text-[#1c1b1b] rounded-xs focus:outline-none focus:border-[#1c1b1b]"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#444748] mb-1">City</label>
                  <input
                    type="text"
                    required
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="New York"
                    className="w-full h-10 px-3 bg-white border border-[#c4c7c7] text-sm text-[#1c1b1b] rounded-xs focus:outline-none focus:border-[#1c1b1b]"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#444748] mb-1">Postal Code</label>
                  <input
                    type="text"
                    required
                    name="zip"
                    value={formData.zip}
                    onChange={handleInputChange}
                    placeholder="10021"
                    className="w-full h-10 px-3 bg-white border border-[#c4c7c7] text-sm text-[#1c1b1b] rounded-xs focus:outline-none focus:border-[#1c1b1b]"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#444748] mb-1">Country</label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full h-10 px-2 bg-white border border-[#c4c7c7] text-xs text-[#1c1b1b] rounded-xs focus:outline-none focus:border-[#1c1b1b]"
                  >
                    <option value="United States">United States</option>
                    <option value="Canada">Canada</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="France">France</option>
                    <option value="Japan">Japan</option>
                  </select>
                </div>
              </div>

              <div className="pt-4 flex justify-between items-center border-t border-[#c4c7c7]/40">
                <span className="text-xs text-[#444748] flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5" /> 256-Bit Encrypted
                </span>
                <button
                  type="submit"
                  className="px-6 h-11 bg-[#1c1b1b] text-white text-xs font-semibold uppercase tracking-widest rounded-xs hover:bg-black transition-colors"
                >
                  Continue to Payment
                </button>
              </div>
            </form>
          )}

          {step === 'payment' && (
            <form onSubmit={handlePaymentSubmit} className="space-y-4">
              <h3 className="font-serif text-lg text-[#1c1b1b] mb-1">Payment Method</h3>
              <p className="text-xs text-[#444748] mb-3">All transactions are encrypted and processed securely.</p>

              <div className="p-4 border border-[#1c1b1b] bg-white rounded-xs space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-[#c4c7c7]/30">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#1c1b1b] flex items-center gap-2">
                    <CreditCard className="w-4 h-4" /> Credit Card
                  </span>
                  <div className="flex gap-1.5 text-[10px] font-mono text-[#747878]">
                    <span>VISA</span>
                    <span>MC</span>
                    <span>AMEX</span>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#444748] mb-1">Card Number</label>
                  <input
                    type="text"
                    required
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    className="w-full h-9 px-3 bg-[#fdf8f8] border border-[#c4c7c7] text-xs font-mono text-[#1c1b1b] rounded-xs"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#444748] mb-1">Expiry Date</label>
                    <input
                      type="text"
                      required
                      name="expDate"
                      value={formData.expDate}
                      onChange={handleInputChange}
                      className="w-full h-9 px-3 bg-[#fdf8f8] border border-[#c4c7c7] text-xs font-mono text-[#1c1b1b] rounded-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#444748] mb-1">CVC / CVV</label>
                    <input
                      type="password"
                      required
                      maxLength={4}
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      className="w-full h-9 px-3 bg-[#fdf8f8] border border-[#c4c7c7] text-xs font-mono text-[#1c1b1b] rounded-xs"
                    />
                  </div>
                </div>
              </div>

              {/* Order summary block */}
              <div className="p-4 bg-[#f7f3f2] rounded-xs space-y-2 text-xs text-[#444748]">
                <div className="font-semibold text-[#1c1b1b] uppercase tracking-wider mb-2">Order Summary</div>
                {cartItems.map((item) => (
                  <div key={item.cartItemId} className="flex justify-between">
                    <span>{item.quantity}x {item.product.name} ({item.selectedSize})</span>
                    <span className="font-medium text-[#1c1b1b]">${item.product.price * item.quantity}</span>
                  </div>
                ))}
                <div className="pt-2 border-t border-[#c4c7c7]/40 flex justify-between font-bold text-sm text-[#1c1b1b]">
                  <span>Total Billed</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <div className="pt-4 flex justify-between items-center border-t border-[#c4c7c7]/40">
                <button
                  type="button"
                  onClick={() => setStep('shipping')}
                  className="text-xs uppercase tracking-wider font-semibold text-[#747878] hover:text-[#1c1b1b]"
                >
                  ← Back
                </button>
                <button
                  type="submit"
                  className="px-8 h-11 bg-[#1c1b1b] text-white text-xs font-semibold uppercase tracking-widest rounded-xs hover:bg-black transition-colors"
                >
                  Place Order — ${total.toFixed(2)}
                </button>
              </div>
            </form>
          )}

          {step === 'confirmation' && (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10 stroke-[1.5]" />
              </div>

              <h3 className="font-serif text-2xl font-medium text-[#1c1b1b]">
                Thank You For Your Order
              </h3>

              <p className="font-sans text-xs text-[#444748] max-w-sm mx-auto leading-relaxed">
                Your order <strong className="text-[#1c1b1b]">{orderNumber}</strong> has been confirmed. A receipt and shipment tracking details have been sent to <strong className="text-[#1c1b1b]">{formData.email || 'your email'}</strong>.
              </p>

              <div className="p-4 bg-[#f7f3f2] rounded-xs text-xs max-w-md mx-auto text-left space-y-1">
                <div className="font-semibold text-[#1c1b1b] uppercase tracking-wider">Estimated Delivery</div>
                <div className="text-[#444748]">3 - 5 Business Days (Complimentary Express)</div>
                <div className="text-[#747878] pt-1">Shipping Address: {formData.address}, {formData.city}</div>
              </div>

              <div className="pt-4">
                <button
                  onClick={onClose}
                  className="px-8 py-3 bg-[#1c1b1b] text-white text-xs font-semibold uppercase tracking-widest rounded-xs hover:bg-black transition-colors"
                >
                  Continue Browsing
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

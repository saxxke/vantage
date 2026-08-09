import React from 'react';
import { Menu, ShoppingBag, Search } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenMenu: () => void;
  onOpenCart: () => void;
  onOpenSearch: () => void;
  onResetView: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenMenu,
  onOpenCart,
  onOpenSearch,
  onResetView,
}) => {
  return (
    <header className="fixed top-0 w-full z-50 flex justify-between items-center px-5 md:px-16 h-14 bg-[#fdf8f8]/90 backdrop-blur-md border-b border-[#c4c7c7]/40 transition-colors">
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenMenu}
          className="p-1 text-[#1c1b1b] hover:opacity-70 transition-opacity flex items-center justify-center rounded focus:outline-none"
          aria-label="Open menu"
        >
          <Menu className="w-5 h-5 stroke-[1.5]" />
        </button>
      </div>

      <button
        onClick={onResetView}
        className="font-serif text-2xl md:text-3xl font-medium tracking-tight text-[#1c1b1b] hover:opacity-90 transition-opacity focus:outline-none cursor-pointer select-none"
      >
        VANTAGE
      </button>

      <div className="flex items-center gap-4">
        <button
          onClick={onOpenSearch}
          className="p-1 text-[#1c1b1b] hover:opacity-70 transition-opacity flex items-center justify-center rounded focus:outline-none"
          aria-label="Search"
        >
          <Search className="w-5 h-5 stroke-[1.5]" />
        </button>

        <button
          onClick={onOpenCart}
          className="relative p-1 text-[#1c1b1b] hover:opacity-70 transition-opacity flex items-center justify-center rounded focus:outline-none"
          aria-label="Shopping bag"
        >
          <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#1c1b1b] text-white text-[10px] font-semibold rounded-full flex items-center justify-center leading-none">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
};

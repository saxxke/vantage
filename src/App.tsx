import React, { useState, useEffect, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { HeaderBanner } from './components/HeaderBanner';
import { FilterBar } from './components/FilterBar';
import { ProductCard } from './components/ProductCard';
import { ProductDetailModal } from './components/ProductDetailModal';
import { FilterDrawer } from './components/FilterDrawer';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { MenuDrawer } from './components/MenuDrawer';
import { SearchModal } from './components/SearchModal';
import { Footer } from './components/Footer';
import { InfoModal } from './components/InfoModal';

import { INITIAL_PRODUCTS } from './data/products';
import { Product, CartItem, FilterState, SortOption, InfoModalTopic } from './types';

export default function App() {
  // --- State ---
  const [products] = useState<Product[]>(INITIAL_PRODUCTS);
  const [visibleCount, setVisibleCount] = useState<number>(4);

  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    colors: [],
    sizes: [],
    maxPrice: 400,
    sortBy: 'featured',
    searchQuery: '',
  });

  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('vantage_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Modal Visibility
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [infoTopic, setInfoTopic] = useState<InfoModalTopic | null>(null);

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Save cart to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem('vantage_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error('Cart saving failed', e);
    }
  }, [cartItems]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (filters.categories.length > 0) {
      result = result.filter((p) => filters.categories.includes(p.category));
    }

    // Color filter
    if (filters.colors.length > 0) {
      result = result.filter((p) => filters.colors.includes(p.color));
    }

    // Size filter
    if (filters.sizes.length > 0) {
      result = result.filter((p) =>
        p.sizes.some((s) => filters.sizes.includes(s))
      );
    }

    // Max Price filter
    result = result.filter((p) => p.price <= filters.maxPrice);

    // Search Query
    if (filters.searchQuery.trim()) {
      const q = filters.searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.color.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    // Sorting
    if (filters.sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (filters.sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (filters.sortBy === 'newest') {
      result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    }

    return result;
  }, [products, filters]);

  // Paginated View
  const displayedProducts = useMemo(() => {
    return filteredProducts.slice(0, visibleCount);
  }, [filteredProducts, visibleCount]);

  const activeFilterCount =
    filters.categories.length +
    filters.colors.length +
    filters.sizes.length +
    (filters.maxPrice < 400 ? 1 : 0);

  // Handlers
  const handleAddToCart = (
    product: Product,
    selectedSize: 'XS' | 'S' | 'M' | 'L' | 'XL',
    selectedColor: string
  ) => {
    const cartItemId = `${product.id}-${selectedSize}-${selectedColor}`;

    setCartItems((prev) => {
      const existing = prev.find((item) => item.cartItemId === cartItemId);
      if (existing) {
        return prev.map((item) =>
          item.cartItemId === cartItemId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [
          ...prev,
          {
            cartItemId,
            product,
            selectedSize,
            selectedColor,
            quantity: 1,
          },
        ];
      }
    });

    showToast(`Added ${product.name} (${selectedSize}) to bag`);
  };

  const handleUpdateQuantity = (cartItemId: string, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(cartItemId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.cartItemId === cartItemId ? { ...item, quantity: newQty } : item
      )
    );
  };

  const handleRemoveItem = (cartItemId: string) => {
    setCartItems((prev) => prev.filter((item) => item.cartItemId !== cartItemId));
  };

  const handleResetFilters = () => {
    setFilters({
      categories: [],
      colors: [],
      sizes: [],
      maxPrice: 400,
      sortBy: 'featured',
      searchQuery: '',
    });
    setVisibleCount(4);
  };

  const handleResetView = () => {
    handleResetFilters();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#fdf8f8] text-[#1c1b1b] min-h-screen flex flex-col font-sans selection:bg-[#1c1b1b] selection:text-white">
      {/* Navigation Header */}
      <Navbar
        cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        onOpenMenu={() => setIsMenuOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onResetView={handleResetView}
      />

      {/* Main Container */}
      <main className="flex-grow pt-[56px] pb-[80px]">
        {/* Header Title Section */}
        <HeaderBanner
          title={
            filters.categories.length === 1
              ? `${filters.categories[0]} Collection`
              : 'The Core Collection'
          }
        />

        {/* Sticky Filter & Sort Controls */}
        <FilterBar
          totalItems={filteredProducts.length}
          activeFilterCount={activeFilterCount}
          currentSort={filters.sortBy}
          onOpenFilter={() => setIsFilterOpen(true)}
          onSortChange={(sortBy) => setFilters((prev) => ({ ...prev, sortBy }))}
        />

        {/* Active Filter Chips */}
        {activeFilterCount > 0 && (
          <div className="px-5 md:px-16 py-3 bg-[#f7f3f2] border-b border-[#c4c7c7]/30 flex flex-wrap items-center gap-2 text-xs">
            <span className="font-semibold text-[#747878] uppercase tracking-wider text-[10px]">
              Active Filters:
            </span>
            {filters.categories.map((c) => (
              <span
                key={c}
                className="bg-[#1c1b1b] text-white px-2.5 py-1 rounded-xs flex items-center gap-1 uppercase tracking-wider text-[10px]"
              >
                {c}
                <button
                  onClick={() =>
                    setFilters((prev) => ({
                      ...prev,
                      categories: prev.categories.filter((cat) => cat !== c),
                    }))
                  }
                  className="hover:text-[#c4c7c7]"
                >
                  ×
                </button>
              </span>
            ))}
            {filters.colors.map((col) => (
              <span
                key={col}
                className="bg-[#1c1b1b] text-white px-2.5 py-1 rounded-xs flex items-center gap-1 uppercase tracking-wider text-[10px]"
              >
                {col}
                <button
                  onClick={() =>
                    setFilters((prev) => ({
                      ...prev,
                      colors: prev.colors.filter((color) => color !== col),
                    }))
                  }
                  className="hover:text-[#c4c7c7]"
                >
                  ×
                </button>
              </span>
            ))}
            <button
              onClick={handleResetFilters}
              className="text-[#1c1b1b] underline font-medium text-[11px] ml-2"
            >
              Reset All
            </button>
          </div>
        )}

        {/* Product Grid */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-8 px-5 md:px-16 pt-8">
          {displayedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelectProduct={(p) => setSelectedProduct(p)}
              onQuickAdd={(p, size) => handleAddToCart(p, size, p.color)}
            />
          ))}
        </section>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="py-20 text-center px-5">
            <p className="font-serif text-xl text-[#1c1b1b] mb-2">
              No items match your criteria
            </p>
            <p className="text-xs text-[#444748] mb-6">
              Try resetting your filters or adjusting your maximum price limit.
            </p>
            <button
              onClick={handleResetFilters}
              className="px-6 py-2.5 bg-[#1c1b1b] text-white text-xs font-semibold uppercase tracking-widest rounded-xs"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Pagination - Load More Button */}
        {displayedProducts.length < filteredProducts.length && (
          <div className="px-5 pt-12 flex justify-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + 4)}
              className="w-full max-w-[200px] h-[48px] border border-[#1c1b1b] text-[#1c1b1b] font-sans text-xs font-semibold uppercase tracking-widest rounded flex items-center justify-center hover:bg-[#1c1b1b] hover:text-white transition-colors duration-200 cursor-pointer"
            >
              Load More
            </button>
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer onOpenInfo={(topic) => setInfoTopic(topic)} />

      {/* Slide-over Drawers & Modals */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      <FilterDrawer
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        filters={filters}
        onUpdateFilters={setFilters}
        onResetFilters={handleResetFilters}
        totalFilteredCount={filteredProducts.length}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onOpenCheckout={() => setIsCheckoutOpen(true)}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cartItems}
        onOrderComplete={() => setCartItems([])}
      />

      <MenuDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onSelectCategory={(cat) => {
          if (cat === 'All') {
            handleResetFilters();
          } else {
            setFilters((prev) => ({ ...prev, categories: [cat] }));
          }
        }}
        onOpenInfo={(topic) => setInfoTopic(topic)}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={products}
        onSelectProduct={(p) => setSelectedProduct(p)}
      />

      <InfoModal topic={infoTopic} onClose={() => setInfoTopic(null)} />

      {/* Floating Action Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#1c1b1b] text-white px-4 py-3 rounded-xs shadow-2xl text-xs font-medium uppercase tracking-wider flex items-center gap-2 border border-white/20 animate-bounce">
          <span>✓</span>
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}

export interface Product {
  id: string;
  name: string;
  color: string;
  colorHex: string;
  category: 'Tees' | 'Pants' | 'Shirts' | 'Jackets' | 'Knitwear' | 'Accessories';
  price: number;
  primaryImage: string;
  secondaryImage: string;
  additionalImages?: string[];
  description: string;
  details: string[];
  sizes: ('XS' | 'S' | 'M' | 'L' | 'XL')[];
  colorsAvailable: { name: string; hex: string }[];
  isNew?: boolean;
  isBestseller?: boolean;
  fabric: string;
  care: string;
}

export interface CartItem {
  cartItemId: string;
  product: Product;
  selectedSize: 'XS' | 'S' | 'M' | 'L' | 'XL';
  selectedColor: string;
  quantity: number;
}

export type SortOption = 'featured' | 'price-asc' | 'price-desc' | 'newest';

export interface FilterState {
  categories: string[];
  colors: string[];
  sizes: string[];
  maxPrice: number;
  sortBy: SortOption;
  searchQuery: string;
}

export type InfoModalTopic = 'journal' | 'sustainability' | 'shipping' | 'returns' | 'privacy';

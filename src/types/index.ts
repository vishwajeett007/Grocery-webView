export enum ProductCategory {
  FRESH_FRUITS_VEG = 'Fresh Fruits & Vegetable',
  COOKING_OIL_GHEE = 'Cooking Oil & Ghee',
  MEAT_FISH = 'Meat & Fish',
  BAKERY_SNACKS = 'Bakery & Snacks',
  DAIRY_EGGS = 'Dairy & Eggs',
  BEVERAGES = 'Beverages'
}

export enum OrderStatus {
  PENDING = 'PENDING',
  ACCEPTED = 'ACCEPTED',
  DELIVERING = 'DELIVERING',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
  FAILED = 'FAILED'
}

export interface Category {
  id: string;
  name: ProductCategory | string;
  image: string;
  color: string;
  borderColor: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  unit: string;
  image: string;
  rating?: number;
  reviews?: number;
  nutritionalInfo?: string;
  isFavorite?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  location: string;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: OrderStatus;
  date: string;
  deliveryCost: number;
}

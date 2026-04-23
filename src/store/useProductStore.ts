import { create } from 'zustand';

interface ProductState {
  favorites: string[];
  toggleFavorite: (productId: string) => void;
  isFavorite: (productId: string) => boolean;
}

export const useProductStore = create<ProductState>((set, get) => ({
  favorites: [],
  toggleFavorite: (productId) => {
    set((state) => {
      const isFav = state.favorites.includes(productId);
      return {
        favorites: isFav 
          ? state.favorites.filter(id => id !== productId)
          : [...state.favorites, productId]
      };
    });
  },
  isFavorite: (productId) => get().favorites.includes(productId)
}));

import type { Product } from '@/types/product';
import { create } from 'zustand';

export interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  items: [],
  addItem: (product) =>
    set((state) => {
      const existingItem = state.items.find((item) => item.id === product.id);
      if (existingItem) {
        const updatedItems = state.items.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
        return { items: updatedItems };
      }
      return { items: [...state.items, { ...product, quantity: 1 }] };
    }),
  removeItem: (productId) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== productId),
    })),
  updateQuantity: (productId, quantity) =>
    set((state) => ({
      items: state.items
        .map((item) =>
          item.id === productId ? { ...item, quantity: Math.max(0, quantity) } : item
        )
        .filter(item => item.quantity > 0), 
    })),
  clearCart: () => set({ items: [] }),
}));

// Selectors
export const selectCartItems = (state: CartState) => state.items;
export const selectTotalItems = (state: CartState) => state.items.reduce((total, item) => total + item.quantity, 0);

const parsePrice = (priceString?: string): number => {
    if (!priceString) return 0;
    return parseFloat(priceString.replace(/,-/g, '').replace(/\s/g, ''));
}

export const selectTotalPrice = (state: CartState) => {
  return state.items.reduce((total, item) => {
    const price = parsePrice(item.salePrice || item.price);
    return total + price * item.quantity;
  }, 0);
};

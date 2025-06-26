import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import type { Store } from '@/types/store';

interface StoreState {
  selectedStore: Store | null;
  favoriteStores: string[]; // array of store ids
  selectStore: (store: Store) => void;
  clearSelectedStore: () => void;
  toggleFavorite: (storeId: string) => void;
}

export const useStoreStore = create<StoreState>()(
  persist(
    (set) => ({
      selectedStore: null,
      favoriteStores: [],
      selectStore: (store) => set({ selectedStore: store }),
      clearSelectedStore: () => set({ selectedStore: null }),
      toggleFavorite: (storeId) =>
        set((state) => {
          const isFavorite = state.favoriteStores.includes(storeId);
          if (isFavorite) {
            return { favoriteStores: state.favoriteStores.filter((id) => id !== storeId) };
          } else {
            return { favoriteStores: [...state.favoriteStores, storeId] };
          }
        }),
    }),
    {
      name: 'fk-store-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

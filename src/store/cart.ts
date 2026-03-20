import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type CartItem = {
    id: string; // Unique ID (e.g., prodId-color-size)
    productId: string;
    title: string;
    brand: string;
    color: string;
    size: string;
    price: number;
    quantity: number;
    image: string;
}

interface CartStore {
    items: CartItem[];
    isDrawerOpen: boolean;
    addItem: (item: CartItem) => void;
    removeItem: (id: string) => void;
    updateQuantity: (id: string, quantity: number) => void;
    clearCart: () => void;
    getCartTotal: () => number;
    getCartCount: () => number;
    toggleDrawer: () => void;
    setDrawerOpen: (isOpen: boolean) => void;
}

export const useCart = create<CartStore>()(
    persist(
        (set, get) => ({
            items: [],
            isDrawerOpen: false,
            addItem: (item) => {
                const { items } = get();
                const existingItem = items.find(i => i.id === item.id);
                if (existingItem) {
                    set({ items: items.map(i => i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i) });
                } else {
                    set({ items: [...items, item] });
                }
                set({ isDrawerOpen: true }); // Open drawer when adding
            },
            removeItem: (id) => set((state) => ({ items: state.items.filter(i => i.id !== id) })),
            updateQuantity: (id, quantity) => set((state) => ({
                items: state.items.map(i => i.id === id ? { ...i, quantity } : i)
            })),
            clearCart: () => set({ items: [] }),
            getCartTotal: () => get().items.reduce((total, item) => total + (item.price * item.quantity), 0),
            getCartCount: () => get().items.reduce((count, item) => count + item.quantity, 0),
            toggleDrawer: () => set((state) => ({ isDrawerOpen: !state.isDrawerOpen })),
            setDrawerOpen: (isOpen) => set({ isDrawerOpen: isOpen }),
        }),
        {
            name: 'merchnrescue-cart',
            partialize: (state) => ({ items: state.items }), // Only persist items, not drawer state
        }
    )
)

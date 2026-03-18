// context/CartContext.jsx
"use client";
import { createContext, useContext, useState } from "react";
import type { Dispatch, ReactNode, SetStateAction } from "react";

export type Product = {
  id: number;
  name: string;
  salePrice: string; // formatted like "55.00 $"
  img: string;
  originalPrice?: string | null;
  category?: string;
  tag?: string | null;
  sku?: string;
};

export type CartItem = Product & { qty: number };

type CartContextValue = {
  items: CartItem[];
  addToCart: (product: Product, qty?: number) => void;
  removeFromCart: (id: number) => void;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  total: number;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [open, setOpen] = useState(false);

  const addToCart = (product: Product, qty = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) {
        return prev.map((i) => (i.id === product.id ? { ...i, qty: i.qty + qty } : i));
      }
      return [...prev, { ...product, qty }];
    });
    setOpen(true); // open drawer when item added
  };

  const removeFromCart = (id: number) => setItems((prev) => prev.filter((i) => i.id !== id));

  const total = items.reduce((sum, i) => {
    const price = parseFloat(i.salePrice.replace(",", ".").replace(" $", ""));
    return sum + price * i.qty;
  }, 0);

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, open, setOpen, total }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
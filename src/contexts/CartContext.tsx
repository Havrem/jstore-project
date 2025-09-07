import React, { createContext, useContext, useMemo, useState } from "react";
import type { LineItem, Product } from "@schemas/product.schema";

type CartContextValue = {
  items: LineItem[];
  add: (product: Product, qty?: number) => void;
  increment: (productId: number) => void;
  decrement: (productId: number) => void;
  clear: () => void;
  count: number;
  subtotal: number;
};

const CartContext = createContext<CartContextValue | null>(null);

export const CartProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [items, setItems] = useState<LineItem[]>([]);

  const add = (product: Product, qty: number = 1) => {
    setItems(prev => {
      const i = prev.findIndex(li => li.product.id === product.id);
      if (i >= 0) {
        const next = [...prev];
        next[i] = { ...next[i], quantity: next[i].quantity + qty };
        return next;
      }
      const newItem: LineItem = {
        id: Date.now(),           // simple unique id for the line item
        product,
        quantity: Math.max(1, qty),
      };
      return [newItem, ...prev];
    });
  };

  const increment = (productId: number) => {
    setItems(prev =>
      prev.map(li =>
        li.product.id === productId ? { ...li, quantity: li.quantity + 1 } : li
      )
    );
  };

    const decrement = (productId: number) => {
    setItems(prev =>
        prev.flatMap(li => {
        if (li.product.id !== productId) return [li];
        if (li.quantity <= 1) return []; // remove item
        return [{ ...li, quantity: li.quantity - 1 }];
        })
    );
    };


  const clear = () => setItems([]);

  const { count, subtotal } = useMemo(() => {
    const count = items.reduce((n, li) => n + li.quantity, 0);
    const subtotal = items.reduce((s, li) => s + li.product.price * li.quantity, 0);
    return { count, subtotal };
  }, [items]);

  const value: CartContextValue = { items, add, increment, decrement, clear, count, subtotal };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within <CartProvider>");
  return ctx;
};
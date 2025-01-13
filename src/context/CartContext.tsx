import { createContext, useContext, useState, ReactNode } from 'react';

interface CartItem {
  id: number;
  quantity: number;
  // ... outros campos necessários
}

interface CartContextType {
  cart: CartItem[];
  // ... outros métodos do carrinho
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  return (
    <CartContext.Provider value={{ cart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
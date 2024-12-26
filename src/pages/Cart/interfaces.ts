import type { ReactNode } from 'react';

export interface ICartItem {
  title: string;
  image: string;
}

export interface ICartItems {
  [id: string]: ICartItem;
}

export interface ICartContextProps {
  cartItems: ICartItems;
  addItemToCart: (id: string, title: string, image: string) => void;
  removeItemFromCart: (id: string) => void;
  clearCart: () => void;
}

export interface ICartProviderProps {
  children: ReactNode;
}

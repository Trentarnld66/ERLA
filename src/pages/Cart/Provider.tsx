import { FC, useEffect, useState } from 'react';
import type {
  ICartContextProps,
  ICartProviderProps,
  ICartItems,
} from './interfaces';
import CartContext from './CartContext';

const CART_STORAGE_KEY = 'cartItems';

const CartProvider: FC<ICartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<ICartItems>(() => {
    const storedCart = localStorage.getItem(CART_STORAGE_KEY);
    return storedCart ? JSON.parse(storedCart) : {};
  });

  useEffect((): void => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  const addItemToCart = (id: string, title: string, image: string): void => {
    setCartItems((prevCartItems: ICartItems) => ({
      ...prevCartItems,
      [id]: { title, image },
    }));
  };

  const removeItemFromCart = (id: string): void => {
    setCartItems((prevCartItems: ICartItems) => {
      const newCartItems = { ...prevCartItems };
      delete newCartItems[id];
      return newCartItems;
    });
  };

  const clearCart = () => {
    setCartItems({});
  };

  const value: ICartContextProps = {
    cartItems,
    addItemToCart,
    removeItemFromCart,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;

import { createContext } from 'react';
import type { ICartContextProps } from './interfaces';

export const CartContext = createContext<ICartContextProps>({
  cartItems: {},
  addItemToCart: (): void => {},
  removeItemFromCart: (): void => {},
  clearCart: (): void => {},
});

export default CartContext;

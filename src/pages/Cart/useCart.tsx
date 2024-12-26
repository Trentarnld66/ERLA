import { useContext } from 'react';
import type { ICartContextProps } from './interfaces';
import CartContext from './CartContext';

const useCart = (): ICartContextProps => {
  return useContext(CartContext);
};

export default useCart;

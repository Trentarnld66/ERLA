// Cart.tsx
import { FC } from 'react';
import style from './Cart.module.scss';
import useCart from './useCart';
import CartItem from '../../components/CartItem';
import clsx from 'clsx';

const Cart: FC = () => {
  const { cartItems, removeItemFromCart, clearCart } = useCart();

  const cartItemsArray = Object.entries(cartItems);

  return (
    <div className={style.cart}>
      <div className={clsx(style.cart__container, 'container')}>
        <ul className={style.cart__list}>
          {cartItemsArray.map(([id, item]) => (
            <CartItem
              key={id}
              id={id}
              item={item}
              onRemove={removeItemFromCart}
            />
          ))}
        </ul>
        {!cartItemsArray.length ? (
          <div className={style.emptyCart}>Корзина пуста</div>
        ) : (
          <button className={style.cart__btn} onClick={clearCart}>
            Очистить корзину
          </button>
        )}
      </div>
    </div>
  );
};

export default Cart;

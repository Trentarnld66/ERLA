// Cart.tsx
import { FC } from 'react';
import style from './Cart.module.scss';
import useCart from './useCart';
import CartItem from '../../components/CartItem';
import clsx from 'clsx';

const Cart: FC = () => {
  const { cartItems, removeItemFromCart, clearCart } = useCart();

  const cartItemsArray = Object.entries(cartItems);

  const handleConfirm = (): void => {
    let number: string | null = '';
    let name: string | null = '';

    while (!number || !/^\+?\d{10,15}$/.test(number)) {
      number = prompt(
        'Укажите свой номер телефона (от 10 до 15 цифр, можно с +)'
      );

      if (number === null) {
        alert('Оформление заказа отменено.');
        return;
      }
    }

    while (!name || name.trim().length < 2) {
      name = prompt('Укажите свое имя (не менее 2 символов)');

      if (name === null) {
        alert('Оформление заказа отменено.');
        return;
      }
    }

    alert(
      `Спасибо, ${name}! Наш менеджер свяжется с Вами по номеру ${number} в ближайшее время!`
    );

    clearCart();
  };

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
          <div className={style.cart__block}>
            <button className={style.cart__btn} onClick={handleConfirm}>
              Заказать
            </button>
            <button className={style.cart__btn} onClick={clearCart}>
              Очистить корзину
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

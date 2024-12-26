import { FC, useState } from 'react';
import style from './CartItem.module.scss';
import clsx from 'clsx';
import Loader from '../../components/Loader';

interface CartItemProps {
  id: string;
  item: { title: string; image: string };
  onRemove: (id: string) => void;
}

const CartItem: FC<CartItemProps> = ({ id, item, onRemove }) => {
  const [isImageLoading, setIsImageLoading] = useState(true);
  const handleImageLoad = (): void => setIsImageLoading(false);

  return (
    <li key={id} className={style.cartItem}>
      <div className={clsx(style.cartItem__container, 'container')}>
        <div className={style.cartItem__loader}>
          {isImageLoading && <Loader />}
          <img
            src={item.image}
            alt={item.title}
            className={clsx(
              style.cartItem__img,
              isImageLoading && style.cartItem__img_hidden
            )}
            onLoad={handleImageLoad}
          />
        </div>

        <div className={style.cartItem__content}>
          <h2 className={style.cartItem__name}>{item.title}</h2>
          <button className={style.cartItem__btn} onClick={() => onRemove(id)}>
            Удалить
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;

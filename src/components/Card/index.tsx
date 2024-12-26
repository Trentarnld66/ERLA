import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Loader from '../Loader';
import style from './Card.module.scss';
import clsx from 'clsx';

interface ICard {
  id: number;
  title: string;
  image: string;
}

const Card: FC<ICard> = ({ id, title, image }) => {
  const navigate = useNavigate();

  const [isImageLoading, setIsImageLoading] = useState<boolean>(true);

  const handleImageLoad = (): void => {
    setIsImageLoading(false);
  };

  const handleCardClick = (): void => {
    navigate(`/catalog/${id}`);
  };

  return (
    <li className={style.card} onClick={handleCardClick}>
      <div className={style.card__img}>
        {isImageLoading && (
          <div className={style.card__loader}>
            <Loader />
          </div>
        )}
        <img
          src={image}
          alt={title}
          onLoad={handleImageLoad}
          loading='lazy'
          className={clsx(
            style.card__img,
            isImageLoading && style.cart__img_hidden
          )}
        />
      </div>
      <h2 className={style.card__name}>{title}</h2>
    </li>
  );
};

export default Card;

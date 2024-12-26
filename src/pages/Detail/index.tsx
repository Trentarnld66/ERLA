import { FC, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import axios from 'axios';

import Loader from '../../components/Loader';

import style from './Detail.module.scss';
import clsx from 'clsx';
import useCart from '../Cart/useCart';

interface IProduct {
  id: number;
  title: string;
  image: string;
  description: string;
}

const fetchProduct = async (id: number): Promise<IProduct> => {
  const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
  return data;
};

const Detail: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { cartItems, addItemToCart, removeItemFromCart } = useCart();

  const [isImageLoading, setIsImageLoading] = useState<boolean>(true);
  const handleImageLoad = (): void => {
    setIsImageLoading(false);
  };

  const {
    data: productData,
    isLoading,
    isPending,
  }: UseQueryResult<IProduct> = useQuery({
    queryKey: ['products', id],
    queryFn: (): Promise<IProduct> => fetchProduct(Number(id)),
  });

  if (isLoading || isPending)
    return (
      <div className='loader'>
        <Loader />
      </div>
    );

  const { image, title, description } = productData!;

  const handleAddToCart = (): void => {
    addItemToCart(id!, title!, image!);
  };

  const handleRemoveFromCart = (): void => {
    removeItemFromCart(id!);
  };

  const isProductInCart = !!cartItems[id!];

  return (
    <div className={style.detail}>
      <div className={clsx(style.detail__container, 'container')}>
        <div className={style.detail__loader}>
          {isImageLoading && <Loader />}
          <img
            src={image}
            alt={title}
            className={clsx(
              style.detail__img,
              isImageLoading && style.detail__img_hidden
            )}
            onLoad={handleImageLoad}
          />
        </div>

        <div className={style.detail__content}>
          <h2 className={style.detail__name}>{title}</h2>
          <p className={style.detail__descr}>{description}</p>
          <button
            className={style.detail__btn}
            onClick={isProductInCart ? handleRemoveFromCart : handleAddToCart}
          >
            {isProductInCart
              ? 'Товар добавлен. Нажмите, чтобы убрать'
              : 'Добавить в корзину'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;

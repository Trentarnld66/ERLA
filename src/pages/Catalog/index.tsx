import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { FC } from 'react';
import Card from '../../components/Card';

import style from './Catalog.module.scss';
import clsx from 'clsx';
import Loader from '../../components/Loader';

type Product = {
  id: number;
  title: string;
  image: string;
};

const fetchProducts = async (): Promise<Product[]> => {
  const { data } = await axios.get('https://fakestoreapi.com/products');
  return data;
};

const Catalog: FC = () => {
  const {
    data: productList,
    isLoading,
    isPending,
  } = useQuery<Product[]>({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  if (isLoading || isPending)
    return (
      <div className='loader'>
        <Loader />
      </div>
    );

  return (
    <ul className={style.catalog}>
      <div className={clsx(style.catalog__container, 'container')}>
        {productList?.map(({ id, title, image }) => (
          <Card key={id} id={id} title={title} image={image} />
        ))}
      </div>
    </ul>
  );
};

export default Catalog;

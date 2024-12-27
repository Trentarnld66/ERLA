import { useQuery } from '@tanstack/react-query';

import { FC } from 'react';
import Card from '../../components/Card';

import style from './Catalog.module.scss';
import clsx from 'clsx';
import Loader from '../../components/Loader';
import fetchProductsList from '../../API/fetchProductsList';

interface IProduct {
  id: number;
  name: string;
  image_link: string | null;
}

const Catalog: FC = () => {
  const {
    data: productList,
    isLoading,
    isPending,
  } = useQuery<IProduct[]>({
    queryKey: ['products'],
    queryFn: fetchProductsList<IProduct>,
  });

  if (isLoading || isPending)
    return (
      <div className='loader'>
        <Loader />
      </div>
    );

  const filteredProducts = productList
    ?.filter(
      (product) => product.image_link && product.image_link.trim() !== ''
    )
    .slice(0, 24);

  return (
    <ul className={style.catalog}>
      <div className={clsx(style.catalog__container, 'container')}>
        {filteredProducts?.map(({ id, name, image_link }) => (
          <Card key={id} id={id} title={name} image={image_link!} />
        ))}
      </div>
    </ul>
  );
};

export default Catalog;

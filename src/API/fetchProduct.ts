import fetchProductsList from './fetchProductsList';
import { IProduct } from './interfaces';

const fetchProduct = async (id: string): Promise<IProduct | null> => {
  try {
    const data: IProduct[] = await fetchProductsList();
    const product = data.find(
      (product: IProduct): boolean => String(product.id) === id
    );

    if (!product) {
      console.warn(`Продукт с ID "${id}" не найден.`);
      return null;
    }

    return product;
  } catch (error) {
    console.error('Ошибка при получении продукта:', error);
    throw new Error('Не удалось получить продукт');
  }
};

export default fetchProduct;

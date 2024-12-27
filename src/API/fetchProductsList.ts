import axios from 'axios';
import URL from './url';

const fetchProductsList = async <T>(): Promise<T[]> => {
  const { data } = await axios.get(URL);
  return data;
};

export default fetchProductsList;

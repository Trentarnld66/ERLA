import { FC } from 'react';
import style from './Loader.module.scss';

const Loader: FC = () => (
  <div className={style.loader}>
    <div className={style.loader__item}></div>
    <div className={style.loader__item}></div>
    <div className={style.loader__item}></div>
  </div>
);

export default Loader;

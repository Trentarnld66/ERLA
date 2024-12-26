import { FC, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import style from './Header.module.scss';
import clsx from 'clsx';
import useCart from '../../pages/Cart/useCart';

const Header: FC = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState<string>(location.pathname);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const handleLinkClick = (link: string): void => {
    setActiveLink(link);
  };

  const { cartItems } = useCart();
  const hasItemsInCart = Object.keys(cartItems).length > 0;

  return (
    <header className={style.header}>
      <div className={clsx(style.header__container, 'container')}>
        <h1 className={style.logo}>ERLA</h1>
        <nav className={style.header__nav}>
          <Link
            to={'/home'}
            className={clsx(style.link, {
              [style.link_active]: activeLink.includes('/home'),
            })}
            onClick={() => handleLinkClick('/home')}
          >
            Главная
          </Link>
          <Link
            to={'/about'}
            className={clsx(style.link, {
              [style.link_active]: activeLink.includes('/about'),
            })}
            onClick={() => handleLinkClick('/about')}
          >
            О бренде
          </Link>
          <Link
            to={'/catalog'}
            className={clsx(style.link, {
              [style.link_active]: activeLink.includes('/catalog'),
            })}
            onClick={() => handleLinkClick('/catalog')}
          >
            Каталог
          </Link>
          <Link
            to={'/cart'}
            className={clsx(style.link, {
              [style.link_active]: activeLink.includes('/cart'),
            })}
            onClick={() => handleLinkClick('/cart')}
          >
            <div className={style.cart}>
              {/* <img className={style.cart__img} src='/cart.png' alt='cart' /> */}
              <span className={style.cart__capture}>Корзина</span>
              <div
                className={clsx(style.cart__counter, {
                  [style.cart__counter_active]: hasItemsInCart, 
                })}
              >
                {hasItemsInCart ? Object.keys(cartItems).length : 0}
              </div>
            </div>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

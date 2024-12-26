import clsx from 'clsx';
import style from './Footer.module.scss';

import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className={style.footer}>
      <div className={clsx(style.footer__container, 'container')}>
        <div className={style.footer__block}>
          <h4 className={style.footer__logo}>ERLA</h4>
          <small className={style.footer__small}>
            Первый белорусский бренд, созданный косметологами
            и&nbsp;дерматологами для своих постоянных клиентов
          </small>
        </div>
        <div className={clsx(style.footer__block, style.contacts)}>
          <h4 className={clsx(style.contacts__title)}>Контакты</h4>
          <div className={style.contacts__block}>
            <span>ИП Молдошев Эрланбек Уланбекович</span>
            <span>Адрес: Угрешская улица, 14с1</span>
            <a href='mailto:emoldosev1@gmail.com'>
              email: emoldosev1@gmail.com
            </a>
            <a
              href='https://t.me/treuntas'
              target='_blank'
              rel='noopener noreferrer'
            >
              Telegram: treuntas
            </a>
            <a href='tel:+79999097127'>Телефон: +7 (999) 909-71-27</a>
          </div>
        </div>
        <div className={style.footer__block}>
          <a className={style.footer__last}
            href='https://t.me/treuntas'
            target='_blank'
            rel='noopener noreferrer'
          >
            Разработка сайта: <br />
            Молдошев Эрланбек
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

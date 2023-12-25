import styles from './footer.module.css';

const FooterComponent = () => {

  return (
    <footer className={styles.footer} data-testid="footer-component">
      <div className={styles.footer__topSide}>
        <div className={styles.topSideMenu}>
          <h3 className={styles.topSideMenu__title}>О нас</h3>
          <ul className={styles.topSideMenu__listContainer}>
            <li className={styles.topSideMenu__item}>Каталог услуг</li>
            <li className={styles.topSideMenu__item}>Контакты</li>
            <li className={styles.topSideMenu__item}>Главная</li>
            <li className={styles.topSideMenu__item}>О компании</li>
          </ul>
        </div>
        <div className={styles.topSideMenu}>
          <h3 className={styles.topSideMenu}>Клиентам</h3>
          <ul className={styles.topSideMenu__listContainer}>
            <li className={styles.topSideMenu__item}>Вызвать клининг</li>
            <li className={styles.topSideMenu__item}>Химчистка</li>
            <li className={styles.topSideMenu__item}>Наши средства</li>
            <li className={styles.topSideMenu__item}>Часто задаваемые вопросы - FAQ</li>
            <li className={styles.topSideMenu__item}>Юрлицам</li>
          </ul>
        </div>
      </div>
      <div className={styles.footer__bottomSide}>
        <div className={styles.bottomSideMenu}>
          <h3 className={styles.bottomSideMenu__title}>Сотрудничество с нами</h3>
          <ul className={styles.bottomSideMenu__listContainer}>
            <li className={styles.bottomSideMenu__item}>Полезная информация</li>
            <li className={styles.bottomSideMenu__item}>Особенности</li>
            <li className={styles.bottomSideMenu__item}>Вакансии</li>
            <li className={styles.bottomSideMenu__item}>Партнерам</li>
          </ul>
        </div>
        <div className={styles.copyRightContainer}>
          <p>© 2020–{new Date().getFullYear()}, Клининговая компания Чистодом, официальный сайт</p>
        </div>
      </div>
    </footer >
  )
}
export default FooterComponent;

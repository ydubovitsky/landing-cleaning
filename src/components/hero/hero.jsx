import styles from './hero.module.css';

export const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p>Клининговая компания Чистодом</p>
      </div>
      <div className={styles.promo}>
        <p>до 25 декабря по коду: <span>Клининг</span></p>
        <p className={styles.promoAdditional}>Скидка 30% на химчистку при заказе генеральной уборки! Чистота сама не придет, но она придет с нами!</p>
      </div>
    </div>
  )
}
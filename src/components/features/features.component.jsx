import styles from "./features.module.css";

const features = [
  {
    title: "Профессиональная уборка жилых и офисных помещений",
    text: "Профессиональная уборка жилых и офисных помещений - ключевая специализация клининговой компании Чистодом. Мы всегда готовы прийти на помощь, когда необходимо быстро и качественно убрать квартиру, дом или офис",
  },
  {
    title: "Индивидуальный подход",
    text: "Если нужны отдельные клининговые услуги, это тоже к нам: мы подготовим индивидуальное предложение.",
  },
  {
    title: "Наш опыт",
    text: "Огромный опыт работы, стабильность и надежность персонала, использование профессиональной техники, экологичных и безопасных моющих средств обеспечивают гарантированно качественный сервис клининговой компании чистодом",
  },
];

const FeaturesComponent = () => {
  const showFeaturesEl = () => {
    return features.map((el) => (
      <div className={styles.featureContainer} key={el.text}>
        <div className={styles.featureHeader}>
          <p>{el.title}</p>
        </div>
        <div className={styles.featureDescription}>
          <p>{el.text}</p>
        </div>
      </div>
    ));
  };

  return (
    <div id="features" className={styles.container}>
      <div className={styles.header}>
        <h1>Наши особенности</h1>
        <div className={styles.line} />
      </div>
      <div className={styles.features}>{showFeaturesEl()}</div>
    </div>
  );
};

export default FeaturesComponent;

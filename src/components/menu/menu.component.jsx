import styles from "./menu.module.css";

const Menu = [
  {
    class: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNsZWFuaW5nfGVufDB8fDB8fHwy",
    title: "Уборка",
  },
  {
    class: "https://images.unsplash.com/photo-1627905646269-7f034dcc5738?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2xlYW5pbmd8ZW58MHx8MHx8fDI%3D",
    title: "Окна",
  },
  {
    class: "https://images.unsplash.com/photo-1603712725038-e9334ae8f39f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNsZWFuaW5nfGVufDB8fDB8fHwy",
    title: "Химчистка",
  },
  {
    class: "https://images.unsplash.com/photo-1627905646269-7f034dcc5738?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2xlYW5pbmd8ZW58MHx8MHx8fDI%3D",
    title: "Юрлицам",
  },
  {
    class: "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2xlYW5pbmd8ZW58MHx8MHx8fDI%3D",
    title: "Наши средства",
  },
  {
    class: "https://images.unsplash.com/photo-1601160458000-2b11f9fa1a0e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNsZWFuaW5nfGVufDB8fDB8fHwy",
    title: "Ещё",
  },
];

const MenuComponent = () => {
  const showMenuEl = () => {
    return Menu.map((el) => (
      <div className={styles.featureContainer} key={el.text}>
        <div className={styles.featureIcon}>
          <img src={el.class} alt="" srcset="" />
        </div>
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
    <div id="Menu" className={styles.container}>
      <div className={styles.header}>
        <div className={styles.line} />
      </div>
      <div className={styles.menu}>{showMenuEl()}</div>
    </div>
  );
};

export default MenuComponent;

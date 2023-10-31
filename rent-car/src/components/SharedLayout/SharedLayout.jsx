import styles from "../SharedLayout/SharedLayout.module.scss";

const SharedLayout = () => {
  return (
    <header>
      <a href="./index.html" className={styles.logo}>
        <span className={styles.logo1}>car</span>rent
      </a>
    </header>
  );
};

export default SharedLayout;

import styles from "./MainLMButton.module.scss";

const MainLMButton = () => {
  return (
    <div className={styles.button_container}>
      <button className={styles.button}>Load more</button>
    </div>
  );
};

export default MainLMButton;

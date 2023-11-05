import styles from "./CarProfile.module.scss";
import cofee from "./coffee.jpg";

const CarProfile = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal_container}>
        <img className={styles.img} src={cofee} alt="photo" />
        <div className={styles.table_item_upper}>
          <div className={styles.item_title_container}>
            <h3 className={styles.item_title}>
              Buick <span className={styles.model}>Enclave</span>, 2022
            </h3> 
          </div>
          <ul className={styles.hash_list}>
            <li className={styles.hash_list_item}>city</li>
            <li className={styles.hash_list_item}>country</li>
            <li className={styles.hash_list_item}>rentalCompany</li>
            <li className={styles.hash_list_item}>type</li>
            <li className={styles.hash_list_item}>model</li>
            <li className={styles.hash_list_item}>id</li>
            <li className={styles.hash_list_item}>shortAccessoriesItem</li>
          </ul>
          <p className={styles.description}>The Buick Enclave is a stylish and spacious SUV known for its comfortable ride and luxurious features.</p>
        </div>
      </div>
    </div>
  );
};

export default CarProfile;

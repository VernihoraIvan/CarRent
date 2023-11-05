import styles from "./CarProfile.module.scss";
import cofee from "./coffee.jpg";

const CarProfile = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal_container}>
        <div className={styles.close}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M18 6L6 18"
              stroke="#121417"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 6L18 18"
              stroke="#121417"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <img className={styles.img} src={cofee} alt="photo" />
        <div className={styles.table_item_upper}>
          <div className={styles.item_title_container}>
            <h3 className={styles.item_title}>
              Buick <span className={styles.highlight}>Enclave</span>, 2022
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
        </div>
        <div className={styles.description_container}>
          <p className={styles.description}>
            The Buick Enclave is a stylish and spacious SUV known for its
            comfortable ride and luxurious features.
          </p>
        </div>
        <div className={styles.accessories_container}>
          <h3 className={styles.accessories_title}>
            Accessories and functionalities:
          </h3>
          <ul className={styles.hash_list}>
            <li className={styles.hash_list_item}>Leather seats</li>
            <li className={styles.hash_list_item}>Panoramic sunroof</li>
            <li className={styles.hash_list_item}>Power liftgate</li>
            <li className={styles.hash_list_item}>Premium audio system</li>
            <li className={styles.hash_list_item}>Remote start</li>
            <li className={styles.hash_list_item}>Blind-spot monitoring</li>
          </ul>
        </div>
        <div className={styles.rental_container}>
          <h3 className={styles.rental_title}>Rental Conditions: </h3>
          <ul className={styles.rental_list}>
            <li className={styles.rental_list_item}>
              Minimum age : <span className={styles.highlight}>25</span>
            </li>
            <li className={styles.rental_list_item}>
              Valid driver&apos;s license
            </li>
            <li className={styles.rental_list_item}>
              Security deposite required{" "}
            </li>
            <li className={styles.rental_list_item}>
              Mileage:<span className={styles.highlight}>5,850</span>
            </li>
            <li className={styles.rental_list_item}>
              Price: <span className={styles.highlight}>40$</span>
            </li>
          </ul>
        </div>
        <button className={styles.button}>Rental car</button>
      </div>
    </div>
  );
};

export default CarProfile;

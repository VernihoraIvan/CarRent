import { Link } from "react-router-dom";
import styles from "./MainDescription.module.scss";

const MainDescription = () => {
  return (
    <div className={styles.home_container}>
      <p>
        CarRent is a user-friendly application designed for companies offering
        car rental services in Ukraine, providing seamless access to a diverse
        fleet of vehicles. With our intuitive platform, you can effortlessly
        browse and select from a wide range of cars, ensuring a hassle-free
        rental experience. Discover RentACar as your go-to solution for
        convenient car rental services in Ukraine, simplifying the process from
        start to finish.
      </p>
      <Link className={styles.button} to="/catalog">
        Let&apos;s start
      </Link>
    </div>
  );
};

export default MainDescription;

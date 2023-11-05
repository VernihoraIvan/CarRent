/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import styles from "./CatalogItem.module.scss";
import { choosedCar } from "@/redux/filter/slice";

// eslint-disable-next-line react/prop-types
const CatalogItem = (props) => {
  const dispatch = useDispatch();
  const {
    id,
    accessories,
    year,
    make,
    model,
    type,
    img,
    rentalPrice,
    address,
    rentalCompany,
  } = props.item;
  const getRandomInt = (max) => Math.floor(Math.random() * max);

  const city = address.split(",")[1].trim();
  const country = address.split(",")[2].trim();

  const accessoriesItemIndex = getRandomInt(accessories.length - 1);
  const accessoriesItem = accessories[accessoriesItemIndex].split(" ");
  const shortAccessoriesItem = accessoriesItem
    .slice(accessoriesItem.length - 2)
    .join(" ");

  const onClickHandler = (id) => {
    dispatch(choosedCar(id));
    props.openModal();
  };

  return (
    <li className={styles.catalog_table_item}>
      <div className={styles.table_item_upper}>
        <div className={styles.img_container}>
          <img
            className={styles.catalog_table_item_img}
            src={img}
            alt="photo"
          />
        </div>
        <div className={styles.item_title_container}>
          <h3 className={styles.item_title}>
            {make} <span className={styles.model}>{model}</span>, {year}
          </h3>
          <p>{rentalPrice}</p>
        </div>
        <ul className={styles.hash_list}>
          <li className={styles.hash_list_item}>{city}</li>
          <li className={styles.hash_list_item}>{country}</li>
          <li className={styles.hash_list_item}>{rentalCompany}</li>
          <li className={styles.hash_list_item}>{type}</li>
          <li className={styles.hash_list_item}>{model}</li>
          <li className={styles.hash_list_item}>{id}</li>
          <li className={styles.hash_list_item}>{shortAccessoriesItem}</li>
        </ul>
      </div>
      <button onClick={() => onClickHandler(id)} className={styles.item_button}>
        Learn more
      </button>
    </li>
  );
};

export default CatalogItem;

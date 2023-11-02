import styles from "./CatalogItem.module.scss"
import coffee from "./coffee.jpg";

const CatalogItem = () => {
return (
    <li className={styles.catalog_table_item}>
            <div className={styles.table_item_upper}>
              <img
                className={styles.catalog_table_item_img}
                src={coffee}
                alt="photo"
              />
              <div className={styles.item_title_container}>
                <h3 className={styles.item_title}>
                  Buick <span className={styles.model}>Enclave</span>, 2008
                </h3>
                <p>$40</p>
              </div>
              <ul className={styles.hash_list}>
                <li className={styles.hash_list_item}>Kiev</li>
                <li className={styles.hash_list_item}>Ukraine</li>
                <li className={styles.hash_list_item}>Luxury Car Rentals</li>
                <li className={styles.hash_list_item}>Premium</li>
                <li className={styles.hash_list_item}>Suv</li>
                <li className={styles.hash_list_item}>Enclave</li>
                <li className={styles.hash_list_item}>9582</li>
                <li className={styles.hash_list_item}>Power liftgate</li>
              </ul>
            </div>
            <button className={styles.item_button}>Learn more</button>
          </li>
)
}

export default CatalogItem;
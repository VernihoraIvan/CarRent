    // import { useState } from "react";
import styles from "./Select.module.scss";

const Select = () => {
//   const [isSelectBrandIsOpen, setSelectBrandIsOpen] = useState(false);
//   const onClickBrandIsOpen = () => {
//     setSelectBrandIsOpen(!isSelectBrandIsOpen);
//   };

  return (
    <div className={styles.input_container}>
      <form className={styles.form}>
        {/* <div className={styles.select_selected} onClick={onClickBrandIsOpen}>
          <p>Enter the text</p>
          <div className={styles.select_items}>
            <div>Audi</div>
            <div>Volvo</div>
            <div>Ford</div>
          </div>
        </div> */}
        <div className={styles.form_element}>
          <label htmlFor="brand">Car brand</label>
          <select className={styles.select_brand} name="brand" id="brand">
            <option value="Enter the text">Enter the text</option>
            <option value="Enter the text">Audi</option>
            <option value="Enter the text">Volvo</option>
            <option value="Enter the text">Ford</option>
          </select>
        </div>
        <div className={styles.form_element}>
          <label htmlFor="price">Price/ 1 hour</label>
          <select className={styles.select_price} name="price" id="price">
            <option value="price">To $</option>
          </select>
        </div>
        <div className={styles.form_element}>
          <label htmlFor="mileage">Car mileage / km</label>
          <div className={styles.mileage_select_container}>
            <select
              className={styles.select_from}
              name="mileage_from"
              id="mileage"
            >
              <option value="mileage_from">From</option>
            </select>
            <select className={styles.select_to} name="mileage_to" id="mileage">
              <option value="mileage_to">To</option>
            </select>
          </div>
        </div>
        <div className={styles.form_element}>
          <button className={styles.submit_button} type="submit">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Select;

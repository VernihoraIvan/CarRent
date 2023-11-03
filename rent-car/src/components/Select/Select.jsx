import { fetchBrands } from "@/redux/cars/operations";
import { getBrands } from "@/redux/cars/selectors";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./Select.module.scss";

const Select = () => {
  const dispatch = useDispatch();
  const brands = useSelector(getBrands);

  useEffect(() => {
    dispatch(fetchBrands());
  }, [dispatch])


  return (
    <div className={styles.input_container}>
      <form className={styles.form}>
        <div className={styles.form_element}>
          <label htmlFor="brand">Car brand</label>
          <select className={styles.select_brand} name="brand" id="brand">
            <option value="Enter the text">Enter the text</option>
            {brands?.map((brand) => (
              <option key={brand} value="Enter the text">{brand}</option>
            ))}

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

import { useEffect, useState } from "react";
import CatalogItem from "../CatalogItem/CatalogItem";
import styles from "./Catalog.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCars } from "@/redux/cars/thunk";
import { getCars } from "@/redux/cars/selectors";

import { Loader } from "../Loader/Loader";
import MainLMButton from "../MainLMButton/MainLMButton";
import { getFilteredCars } from "@/redux/filter/selectors";



const Catalog = () => {
  const [controlledFilterList, setControlledFilteredList] = useState({brand: "", price: "", minMileage: "", maxMileage: ""}) 
  const dispatch = useDispatch();
  const items = useSelector(getCars);
  const filter = useSelector(getFilteredCars);


  useEffect(() => {
    dispatch(fetchAllCars());
  }, [dispatch]);

  useEffect(() => {
    setControlledFilteredList(filter) 
  }, [filter]);

  const filteredList = items?.filter(
    (element) =>
      (controlledFilterList.price === 'price' ? true : Number(element.rentalPrice.slice(1)) <= controlledFilterList.price) &&
      (controlledFilterList.brand === 'Enter the text' ? true : element.make === controlledFilterList.brand) &&
      (controlledFilterList.minMileage === null ? true : element.mileage >= controlledFilterList.minMileage) &&
      (controlledFilterList.maxMileage === null ? true : element.mileage <= controlledFilterList.maxMileage)
  );

  if (!items) {
    return <Loader />;
  }
  if (filter.length !== 0) {
    return (
      <section>
        <div className={styles.catalog_container}>
          <div className={styles.catalog_table}>
            {filteredList.map((item) => (
              <CatalogItem item={item} key={item.id} />
            ))}
          </div>
        </div>
        <MainLMButton />
      </section>
    );
  }

  return (
    <section>
      <div className={styles.catalog_container}>
        <div className={styles.catalog_table}>
          {items.map((item) => (
              <CatalogItem item={item} key={item.id} />
            ))}
        </div>
      </div>
      <MainLMButton />
    </section>
  );
};

export default Catalog;


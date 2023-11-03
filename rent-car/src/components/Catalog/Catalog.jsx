import { useEffect, useState } from "react";
import CatalogItem from "../CatalogItem/CatalogItem";
import styles from "./Catalog.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "@/redux/cars/operations";
import { getCars } from "@/redux/cars/selectors";

import {Loader} from "../Loader/Loader"

const Catalog = () => {
  const dispatch = useDispatch();
  const items = useSelector(getCars);

  useEffect(() => {
    dispatch(fetchCars()); 
  }, [dispatch]);

  if (!items) {
    return <Loader/>;
  }
  return (
    <section>
      <div className={styles.catalog_container}>
        <div className={styles.catalog_table}>
          {items.map((item) =>(
            <CatalogItem item={item} key={item.id}/>
          ) )}
        </div>
      </div>
    </section>
  );
};

export default Catalog;

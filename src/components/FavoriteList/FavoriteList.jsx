import { useSelector } from "react-redux";
import styles from "./FavoriteList.module.scss";
import { getCars } from "@/redux/cars/selectors";
import { getfavoriteCar } from "@/redux/filter/selectors";
import CatalogItem from "../CatalogItem/CatalogItem";
import { Loader } from "../Loader/Loader";
import { useEffect, useState } from "react";

const FavoriteList = () => {
  const [list, setList] = useState([]);
  const items = useSelector(getCars);
  const idList = useSelector(getfavoriteCar);

  useEffect(() => {
    setList(idList);
  }, [idList]);

  const favoriteCarsList = items?.filter((element) =>
    list.includes(element.id)
  );

  if (!items && !list) {
    return <Loader />;
  }
  return (
    <div className={styles.catalog_container}>
      <div className={styles.catalog_table}>
        {favoriteCarsList?.map((item) => (
          <CatalogItem isFavorite={true} item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FavoriteList;

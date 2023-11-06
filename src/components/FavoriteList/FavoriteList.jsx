import { useSelector } from "react-redux";
import styles from "./favoriteList.module.scss";
import { getCars } from "@/redux/cars/selectors";
import { getfavoriteCar } from "@/redux/filter/selectors";
import CatalogItem from "../CatalogItem/CatalogItem";
import { Loader } from "../Loader/Loader";

const FavoriteList = () => {
  const items = useSelector(getCars);
  const idList = useSelector(getfavoriteCar);
  console.log(idList);

  const favoriteCarsList = items?.filter((element) =>
    idList.includes(element.id)
  );

  if (!items) {
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

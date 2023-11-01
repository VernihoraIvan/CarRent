import { NavLink } from "react-router-dom";

import styles from "../SharedLayout/SharedLayout.module.scss";

const SharedLayout = () => {
  return (
    <header>
      <NavLink to="/" className={styles.logo}>
        <span className={styles.logo1}>car</span>rent
      </NavLink>
      <NavLink className={styles.nav_title} to="catalog">
        Catalog
      </NavLink>
      <NavLink className={styles.nav_title} to="favorites">
        Favorites
      </NavLink>
    </header>
  );
};

export default SharedLayout;

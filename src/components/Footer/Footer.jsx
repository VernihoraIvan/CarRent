import styles from "./Footer.module.scss";
import svg from "@/assets/images/icon.svg";

const Footer = () => {
  return (
    <footer className={styles.bottom}>
      <div className={`${styles.container} ${styles.bottom_container}`}>
        <div className={styles.bottom_top_side}>
          <div className={styles.logo_block}>
            <a className={styles.second_logo} href="./index.html">
              <span className={styles.blue_logo}>car</span>rent
            </a>
            <p className={styles.summury}>
              Increase the flow of customers and sales for your business with
              digital marketing & growth solutions.
            </p>
          </div>
          <div className={styles.social_media}>
            <h2 className={styles.social_media_title}>Social media</h2>
            <ul className={styles.social_media_list}>
              <li className={styles.social_media_list_item}>
                <a
                  href="https://www.instagram.com/"
                  className={styles.social_media_link}
                >
                  <svg
                    className={styles.social_media_item}
                    width="40px"
                    height="40px"
                  >
                    <use
                      className={styles.use_social_media}
                      href={`${svg}#icon-instagram`}
                    ></use>
                  </svg>
                </a>
              </li>
              <li className={styles.social_media_list_item}>
                <a
                  href="https://www.facebook.com/"
                  className={styles.social_media_link}
                >
                  <svg
                    className={styles.social_media_item}
                    width="40px"
                    height="40px"
                  >
                    <use
                      className={styles.use_social_media}
                      href={`${svg}#icon-facebook`}
                    ></use>
                  </svg>
                </a>
              </li>
              <li className={styles.social_media_list_item}>
                <a
                  href="https://www.twitter.com/"
                  className={styles.social_media_link}
                >
                  <svg
                    className={styles.social_media_item}
                    width="40px"
                    height="40px"
                  >
                    <use
                      className={styles.use_social_media}
                      href={`${svg}#icon-twitter`}
                    ></use>
                  </svg>
                </a>
              </li>
              <li className={styles.social_media_list_item}>
                <a
                  href="https://www.linkedin.com/"
                  className={styles.social_media_link}
                >
                  <svg
                    className={styles.social_media_item}
                    width="40px"
                    height="40px"
                  >
                    <use
                      className={styles.use_social_media}
                      href={`${svg}#icon-linkedin`}
                    ></use>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <form className={styles.subscribe_form}>
          <div className={styles.container_input}>
            <label htmlFor="subscribe" className={styles.subscribe}>
              Subscribe
            </label>
            <input
              className={styles.subscribe_input}
              name="subscribe"
              type="email"
              id="subscribe"
              placeholder="E-mail"
            />
          </div>
          <button className={styles.subscribe_button} type="submit">
            Subscribe
            <svg className={styles.svg_send} width="24px" height="20px">
              <use
                className={styles.use_send}
                href="./images/icon.svg#icon-send"
              ></use>
            </svg>
          </button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;

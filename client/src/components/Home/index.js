import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Home = () => (
  <div className={cx("container")}>
    <div className={cx("header")}>
      <img alt="google.png" src={require("images/google.png")} />
    </div>
    <div className={cx("searchBar")}>
      <input />
    </div>
    <div className={cx("bottom")}>
      <div>Google 검색</div>
      <div>I'm Feeling Lucky</div>
    </div>
  </div>
);

export default Home;

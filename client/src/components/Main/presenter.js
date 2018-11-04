import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import PublicNavigationBarContainer from "components/PublicNavigationBar/presenter";
import HomeContainer from "../Home/HomeContainer";

const cx = classNames.bind(styles);

const Main = () => (
  <div className={cx("container")}>
    <PublicNavigationBarContainer />
    <HomeContainer />
  </div>
);

export default Main;

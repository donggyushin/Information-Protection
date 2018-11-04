import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import { FaTh } from "react-icons/fa";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const PublicNavigationBar = () => (
  <div className={cx("container")}>
    <div className={cx("item")}>Gmail</div>
    <div className={cx("item")}>이미지</div>
    <div className={cx("item", "icon")}>
      <FaTh />
    </div>
    <Link to="/login" className={cx("item", "button")}>
      로그인
    </Link>
  </div>
);

export default PublicNavigationBar;

import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Counter = () => <div className={cx("container")}>counter</div>;

export default Counter;

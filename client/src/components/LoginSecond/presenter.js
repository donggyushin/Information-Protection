import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const LoginSecond = ({ username }) => (
  <div className={cx("container")}>
    <div className={cx("loginForm")}>
      <img alt="google.png" src={require("images/google.png")} />
      <span className={cx("username")}>한재섭</span>
      <div className={cx("userId")}>
        <div className={cx("circle")}>재섭</div>
        <span className={cx("userEmail")}>
          {username ? username : "email address"}
        </span>
      </div>
      <input className={cx("passwordInput")} placeholder="비밀번호 입력" />
      <div className={cx("bottom")}>
        <span className={cx("blueTxt")}>비밀번호를 잊으셨나요?</span>
        <button className={cx("button")}>다음</button>
      </div>
    </div>
  </div>
);

export default LoginSecond;

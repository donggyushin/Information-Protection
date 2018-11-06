import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Login = ({
  loading,
  username,
  handleInputChange,
  clickNextButton,
  EnterKeyPressedDown
}) => (
  <div className={cx("container")}>
    <div className={cx("loginForm")}>
      <img src={require("images/google.png")} alt="google.png" />
      <span className={cx("loginTitle")}>로그인</span>
      <span className={cx("normalText")}>Google 계정 사용</span>
      <form className={cx("input")}>
        <span>이메일 또는 휴대전화</span>
        <input
          type="text"
          onChange={handleInputChange}
          placeholder="이메일 또는 휴대전화"
          value={username}
          onKeyPress={EnterKeyPressedDown}
        />
      </form>
      <span className={cx("blueText", "forgot")}>이메일을 잊으셨나요?</span>
      <div className={cx("infoText")}>
        <p>
          내 컴퓨터가 아닌가요? 게스트 모드를 사용하여 비공개로 로그인하세요.
          <span className={cx("blueText")}>자세히 알아보기</span>
        </p>
      </div>
      <div className={cx("bottom")}>
        <span className={cx("blueText")}>계정 만들기</span>
        <button className={cx("button")} onClick={clickNextButton}>
          다음
        </button>
      </div>
    </div>
    {loading ? <div className={cx("loading")}>로딩중..</div> : ""}
  </div>
);

export default Login;

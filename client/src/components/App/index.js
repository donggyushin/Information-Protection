import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeContainer from "../Home/HomeContainer";

const cx = classNames.bind(styles);

const App = ({ isLoggedIn }) => (
  <Router>
    <div className={cx("container")}>
      {/* <Route path="/" component={HomeContainer} /> */}
      {isLoggedIn ? PrivateComponent() : PublicComponent()}
    </div>
  </Router>
);

const PrivateComponent = () => <div>priavteComponent</div>;

const PublicComponent = () => <div>public Component</div>;

export default App;

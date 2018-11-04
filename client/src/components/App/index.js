import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "../Main/presenter";
import LoginContainer from "components/Login/container";

const cx = classNames.bind(styles);

const App = ({ isLoggedIn }) => (
  <Router>
    <div className={cx("container")}>
      {/* <Route path="/" component={HomeContainer} /> */}
      {isLoggedIn ? PrivateComponent() : PublicComponent()}
    </div>
  </Router>
);

const PrivateComponent = () => (
  <div className={cx("PrivateContainer")}>priavteComponent</div>
);

const PublicComponent = () => (
  <div className={cx("PublicContainer")}>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/login" component={LoginContainer} />
      <Route component={Main} />
    </Switch>
  </div>
);

export default App;

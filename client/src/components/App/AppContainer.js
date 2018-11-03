import React, { Component } from "react";
import App from "./index";
import { connect } from "react-redux";

class AppContainer extends Component {
  render() {
    const { isLoggedIn } = this.props;
    return <App isLoggedIn={isLoggedIn} />;
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.user.isLoggedIn
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);

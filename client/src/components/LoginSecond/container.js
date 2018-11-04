import React, { Component } from "react";
import LoginSecond from "./presenter";
import { connect } from "react-redux";

class LoginSecondContainer extends Component {
  render() {
    return <LoginSecond />;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginSecondContainer);

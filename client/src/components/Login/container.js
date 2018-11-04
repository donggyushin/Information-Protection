import React, { Component } from "react";
import Login from "./presenter";
import { connect } from "react-redux";

class LoginContainer extends Component {
  render() {
    return <Login />;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);

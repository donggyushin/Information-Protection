import React, { Component } from "react";
import Home from "./index";
import { connect } from "react-redux";

class HomeContainer extends Component {
  render() {
    return <Home />;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);

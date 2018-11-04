import React, { Component } from "react";
import { connect } from "react-redux";
import PublicNavigationBar from "./presenter";

class PublicNavigationBarContainer extends Component {
  render() {
    return <PublicNavigationBar />;
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PublicNavigationBarContainer);

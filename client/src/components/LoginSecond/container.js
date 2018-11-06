import React, { Component } from "react";
import LoginSecond from "./presenter";
import { connect } from "react-redux";

class LoginSecondContainer extends Component {
  render() {
    const { username } = this.props;
    return <LoginSecond username={username} />;
  }
}

const mapStateToProps = state => ({
  username: state.user.username
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginSecondContainer);

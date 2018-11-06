import React, { Component } from "react";
import Login from "./presenter";
import { connect } from "react-redux";
import * as userAction from "store/modules/user";

class LoginContainer extends Component {
  state = {
    loading: false,
    username: ""
  };

  _handleInputChange = event => {
    this.setState({
      ...this.state,
      username: event.target.value
    });
  };

  _clickNextButton = () => {
    const { username } = this.state;
    const { set_username, history } = this.props;
    set_username(username);
    this.setState({
      loading: true,
      username: ""
    });
    setTimeout(() => {
      this.setState({
        ...this.state,
        loading: false
      });
      history.push("/login/password");
    }, 1500);
  };

  _EnterKeyPressedDown = event => {
    const { username } = this.state;
    const { set_username, history } = this.props;
    console.log("0");
    if (event.key === "Enter") {
      console.log("1");
      set_username(username);
      console.log("1");
      this.setState({
        loading: true,
        username: ""
      });
      console.log("2");
      setTimeout(() => {
        console.log("3");
        this.setState({
          ...this.state,
          loading: false
        });
        history.push("/login/password");
      }, 3000);
    }
  };

  render() {
    const { loading, username } = this.state;
    const { _handleInputChange, _clickNextButton, _EnterKeyPressedDown } = this;
    return (
      <Login
        loading={loading}
        handleInputChange={_handleInputChange}
        username={username}
        clickNextButton={_clickNextButton}
        EnterKeyPressedDown={_EnterKeyPressedDown}
      />
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  set_username: username => dispatch(userAction.setUsername(username))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);

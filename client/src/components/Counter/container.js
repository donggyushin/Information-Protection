import React, { Component } from "react";
import Counter from "./index";
import { connect } from "react-redux";
import * as counterActions from "store/modules/counter";

class CounterContainer extends Component {
  render() {
    return <Counter />;
  }
}

const mapStateToProps = state => ({
  number: state.counter.number
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(counterActions.increment())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterContainer);

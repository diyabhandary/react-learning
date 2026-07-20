import React, { Component } from "react";

class LifecycleB extends Component {
  //! 1. Mounting Phase

  constructor(props) {
    super(props);

    console.log("LifecycleB constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleB getDerivedStateFromProps");

    return null;
  }

  componentDidMount() {
    console.log("LifecycleB componentDidMount");
  }

  //! 2. Updating Phase

  shouldComponentUpdate() {
    console.log("LifecycleB shouldComponentUpdate");

    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifecycleB getSnapshotBeforeUpdate");

    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("LifecycleB componentDidUpdate");
  }

  //! 3. Unmounting Phase

  componentWillUnmount() {
    //! This method executes just before a component is removed from the DOM.
    console.log("LifecycleB componentWillUnmount");
  }

  render() {
    console.log("LifecycleB render");

    return <h2>LifecycleB</h2>;
  }
}

export default LifecycleB;
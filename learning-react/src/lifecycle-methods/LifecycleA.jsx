import React, { Component } from "react";
import LifecycleB from "./LifecycleB";

class LifecycleA extends Component {
  //! 1. Mounting Phase

  constructor(props) {
    super(props);

    this.state = {
      subject: "ReactJS",
      show: true,
    };

    //! This method is the best place to initialize the state and bind 'this' keyword.
    //! Here you cannot code for side-effects.
    console.log("LifecycleA constructor");
  }

  static getDerivedStateFromProps(props, state) {
    //! Rarely used method.
    //! Used to get derived state based on the value of props.
    //! Returns an object or null.
    //! Here you cannot code for side-effects.
    console.log("LifecycleA getDerivedStateFromProps");

    return null;
  }

  componentDidMount() {
    //! This method gets invoked immediately after render method executes and only ONCE.
    //! Here you can code for side-effects.
    console.log("LifecycleA componentDidMount");
  }

  //! 2. Updating Phase

  shouldComponentUpdate() {
    //! Decides whether the component should update (re-render) or not.
    //! Returns a boolean value.
    //! Here you cannot code for side-effects.
    console.log("LifecycleA shouldComponentUpdate");

    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    //! Helps to get the value that was present before making an update.
    //! Rarely used method.
    //! Returns a value or null.
    //! Here you cannot code for side-effects.
    console.log("LifecycleA getSnapshotBeforeUpdate");

    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    //! This method gets invoked after every re-rendering of the component.
    //! Here you can code for side-effects.
    console.log("LifecycleA componentDidUpdate");
  }

  render() {
    //! This method is the only lifecycle method that must be used.
    //! Here you cannot code for side-effects.
    console.log("LifecycleA render");

    return (
      <>
        <h2>LifecycleA</h2>

        <h3>Subject: {this.state.subject}</h3>

        <button
          onClick={() =>
            this.setState({
              subject: "Node.js",
            })
          }
        >
          Change Subject
        </button>

        <br />
        <br />

        <button
          onClick={() =>
            this.setState({
              show: false,
            })
          }
        >
          Remove LifecycleB
        </button>

        <hr />

        {this.state.show && <LifecycleB />}
      </>
    );
  }
}

export default LifecycleA;
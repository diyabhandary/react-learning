import React, { Component } from 'react'

class LifecycleA extends Component {
  //!1. Mounting phase
  constructor(props){
    super(props)
    this.state={
      subject: "Reactjs"
    }
    //!This method is the best place to initialize the state and bind 'this' keyword.
    //Here you cannot code for side-effects.
    console.log("LifecycleA constructor");
  }

  static getDerivedStateFromProps(){
    //Rarely used method.
    //used to get derived state based on the value of props.
    //Returns an object or null.
    //Here you cannot code for side-effects.
    console.log("LifecycleA getDerivedStateFromProps");
    return null
  }

  componentDidMount(){
    //! This method gets invoked imediately after render method executes and only for ONCE.
    //! Here you can code for side-effects.
    console.log("LifecycleA componentDidMount");
  }
  render() {
    //! This method is the only method that should be mandatorly used.
    // here you cannot code for side-effects.
    console.log("LifecycleA render");
    return (
      <div>LifecycleA</div>
    )
  }
}
export default LifecycleA

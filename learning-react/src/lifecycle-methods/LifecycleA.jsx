import React, { Component } from 'react'
import LifecycleB from './LifecycleB';
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


    //!2. Updating Phase

    this.shouldComponentUpdate(){
      //Decides whether the component should update (re-render) or not.
      //Returns a boolean value.
      //Here you cannot code for side effects.
      console.log("LifecycleA shouldComponentUpdate");
      return true
    }

    getSnapshotBeforeUpdate(){
      //Helps to get value that was present before making an update.
      //Rarely used method.
      //returns a value or null.
      //here you cannot code for side-effects.
      console.log("LifecycleA getSnapshotBeforeUpdate");
      return null
    }

    componentDidUpdate(){
      //! This method gets invoked after every re-rendering of component
      //! Here you can code for side-effects.
      console.log("LifecycleA componentDidUpdate");
    }
  
  render() {
    //! This method is the only method that should be mandatorly used.
    // here you cannot code for side-effects.
    console.log("LifecycleA render");
    return (
      <>
      <h2>LifecucleA</h2>
      <h3>Subject: {this.state.subject}</h3>
      <button onClick={()=>this.setState({subject : "node.js"})}>Change subject</button>
      </>
    )
  }
}
export default LifecycleA

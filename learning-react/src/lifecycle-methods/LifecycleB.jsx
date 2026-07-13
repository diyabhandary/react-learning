import React, { Component } from 'react'

class LifecycleB extends Component {

  //!3. Unmounting Phase
  componentWillUnmount(){
    //This method executes just before a component is removed from the DOM.
    console.log("LifecycleB componentWillOnmount");
  }
  render() {
    return (
      <div>LifecycleB</div>
    )
  }
}
export default LifecycleB
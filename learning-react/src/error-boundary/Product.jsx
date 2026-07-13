import React, { Component } from 'react'
class ErrorBoundary extends Component{
  constructor(props){
    super(props)
    this.state={
      isError : false //no error
    }
  }

//! Error Handling Phase
static getDerivedStateFromError(error){
  //Helps to display a fallback UI.
  return {isError :true} //error occured

}

componentDidCatch(error,info){
  //Displays the info of error
  console.log(error,info);
}
  render() {
    if(this.state.isError === true){
      return<h2>Something went wrong...Try again after sometime...</h2>
    }else{
      return this.props.children
    }
  }
}
export default ErrorBoundary

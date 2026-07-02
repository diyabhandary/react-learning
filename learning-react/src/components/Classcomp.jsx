//!2. CLASS BASED COMPONENT

import React from "react";

// class Classcomp extends React.Component {

//   render(){
//     return(
//       <div>
//         <h2>Class Based Component</h2>
//         <p>Lorem IPsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
//       </div>
//     )
//   }
// }
// export default Classcomp

import { Component } from "react";
class Classcomp extends Component {
  render(){
    return (
      <div>
        <h2>Class Based Component</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis itaque repellat iste laboriosam, perferendis aut magnam amet mollitia, maiores non harum inventore quo ex nemo. Iste consectetur ab eius quas.</p>
      </div>
    )
  }
}

export default Classcomp
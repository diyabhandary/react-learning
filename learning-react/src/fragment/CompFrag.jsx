//? 1)
// const CompFrag = () =>{
//   return (
//     <div>
//       <h2>Fragment</h2>
//       <h3></h3>
//     </div>
//   )
// }
// export default CompFrag


//the above takes the more space


//? 2)
import React from "react"

const CompFrag = () =>{

  return (
    <React.Fragment>
      <h2>Fragment</h2>
      <h3></h3>
    </React.Fragment>
  )
}
export default CompFrag


//? 3)
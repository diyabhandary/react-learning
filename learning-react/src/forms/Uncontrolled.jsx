import {useRef} from 'react'

const Uncontrolled = () =>{

let emailRef = useRef()
console.log(emailRef.Ref) //{current : undefined}

let passRef =  useRef()

//Synthetic event(e)

let submit = (e)=>{
  e.preventDefault()
  console.log(emailRef.current.value);
  console.log(passRef.current.value);
}

return(
  <>
  <h2>Uncontrolled Form</h2>
  <form>
    <input type="email" placeholder='Enter email' ref={emailRef}/> <br/>
    <input type="password" placeholder='Enter password' ref={passRef}/> <br/>
    <button onClick={submit}>Submit</button>
  </form>
  </>

)
}
export default Refcomp

// let h2Ref = {
//   current : {
//     style : {
//       color:"Red"
//     }
//   }
// }
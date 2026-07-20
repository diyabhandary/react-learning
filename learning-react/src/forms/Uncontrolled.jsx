import {useRef} from 'react'

const Uncontrolled = () => { 

    let emailRef = useRef()
    console.log(emailRef); //{current : undefined}
    
    let passRef = useRef() 

    //Synthetic event(e)

    let submit = (e)=>{
         e.preventDefault()  
         let a = emailRef.current.value
         let b = passRef.current.value
         console.log({email : a , password : b}); 
    }

  return (
    <>
        <h2>Uncontrolled Form</h2>
        <form>
            <input type="email" placeholder='Enter email' ref={emailRef}/> <br />
            <input type="password" placeholder='Enter password' ref={passRef}/> <br />
            <button onClick={submit}>Submit</button>
        </form>
    </>
  )
}

export default Uncontrolled


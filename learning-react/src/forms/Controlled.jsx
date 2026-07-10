import React, { useState } from 'react'
const Controlled = () => {

  //! 1. Initialize the state

  let [email, setEmail] = useState("")

  let [password, setPassword] = useState("")

  //3. State Updation (onchange)
  let emailChange = (e)=>{
    console.log(e.target); // i/p field in which user types
    setEmail(e.target.value)

  }

  let passChange = (e)=>{
    console.log(e.target);
    setPassword(e.target.value)
  }

  //!4. Submit
  let handleSubmit = (e) =>{
    e.preventDefault()
    console.log(email,password);
    setEmail("") //makes i/p blank
    setPassword("")
  }

  return (
    //2. Pass  The value attribute in i/p fields.
    <>
    <h2>Controlled Form</h2>
    <form onSubmit={handleSubmit}>
      <input type="email"
      placeholder='enter email'
      value={email}
      onChange={emailChange}/><br/>

      <input type="password"
      placeholder='enter password'
      value={password}
      onChange={passChange}/> <br/>
      <button>Submit</button>
    </form>
    </>
  )
}

export default Controlled
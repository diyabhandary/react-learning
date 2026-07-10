import React, {useState} from 'react'

const  Details=() =>{
  //1. Initialize the state

  let [state, setState] = useState({
    let [state,setState]=useState({
      fname : "",
      lname : ""

    })
    let {fname,lname}=state //destructuring

    //3. State Updation (onChange)
    let handleChange = (e)=>{
      console.log(e.target);
      let {name,value}= e.target //destructuring
      setState({...state,[name]:value}) //{fname:"Rohit"},{lname:"Sharma"}
    }

    //!4. Submit
    let handleSubmit = (e) =>{
      e.preventDefault()
      console.log(state);
      setState({fname : "",lname: ""})
    }
  return (
    //!2. Pass the name & value attribute in i/p fields
    <>
    <h2>Details Form</h2>
    <form>
      <label>Firstname</label>
      <input type="text" name ='fname' value={fname}/><br/>
      <label>Lastname</label>
      <input type="text" name='lname' value={lname}/><br/>
      <button>Submit</button>
    </form>
    </>
  )
}

export default Details

let e = {
  target:{
    name :"fname",
    value:"Rohit"
  }
}
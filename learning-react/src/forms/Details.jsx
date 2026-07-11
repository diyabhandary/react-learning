import React, {useState} from 'react'

const  Details=() =>{
  //1. Initialize the state

  let [state, setState] = useState({
      fname : "",
      lname : "",
      gender : "",
      course : ""

    })
    let {fname,lname,gender,course}=state //destructuring

    //3. State Updation (onChange)
    let handleChange = (e)=>{
      console.log(e.target);
      let {name,value}= e.target //destructuring
      setState({...state,[name]:value}) //{fname:"Rohit"},{lname:"Sharma"}
      //!...state (spread operator) => spread the key:value
      //....state=> {fname:"Rohit", lname:"Sharma"}
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

      <div>
        <label>Gender</label>
        <input type="radio"
        name='gender'
        value='male'
        onChange={handleChange}
        checked = {gender == "male"}/>Male

              
        <input type="radio"
        name='gender'
        value='female'
        onChange={handleChange}
        checked = {gender == "female"}/>Female
      </div>
      <label>Course</label>
      <select name='course' value={course}
      onChange={handleChange}>
        <option value="">Select</option>
        <option value="mernstack">Mernstack</option>
        <option value="javafullstack">Javafullstack</option>
        <option value="texting">Texting</option>
      </select> <br/>
      <button>Submit</button>  
    </form>
    </>
  )
}

export default Details

// let e = {
//   target:{
//     name :"fname",
//     value:"Rohit"
//   }
// }
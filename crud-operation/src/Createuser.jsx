import { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Createuser = () => {

  let [state, setState] = useState({
    fname : "",
    email : ""
  })

  let{fname , email} = state

  let handleChange=(e)=>{
    let {name, value}= e.target
    setState({...state,[name]:value})
  }

  let navigator = useNavigate()

let handleSubmit = async (e) => {
  e.preventDefault();

  let payload = state;

  try {
    await axios.post("http://localhost:4000/employees", payload);
    navigate("/users");
    toast.success("Data Submitted Successfully!");
  } catch (err) {
    console.log(err);
  }
};
  return (
    <>
    <h2>Createuser</h2>
    <form>
      <div>
        <label>Firstname</label>
        <input type="text" name='fname' value={fname} onChange={handleChange}/>
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" value={email} onChange={handleChange}/>
        </div>
        <button>Createuser</button>
    </form>
    </>
  )
}
export default Createuser
import { useEffect, useState } from "react";
import axios from 'axios'
import {MdOutlineModeEdit} from 'react-icons/md';
import {MdOutlineDelete} from 'react-icons/md';

//npm i axios
//npm i react-icons
const Users = () => {

  let [state, setState] = useState([]);

  async function getData(){
    let response = await axios.get("http://localhost:4000/employees");
    console.log(response); //{data : [{..},{..}]}
    console.log(response.data); //[{...},{...}]
    setState(response.data)
    }

    useEffect(()=>{
     getData()
    },[])


  return (
    <>
    <h2>Users</h2>
    <table>
      <thead>
        <tr>
          <th>Firstname</th>
          <th>Email</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {
          state.map((value,index)=>{
            return (
              <tr key={value.id}>
                <td>{value.fname}</td>
                <td>{value.email}</td>
                <td><MdOutlineModeEdit /></td>
                <td><MdOutlineDelete /></td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
    </>
  )
}

export default Users
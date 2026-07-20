import React, { useState } from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";

const  TodoList = () => {
  let [task, setTask] = useState("")
  let[list ,setList] = useState([])
  let handleChange = (e)=>{
    setTask(e.target.value)
  }
  let handleSubmit = (e)=>{
    e.preventDefault()
    if(task == ""){
      alert("Please enter some task!")
    }else{
      setList([...list , task])
      setTask("")
    }
  }
  let handleDelete = (x)=>{ //x=>index of tak to be deleted, x=2
    let filteredarray = list.filter((value,index)=>index !=x) //0!=2,1!=2,2!=2
    console.log(filteredarray); //["task1","task2"]
    setList(filteredarray)
  }
    return (
      <>
      <h2>TodoList</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" 
        placeholder='Enter task' 
        value={task}
        onChange={handleChange}/>
        <button>+</button>
      </form>
      {
        list.map((value,index)=>{
          return(
            <div key={index}>
              <h3>{value}</h3>
              <span onClick={()=>handleDelete(index)}><MdOutlineDeleteOutline /></span>
            </div>
          )
        })
      }
      </>
    )
  }
export default TodoList

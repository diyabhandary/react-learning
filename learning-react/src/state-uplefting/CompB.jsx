import React from 'react'

const CompB = (props)=>{
  let {items,setItems}=props
    return (
      <div>
        <h2>CompA</h2>
        <h3>Items : {items}</h3>
        <button onClick={()=>setItems(items+1)}>I</button>
      </div>
    )
  }
export default CompB
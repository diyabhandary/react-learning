import React from 'react'
import { createPortal } from 'react-dom';

const Modal = (props)=>{
  console.log(props); //{open:false , close:true}

  let {open, closeModal} = props

  if(open == false){
    return null
  }

  return (
    <>
        <h2>Hello , I'm from modal</h2>
        <button onClick={closeModal}>Close modal</button>
    </> , document.getElementById("portal")
  )
}

export default Modal
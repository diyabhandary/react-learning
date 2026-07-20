import {useState} from 'react'
import Modal from "./Modal"

const Portal = () =>{
  let [open , setOpen]= useState(false)

  let openModal = () => setOpen(true)

  let closeModal = () => setOpen(false)

  return(
    <>
    <button onClick={openModal}>Open modal</button>
    <Modal open={open} closeModal={closeModal}/>
    </>
  )
}
export default Portal

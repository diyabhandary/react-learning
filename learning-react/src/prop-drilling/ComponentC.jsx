import React from 'react'

const ComponentC = (props) => {
    console.log(props); //{data: 'Guitar'}
    let {data} = props
    
  return (
    <>
        <h2>ComponentC has recieved the {data}.</h2>
    </>
  )
}

export default ComponentC
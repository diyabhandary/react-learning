import React from 'react'
import ComponentB from './ComponentB'

const ComponentA = () => {
  let data = "Guitar"
  return (
    <>
    <h2>ComponentA is sending data to ComponentB</h2>
    <ComponentB data={data}/>
    </>
  )
}

export default ComponentA
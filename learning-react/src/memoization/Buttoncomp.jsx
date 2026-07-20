import React from "react"

const Buttoncomp = (props) =>{

  let {children, incrfunc} = props

  console.log(`Rendering Buttoncomp for ${children}`);

  return(
    <>
    <button onClick={incrfunc}>{children}</button>
    </>
  )
}

export default React.memo(Buttoncomp)
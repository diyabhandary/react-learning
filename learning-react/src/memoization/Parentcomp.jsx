import { useCallback, useState } from "react"
import Title from "./Title"
import Count from "./Count"
import Buttoncomp from "./Buttoncomp"

const Parentcomp = () =>{
  let [marks,setMarks] = useState(75)
  let [percent, setPercent] useState(80)

  //!useCallback() is used to memoize the callback function.
  // useCallback(callbackfunc,array of dependency)

  // let incrMarks = () => setMarks(marks + 1)

  let incrMarks = useCallback(()=> {
    setMarks(marks + 1)
  },[marks])

  // let incrPercent = ()=>setPercent(percent + 1)
  let incrPercent = useCallback(()=> {
    setPercent(percent + 1)
  },[percent]) 

  return(
    <>
    <Title/>
    <Count count={marks} text="Marks"/>
    <Buttoncomp incrfunc={incrMarks}>Increase marks</Buttoncomp>
    <Count count={percent} text="Percent"/>
    <Buttoncomp incrfunc={incrPercent}>Increase percent</Buttoncomp>
    </>
  )
}

export default Parentcomp
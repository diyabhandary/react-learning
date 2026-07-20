import {useState , useMemo} from 'react'
const Memocomp = () => {
   let [count , setCount] = useState(0)
   let [number , setNumber] = useState(0)

   let incrvCount = () => setCount(count+1)

   let incrNum = ()=>setNumber(number+1)

   //! useMemo() is used to memoize the value returned by function.

//    let isEven = ()=>{
//     let i=0
//     while(i<2000000000){
//       i++
//     }
//    return count % 2 == 0 //boolean
// }

let isEven = useMemo(()=>{
  let i=0
  while(i<2000000000){
    i++
  }
  return count%2==0 //returned value is memoized
},[count])

return(
  <>
  <button onClick={incrvCount}>Count - {count}</button>
  {isEven() ? "Even": "Odd"} <br/>
  <button onClick={incrNum}>Number - {number}</button>
  </>
)


export default Memocomp
import CompA from "./CompA"
import CompB from "./CompB"
import {useState} from 'react'

const Parentuplift = () => {
   
  let [items, setItems] = useState(0)

  return(
    <>
    <CompA items={items} setItems={setItems}/>
    <CompB items={items} setItems={setItems}/>
    </>
  )
}

export default Parentuplift
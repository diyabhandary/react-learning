//! Higher Order Component
import {useState} from 'react'


const Hoc = (Wrappedcomponent)=>{

  return function Comp(){
    //reusable logics
    let [price,setPrice] = useState(20)
    let incrPrice = () => setPrice(price +20)
    return<Wrappedcomponent price={price} incrPrice={incrPrice}/> //<Team1/>
  }
}
export default Hoc
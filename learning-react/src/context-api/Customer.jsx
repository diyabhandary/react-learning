import {useContext} from 'react'
import { Newcontext } from './Context1';

const Customer = () => { 

    let data = useContext(Newcontext)

    console.log(data); //I have come from context
    

  return (
    <div>Customer - {data}</div>
  )
}

export default Customer
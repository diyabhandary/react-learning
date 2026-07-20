//1. Create a context 
//2. Wrap the consumer component within the Provider.
//3. Send the data using 'value' prop . 

import { createContext } from "react"
import Customer from "./Customer"

export let Newcontext = createContext()

const Context1 = () => {

  return (
    <Newcontext.Provider value="I have come from context">
        <Customer/>
    </Newcontext.Provider>
  )

}

export default Context1
import { createContext } from "react"


export let ContextApi = createContext()

const Context2 = (props) => {

      let company = "Godrej"
      let employees = 250

  return (
    <ContextApi.Provider value={{company , employees}}>
           {props.children}  
    </ContextApi.Provider>
  )
}

export default Context2
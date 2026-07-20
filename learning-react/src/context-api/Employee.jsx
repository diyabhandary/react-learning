import {useContext} from 'react'
import { ContextApi } from './Context2'

const Employee = () => {

    let data = useContext(ContextApi)

    console.log(data); //{company: "Godrej", employees: 250}

    let {company, employees} = data 
    

  return (
    <>
        <h2>Employee</h2>
        <h3>Company Name : {company}</h3>
        <h3>No of employees : {employees}</h3>
    </> 
  )
}

export default Employee
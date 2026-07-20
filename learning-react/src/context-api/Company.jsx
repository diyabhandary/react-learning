
import {useContext} from 'react'
import { ContextApi } from './Context2'

const Company = () => {

    let data = useContext(ContextApi)

    let {company, employees} = data 
  return (
    <>
        <h2>Company</h2>
        <h3>Company Name : {company}</h3>
        <h3>No of employees : {employees}</h3>
    </>
  )
}

export default Company
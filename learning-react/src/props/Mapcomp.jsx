import { Fragment } from "react";
const Mapcomp = (props)=>{

    console.log(props); //{city: Array(5)} 
    let {city} = props //destructuring of props obj
    console.log(city); //['Bhopal', 'Pune', 'Chandigarh', 'Kolkata', 'Chennai']
 
    //! key prop is used to give a unique identity for every element.
    
    return (
        <>
        <h2>Let's study map method.</h2>
         <ul>
            {
                city.map((value,index)=>{
                    console.log(value , index);
                    return (
                        <Fragment key={index}>
                            <li>{value}</li>
                        </Fragment>
                    )
                })
            }
         </ul>
        </>
    )
}
export default Mapcomp
import Comp1 from "./Comp1"
import Comp2 from "./Comp2"
import Comp3 from './Comp3'
import Comp4 from "./Comp4"

const Newcomp = () =>{

  let colors = ["Red","Blue","Pink","Black","Purple"]

  let employee = {
    ename : "Rajat",
    erole : "Frontend Developer",
    ebranch : "Mumbai"
  }

  return(
    <>
    <h2>Newcomp</h2>
    <Comp1 student="Roshni" rollno={15} member={true}
    task={null} project={undefined}/>
    <Comp2 colors={colors}/>
    <Comp3 employee={employee}/>
    <Comp4 productname="Laptop" productprice="50000" productcategory="Electronics"/>
    </>
  )
}
export default Newcomp
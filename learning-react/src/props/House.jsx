const House = (props) => {

  console.log(props); //{house:'Red', captain:'Sarika', students:140}

  //!1st way to give default values for props
  let {house = "Yellow", captain ="To be decided", students="To be calculated"} = props

  return (
    //!2nd way
    <>
    <h2>House Details</h2>
    <h3>House: {house|| "Yellow"}</h3>
    <h3>Captain: {captain|| "To be appointed"}</h3>
    <h3>No of students: {students || "To be calculated"}</h3>
    </>
  )
}
export default House
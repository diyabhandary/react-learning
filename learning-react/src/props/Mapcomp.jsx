const Mapcomp = (props) =>{

  console.log(props); //{city:Array(5)}
  let {city} = props //destructuring of props obj

  console.log(city);//['Bhopal', 'Pune', 'Chandigarh', 'Kolkata', 'Chennai']


  return(
    <>
    <h2>Let's study map method.</h2>
    <ul>
      {
        city.map((value,index)=>{
          console.log(value,index);
          return(
            <li>{value}</li>
          )
        })
      }
    </ul>
    </>
  )
}
export default Mapcomp
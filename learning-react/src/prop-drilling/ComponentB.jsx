import ComponentC from "./ComponentC"

const ComponentB = (props) => {
    console.log(props); //{data: 'Guitar'}

    let {data} = props 
    
  return (
    <>
        <h2>ComponentB is sending the data to ComponentC.</h2>
        <ComponentC data={data}/>
    </>
  )
}

export default ComponentB
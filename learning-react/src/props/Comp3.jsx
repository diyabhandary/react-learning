const Comp3 = (props)=>{

  console.log(props);//{employee:{..}}
  let {employee} = props //!destructuring of props obj

  console.log(employee);//{ename:'Rajat', erole:'Frontend Developer', ebranch:'Mumbai'}
  let {ename, erole, ebranch} = employee //!destructuring of employee obj

  return(
    <>
    <h2>Comp3</h2>
    <h3>{ename} is working as a {erole} in {ebranch}.</h3>
    </>
  )
}
export default Comp3
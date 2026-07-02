const Comp2 = (props)=>{

  console.log(props);//{colors:Array(5)}
  let {colors} = props //! destructuring of props obj

  console.log(colors);//['Red','Blue','pink','Black','Purple']
  let [c1,c2,c3,c4,c5] = colors //!destructuring of colors array
  return(
    <>
    <h2>Comp2-colors</h2>
    <ul>
      <li>{c1}</li>
      <li>{c2}</li>
      <li>{c3}</li>
      <li>{c4}</li>
      <li>{c5}</li>
    </ul>
    </>
  )
}
export default Comp2
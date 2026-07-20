import Hoc from "./Hoc"

const Team1 = (props) => {
  console.log(props); //{price: 20, incrPrice: ƒ}
  let {price, incrPrice} = props

  return (
    <>
        <h2>Team1</h2>
        <h3>Price : Rs. {price} lakh</h3>
        <button onClick={incrPrice}>Increase price</button>
    </>
  )
}

export default Hoc(Team1) 
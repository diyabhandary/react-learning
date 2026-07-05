function Comp4(props) {
  return (
    <div>
      <h2>Comp4</h2>
      <h2>Product Details</h2>

      <p>Product Name: {props.productname}</p>
      <p>Product Price: {props.productprice}</p>
      <p>Product Category: {props.productcategory}</p>
    </div>
  )
}

export default Comp4
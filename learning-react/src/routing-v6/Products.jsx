import { Link, Outlet } from "react-router-dom"

const Products = () => {
  return (
    <>
    <h2>Products</h2>
    <Link to='/products/ProductDetails'>Click here for details</Link>
    <Outlet/>
    </>
  )
} 

export default Products
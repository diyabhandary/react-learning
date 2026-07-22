import { NavLink , Outlet } from "react-router-dom"

const Layout = () => {
  return (
  <>
  <h2>HOME PAGE - ROUTING V6</h2>
  <ul>
    <li>
      <NavLink to='/blog' style={({isActive})=>{
        return {
          color : isActive ? "red" : "blue" ,
          textDecoration : isActive ? "none" : "underline"
        }
      }}>Blog</NavLink>
    </li>
        <li>
      <NavLink to='/products' style={({isActive})=>{
        return {
          color : isActive ? "red" : "blue" ,
          textDecoration : isActive ? "none" : "underline"
        }
      }}>products</NavLink>
    </li>
        <li>
      <NavLink to='/services' style={({isActive})=>{
        return {
          color : isActive ? "red" : "blue" ,
          textDecoration : isActive ? "none" : "underline"
        }
      }}>Services</NavLink>
    </li>
  </ul>
  <hr />
  <Outlet/>
  </>
  )
} 

export default Layout
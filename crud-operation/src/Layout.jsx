import { Link , Outlet} from "react-router-dom"

const Layout = () => {
  return (
   <>
   <h2>CRUD OPERATION</h2>
   <ul>
   <li>
   <Link to='/createuser'>Createuser</Link>
   </li>
   <li>
   <Link to='/users'>Users</Link>
   </li>
   </ul>
   <hr />
   <Outlet/>
   </>
  )
}

export default Layout
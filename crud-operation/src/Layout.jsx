import { Link , Outlet} from "react-router-dom"
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
   <>
   <Toaster/>
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
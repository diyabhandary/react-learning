import Createuser from './Createuser'
import Edituser from './Edituser'
import Layout from './Layout'
import Notfound from './Notfound'
import Users from './Users'
import { createBrowserRouter , RouterProvider} from 'react-router-dom'

//npm i react-router-dom
const App = () =>{

  let crudroutes = createBrowserRouter([
    {
      path : "/",
      element : <Layout/>,
      children : [
        {
          path:"/createuser",
          element : <Createuser/>
        },
        {
          path : "/edituser/:id",
          element : <Edituser/>
        },
        {
          path: "/users",
          element : <Users/>
        },
        {
          path : "*",
          element : <Notfound/>
        }
      ]
    },
  ])

  return (
    <RouterProvider router = {crudroutes}></RouterProvider>
  )

}
export default App;
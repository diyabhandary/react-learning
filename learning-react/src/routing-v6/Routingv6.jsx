import Layout from './Layout'
import Blog from './Blog'
import BlogNumber from './BlogNumber'
import Products from './Products'
import Services from './Services'
import ProductDetails from './ProductDetails'
import Notfound1 from './Notfound1'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const Routingv6 = () => {

  let allRoutes = createBrowserRouter([
    {
      path : "/",
      element : <Layout/> ,
      children : [
        {
          path : "/blog",
          element : <Blog/>,
          children: [
            {
              path:"/blog/:blognum",  //parameter or slug => /:paramName
              element: <BlogNumber/>
            }
          ]
        } ,
        {
          path : "/products",
          element : <Products/>
        },
        {
          path : "/services",
          element : <Services/>
        },
        {
          path : "*",
          element : <Notfound1/>
        }
      ]
    }
  ])


  return (
    <RouterProvider router={allRoutes}></RouterProvider>
  )
}

export default Routingv6
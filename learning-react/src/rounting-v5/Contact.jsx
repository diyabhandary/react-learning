import {Link, Outlet} from "react"

const Contact = () => {

  //!Outlet => It is used inside the
  //! to indicate where exactly the
  return (
    <>
      <h1>Contact Page</h1>
      <Link to='/contact/mobile'>Click</Link>
      <Outlet/>
    </>
  )
}

export default Contact
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Settings from './Settings'
import Notfound from './Notfound'

const Routingv5 = () => {

  //npm i react-router-dom

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact/mobile number" element={<Contact/>}/>
      <Route path="/settings" element={<Settings/>}/>
      <Route path="*" element={<Notfound/>}/>
      </Routes>

      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
        <li>
          <Link to='/settings'>Settings</Link>
        </li>
      </ul>
      </BrowserRouter>
  )
}
export default Routingv5
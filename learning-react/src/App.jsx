//!1. FUNCTIONAL BASED COMPONENT
import Firstcomp from "./components/Firstcomp"
import SecondComp from "./components/SecondComp"
import Classcomp from "./components/Classcomp"
import CompFrag from "./fragment/CompFrag"
import CondRendering from "./conditional-rendering/CondRendering"
import Newcomp from "./props/Newcomp"
import House from "./props/House"
import Mapcomp from "./props/Mapcomp"
import Team from "./props/Team"
import ComponentA from "./prop-drilling/ComponentA"
import Inline from "./css-react/Inline"
import Rainy from "./css-react/Rainy"
import Winter from "./css-react/Winter"
import Summer from "./css-react/Summer"
import "./global.css"
import Navbar from "./css-react/Navbar"
import Displayusers from "./css-react/Displayusers"
import Firststate from "./state/Firststate"
import CounterApp from "./state/CounterApp"
import Context1 from "./context-api/Context1"
import Context2 from "./context-api/Context2"
import Company from "./context-api/Company"
import Employee from "./context-api/Employee"
import Team1 from "./hoc/Team1"
import Team2 from "./hoc/Team2"
import Refcomp from "./reference/Refcomp"
import Uncontrolled from "./forms/Uncontrolled"
import Controlled from "./forms/Controlled"
import Details from "./forms/Details"
import LifecycleA from "./lifecycle-methods/LifecycleA"
import ErrorBoundary from "./error-boundary/Product"
import Product from "./error-boundary/ErrorBoundary"
const App = () =>{
  let season = "Rainy season"
  let city = ["Bhopal","Pune", "Chandigarh","Kolkata","Chennai"]

  //jsx => Extended syntax of javascript (js + xml)
  //jsx => Helps to write html like code along with js
  // events => onClick,onSubmit (camelCase)
  return (
    <main className="">
      {/* <h2>Functional based component</h2><br/>
      <label htmlFor=""></label>
      <h3>I's the month of June and it is the {season}</h3>
      <Firstcomp/>
      <SecondComp/>
      <Classcomp/>
      <CompFrag/> */}
{/* <CondRendering/> */}
{/* <Newcomp /> */}

{/* <House house="Red" captain="Sarika" students={140}/>
<House house="Green" students={160}/>
<House house="Blue" captain="Aditya"/> */}

  {/* <Mapcomp city={city}/>  */}
  {/* <Team>CompDept - DEbugging the future, one line at a time!</Team>
  <Team>ITdept - Thinking Bigger , Acting Better!</Team> */}
  {/* <ComponentA/> */}
  {/* <Inline/> */}
  {/* <Rainy/>
  <Winter/>
  <Summer/> */}
  {/* <Navbar/> */}
  {/* <Displayusers/> */}
  {/* <Firststate/> */}
  {/* <CounterApp/> */}
  {/* <Context1/> */}
  {/* <Context2>
    <Company/>
    <Employee/>
  </Context2> */}
  {/* <Team1/>
  // <Team2/> */}
  {/* <Refcomp/> */}
  {/* <Uncontrolled\> */}
  {/* <Controlled/> */}
  {/* <Details/> */}
  {/* <LifecycleA/> */}
  <ErrorBoundary>
    <Product product = "Mobile"/>
    <Product product = "Laptop"/>
  </ErrorBoundary>
  </main>
  )
}

export default App
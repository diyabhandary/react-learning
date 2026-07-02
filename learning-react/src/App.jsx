//!1. FUNCTIONAL BASED COMPONENT
import Firstcomp from "./components/Firstcomp"
import SecondComp from "./components/SecondComp"
import Classcomp from "./components/Classcomp"
import CompFrag from "./fragment/CompFrag"
import CondRendering from "./conditional-rendering/CondRendering"
import Newcomp from "./props/Newcomp"
const App = () =>{
  let season = "Rainy season"
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
      <CondRendering/>
      <Newcomp />
    </main>
  );
};

export default App;
import { useState, useEffect } from "react";

const SideEffect = () => {
  let [count, setCount] = useState(0);
  let [number, setNumber] = useState(0);

  let incrCount = () => setCount(count + 1);
  let incrNum = () => setNumber(number + 1);

  //! useEffect() is used to code for side-effects.
  //! Syntax:
  // useEffect(callbackFunction, dependencyArray)

  //! useEffect() with an empty dependency array behaves like componentDidMount().
  // It executes only once after the component is rendered.
  /*
  useEffect(() => {
    console.log("useEffect got invoked!");
  }, []);
  */

  //! useEffect() with a dependency behaves like componentDidUpdate().
  //! It executes whenever the dependency value changes.
  useEffect(() => {
    console.log("useEffect got invoked!");
  }, [count]);

  //! useEffect() without a dependency array executes after every render.
  /*
  useEffect(() => {
    console.log("Runs after every render");
  });
  */

  return (
    <>
      <h2>Count - {count}</h2>
      <button onClick={incrCount}>Increment Count</button>

      <h2>Number - {number}</h2>
      <button onClick={incrNum}>Increment Number</button>
    </>
  );
};

export default SideEffect;
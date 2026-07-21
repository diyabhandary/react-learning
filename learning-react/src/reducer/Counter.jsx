import { useReducer } from 'react'

// Initial state
let initialState = { count: 0 }

// reducer(state, action) => returns a new state
let reducer = (state, action) => {
  // state => { count: 0 }
  // action => { type: "increment", value: 1 }

  switch (action.type) {

    case "increment":
      return { count: state.count + action.value }

    case "decrement":
      return { count: state.count - action.value }

    case "reset":
      return { count: 0 }

    // If action type doesn't match, return current state
    default:
      return state
  }
}

const Counter = () => {

  // Wrong: initialstate
  // Correct: initialState (JavaScript is case-sensitive)
  let [state, dispatch] = useReducer(reducer, initialState)

  console.log(state) // {count: 0}

  return (
    <>
      <h2>Counter using useReducer</h2>

      <h3>Count : {state.count}</h3>

      {/* Increment by 1 */}
      <button onClick={() =>dispatch({ type: "increment",value: 1})}>Increment by 1</button>

      {/* Decrement by 1 */}
      <button onClick={() =>dispatch({type: "decrement", value: 1})}>Decrement by 1</button>

      {/* Increment by 5 */}
      <button onClick={() => dispatch({type: "increment",value: 5})}>Increment by 5</button>

      {/* Decrement by 5 */}
      <button onClick={() =>dispatch({type: "decrement",value: 5 })}>Decrement by 5</button>

      {/* Reset */}
      <button onClick={() =>dispatch({type: "reset" })}>Reset</button>
    </>
  )
}

export default Counter
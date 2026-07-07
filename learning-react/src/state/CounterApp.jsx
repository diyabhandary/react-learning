import {useState} from 'react'

const CounterApp = () => {
  let [count , setCount] = useState(0)

  let incr = ()=> setCount(count + 1)

  let decr = () =>{
    if(count >0){
      setCount(count -1)
    }
  }
  let reset = ()=> setCount(0)
  return (
    <div>
    <h2>CounterApp</h2>
    <h3>Count: {count}</h3>
    <button onClick={incr}>Increment</button>
    <button onClick={decr}>Decrement</button>
    <button onClick={reset}>Reset</button>
    </div>

  )
}

export default CounterApp
import React from 'react'
import useCounter from './useCounter'

function CounterApp() {
    const [count, Increment, Decrement, Reset]= useCounter()
  return (
    <div>
        <h1>Counter With Custom hooks</h1>
        <h1>Counter:{count}</h1>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
        <button onClick={Reset}>Reset</button>
    </div>
  )
}

export default CounterApp
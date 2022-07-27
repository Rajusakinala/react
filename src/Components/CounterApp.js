import React, {useState} from 'react'

function CounterApp() {
    const [count, setCount] = useState(0)
  return (
    <div>
        <h1>Counter Without any Custom hooks</h1>
        <h1>Counter:{count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
        <button onClick={()=>setCount(0)}>Reset</button>
    </div>
  )
}

export default CounterApp
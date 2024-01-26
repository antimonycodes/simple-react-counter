import { useState } from "react"

function Counter() {
  const [count, setCount] = useState(0)
  const increment = ()=>{
    setCount(count+1)
  }
  //
  const decrement = ()=>{
    setCount(count -1)
  }
  //
  const reset =()=>{
    setCount(0)
  }


  return (
      <>
      <div className="container">
    <div className="card">
      <h2>React Counter</h2>
      <div className="display">
        <h1>{count}</h1>
      </div>
      <div className="btn">
        <button onClick={decrement}>-</button>
        <button onClick={reset} >Reset</button>
        <button onClick={increment}>+</button>
      </div>
    </div>
    </div>
 
    </>
  )
}

export default Counter
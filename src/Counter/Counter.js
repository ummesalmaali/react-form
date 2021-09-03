import React, { useState } from 'react'

export default function Counter() {
  const [count,setCount] =   useState(0)


  const handleIncrement = () =>{
      setCount(count +3)
  }
  const handleFount = () =>{
      setCount(count -2)
  }
    return (
        <div>
            <h1>Count: {count}</h1>
            

            <button onClick={handleIncrement}>Click me</button>
            <button onClick={handleFount} disabled={count===0 ? true : false}>Dont Click me</button>
        </div>
    )
}

import React, { useState } from 'react'

const Counter = ({count,setCount}) => {
    
    const increment=()=>{
      setCount(count+1)
    }
    const decrement=()=>{
        setCount(count-1);
    }
  return (
    <div className='countet'>
        <h2>Counter</h2>
        <h3>The count is - {count}</h3>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      
    </div>
  )
}

export default Counter

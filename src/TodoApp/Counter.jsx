import React, { useContext } from 'react'

const Counter = () => {
  const {count,setCount}=useContext(usercontext)
  return (
    <div>
      <button onClick={()=>setCount(count+1)}>increment</button>
      <button onClick={()=>setCount(count-1)}>decrement</button>
      
    </div>
  )
}

export default Counter

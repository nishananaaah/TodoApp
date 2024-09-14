import React, { useContext } from 'react'
import { userContext } from './Context'

const Compo1 = () => {
    const {count,setCount}=useContext(userContext)
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>increment</button>
      
    </div>
  )
}

export default Compo1

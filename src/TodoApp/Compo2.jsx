import React, { useContext } from 'react'
import { userContext } from './Context'

const Compo2 = () => {
    const {count}=useContext(userContext)
  return (
    <div>
        <h1>Count:{count}</h1>
      
    </div>
  )
}

export default Compo2

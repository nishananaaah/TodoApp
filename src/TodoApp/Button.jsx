import React, { useContext } from 'react'

const Button = () => {
  const  {count}=useContext(usercontext)
  return (
    <div>
      <h1>Count:{count}</h1>
      
    </div>
  )
}

export default Button

import React, { createContext, useState } from 'react'
import Button from './Button';
import Counter from './Counter';
import Div from './Div';


const usercontext=createContext();
const Todo = () => {
  const [count,setCount]=useState(0)
  return (
    <div>
      <usercontext.Provider value={{count,setCount}}>
        <Button/>
        <Counter/>
        <Div/>
      </usercontext.Provider>

      
    </div>
  )
}

export default Todo

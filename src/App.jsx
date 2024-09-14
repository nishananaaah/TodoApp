import { createContext,useState } from 'react'
import './App.css'


import Button from './TodoApp/Button'
import Counter from './TodoApp/Counter'
import Div from './TodoApp/Div'
import Todo from './TodoApp/Todo'
import Context from './TodoApp/Context'
// const usercontext=createContext();

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      
      {/* <usercontext.Provider value={{count,setCount}}>
        <Button/>
        <Counter/>
        <Div/>
      </usercontext.Provider> */}
      <Todo/>
      <Context/>

      </div>
     
    </>
  )
}

export default App

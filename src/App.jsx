
import React, { useState } from 'react'
import './App.css'
import Header from './REACT REDUX/Header'
import Main from './REACT REDUX/Main'
import Footer from './REACT REDUX/Footer'



function App() {
  const [count,setCount]=useState(0);
  const [color, setColor] = useState("red");
  

  return (
    <>
      <div>
      
    <Header count={count} color={color}/>
    <Main count={count} setCount={setCount} color={color} setColor={setColor}/>
    <Footer color={color} count={count}/>
    

      </div>
     
    </>
  )
}

export default App

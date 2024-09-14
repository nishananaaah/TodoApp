import React, { createContext, useState } from 'react'
import Compo1 from './Compo1';
import Compo2 from './Compo2';
import Compo3 from './Compo3';


export const userContext=createContext()
function Context() {
    const [count,setCount]=useState(0);
  return (
    <div>
        <userContext.Provider value={{count,setCount}}>
            <Compo1/>
            <Compo2/>
            <Compo3/>
        </userContext.Provider>
      
    </div>
  )
}

export default Context

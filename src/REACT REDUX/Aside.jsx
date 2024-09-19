import React, { useState } from "react";
import randomcolor from "randomcolor";
const Aside = () => {
    const [color, setColor] = useState("red");
    const [count,setCount]=useState(0);
  
  const newColor=randomcolor();
  const changecolor=()=>{
  setColor(newColor)
  }
  return (
    <div className="aside">
      <h2 style={{ color: color }}>Aside</h2>
      <button onClick={changecolor}>Change Color</button>
      <h1>count:{count}</h1>
      <button onClick={()=>setCount(count+1)}>increment</button>
    </div>
  ); 
};

export default Aside;

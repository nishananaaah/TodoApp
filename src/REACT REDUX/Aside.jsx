import React from "react";
import randomcolor from "randomcolor";
const Aside = ({color,setColor}) => {
  
  const newColor=randomcolor();
  const changecolor=()=>{
  setColor(newColor)
  }
  return (
    <div className="aside">
      <h2 style={{ color: color }}>Aside</h2>
      <button onClick={changecolor}>Change Color</button>
    </div>
  );
};

export default Aside;

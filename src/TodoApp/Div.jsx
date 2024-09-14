import React, { useContext } from 'react'

const Div = () => {
  const {count}=useContext(usercontext)
  const isEven =count%2==0;
  return (
    <div>
      <div style={{background:isEven?'red':'blue',width:'100px',height:'100px'}}></div>
      
    </div>
  )
}

export default Div


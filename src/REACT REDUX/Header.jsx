import React from 'react'

const Header = ({count,color}) => {
  return (
    <div>
      <h1 style={{color}}>REDUX Project</h1>
      <h2>The counter is - {count}</h2>
    </div>
  )
}

export default Header

import React from 'react'

const Footer = ({color,count}) => {
  return (
    <div>
        <h4>My count is - {count}</h4>
      <h4 style={{color}}>My redux project footer</h4>
    </div>
  )
}

export default Footer

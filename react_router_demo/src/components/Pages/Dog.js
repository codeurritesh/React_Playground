import React from 'react'
import { useNavigate } from 'react-router-dom'

function Dog() {
    const navigate=useNavigate();
  return (
    <div>
        <h1>This is Dog Page</h1>
        <button onClick={()=>{navigate('/')}}>Click to go Main Page</button>
    </div>
  )
}

export default Dog
import React from 'react'



function Button( {text, handler}) {
   const handleClick  = () => {
        handler();
   }
  return (
   <button type='submit' onClick = {handleClick}>{text}</button>
  )
}

export default Button
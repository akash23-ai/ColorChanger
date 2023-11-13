import React, { useState } from 'react'


function Input({type = 'text', imgSrc}) {
    const [text, setText] = useState('');


  return (
    <>
    <img src={imgSrc} />
    <input type={type} placeholder={type=='text'? 'USERNAME':type.toLocaleUpperCase()} />
    </>
  )
}

export default Input
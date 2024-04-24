import React from 'react'
import { useState } from 'react'

function ControlInputs() {
    const [text,setText] = useState('')

    let handleText = (e)=> {
        setText(e.target.value);
    }
    
  return (
    <>

    <input 
    className='text-3xl m-4 p-4 text-white bg-black rounded-full text-center'
    type = 'text' 
    value = {text}
    placeholder='Enter your text here'
    onChange={handleText}/>
    <h1> Input text is : {text}</h1>

    </>
  )
}

export default ControlInputs

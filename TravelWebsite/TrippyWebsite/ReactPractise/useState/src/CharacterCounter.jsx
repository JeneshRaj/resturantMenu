import React from 'react'
import { useState } from 'react'

function CharacterCounter() {

    const [count,setCounter] = useState('')

    let handleText = (e)=>{
        setCounter(e.target.value)
    }

  return (
    <>
    <input 
    value = {count}
    placeholder='Enter your message here'
    type = 'text'
    onChange={handleText}
    className='bg-black text-white text-2xl text-center rounded-full p-3'
    />
    <p>Letter Counts : {count.length}</p>
    </>
  )
}

export default CharacterCounter

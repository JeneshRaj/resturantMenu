import React from 'react'
import { useState } from 'react'

function ToggleVisibility() {

    const[visual,setVisual] = useState(false)

    let handleToggle = ()=> {
        setVisual(!visual)
    }

  return (
  <>
  <button className='border-black-4 rounded-full text-l text-white bg-black m-4 p-4' onClick={handleToggle}>Show/Hide</button>
  {visual && <p>jenesh raj udash</p>}

  
  </>
  )
}

export default ToggleVisibility

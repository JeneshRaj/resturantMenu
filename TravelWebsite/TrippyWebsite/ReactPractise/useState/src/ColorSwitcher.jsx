import React from 'react'
import { useState } from 'react'

function ColorSwitcher() {


    const [bgcolor , setBgColor ] = useState('')

    const handleColorChange = (e)=>{
        setBgColor(e.target.value)
     }   

  return (
   <>
   <div className='border-2 w-full h-20' style = {{backgroundColor: bgcolor}}  >
    </div>
    <select onChange= {handleColorChange}className ='border-blue-4 m-3 p-2' id="Colors">
    <option  value="">Select a Color</option>
        <option  value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="yellow">Yellow</option>    
      </select>

   
   </>
  )
}

export default ColorSwitcher

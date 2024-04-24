import React from 'react'
import { useState } from 'react'

function ToDoList() {

    const [task,setTask] = useState([])
    const [inputValue,setInputValue] = useState('')

    let handleInputChange = (e)=> {
        setInputValue(e.target.value)

    }

    let handleSubmit = ()=>{
        if(inputValue.trim()){
            setTask ([...task,inputValue.trim()]);
            setInputValue('')
        }
    }

    let handleDelete = (index )=> {
        setTask(task.filter((_, i) => i !== index));
    }
 
  return (
 <>
    <input 
    type= "text"
    value = {inputValue}
    placeholder='Enter your upcoming task'
    className=' bg-black w-full text-white text-center text-2xl rounded-full h-20'
    onChange={handleInputChange}
    />

    <button onClick={handleSubmit} className = "bg-black text-white text-2xl text-center p-2 m-3 rounded-full w-60">Submit</button>
    <ul>
        {task.map((task, index)=> (
            <li key={index}>
                {task} 
            <button className='bg-red-400 text-black text-l text-center rounded-full p-2 m-1 w-20 gap-24' onClick={()=> handleDelete(index)}>Delete</button>
            </li>
        ))}
        
    </ul>

 
 </>
  )
}

export default ToDoList

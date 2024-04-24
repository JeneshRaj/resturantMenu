import { useState } from 'react'
import './App.css'
import ControlInputs from './ControlInputs';
import ToggleVisibility from './ToggleVisibility';

function App() {
  const [count, setCount] = useState(0)

  let handleCountIncrease = ()=> {
    if(count<10){
      setCount(count+1);
    }    
  }

  let handleCountDecrease = ()=> {
    if(count>0){
      setCount(count-1)
    }    
  }
  return (
    <>
    <h1 className='text-black text-3xl'>The Number of counts: {count}</h1>
    <div className="btns">
    <button className = 'border-4 bg-black text-white rounded-full  m-4 p-4' onClick={handleCountIncrease} >Count Increase</button>
    <button className = 'border-4 bg-black text-white rounded-full m-4 p-4 ' onClick={handleCountDecrease} >Count Decrease</button>
    </div>
    <ControlInputs/>
    <ToggleVisibility />
    </>
  )
}

export default App

import React from 'react'
import { useState } from 'react'

const items = ['Apple','filter', 'Banana', 'Carrot', 'Date', 'Eggplant', 'Fig', 'Grape'];

function SearchFilter() {

    const [search, setSearch] = useState('')

    const handleInputChange = (e)=>{
        setSearch(e.target.value)
    }
    const filteredItems = items.filter(items => items.toLowerCase().includes(search.toLowerCase()))

  return (
    <>
    <h1 className='text-3xl text-black p-4'>Search App</h1>
    <input 
    type='text'
    value = {search}
    placeholder='Search here'
    className='bg-gray-300 text-black text-l w-30 p-2'
    onChange={handleInputChange} />
    <ul>
        {filteredItems.map((item, index) => (
            <li key= {index}>{item}</li>
        ))}
    </ul>   
    
    </>
  )
}

export default SearchFilter

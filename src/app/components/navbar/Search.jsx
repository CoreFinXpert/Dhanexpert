import React from 'react'
import { FaSearch } from 'react-icons/fa';



export default function Search() {
  return (
    <div>
      <div className='flex  flex-row items-center justify-center  border rounded-2xl bg-white'>
    
        <input className='bg-transparent m-3 cursor focus:outline-none text-black ' type="search"     placeholder='search...' />
        <FaSearch className='text-slate-500 text-2xl m-3   sm:outline-none' />

        </div>
    </div>
  )
}

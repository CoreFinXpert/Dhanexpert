"use client"
import React from 'react';
import Link from 'next/link'
import Search from './Search';
import Logo from './Logo';

import ProfileDropdown from './ProfileDropdown';


export default function Navbar() {
  return (
    <div className='flex flex-row justify-between items-center bg-blue-600 text-white h-[70px]  w-full mx-auto shadow-lg '>
        <Logo />
        <Search />
      {/* all the pages in navbar */}
      <div >
        <ul className='flex flex-row items-center justify-between gap-7 text-xl mr-3  ' >
           
        <li className='hover:text-gray-900 transition'><Link href="/">Home</Link></li>
        <li className='hover:text-gray-900 transition'><Link href="/findexpert">Find Expert</Link></li>
        <li className='hover:text-gray-900 transition'><Link href="/about">About Us </Link></li>
        <li className='hover:text-gray-900 transition'><Link href="/contact">Contact Us</Link></li>
        <div className="">
       {/* profile component is below which will help route to login module */}
        <ProfileDropdown/>
      </div>
     
        </ul>
      </div>

     
      
    </div>
  )
}

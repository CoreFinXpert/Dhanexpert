'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import profile from '../../../../public/profile.png'

const loginMenu = [ "SignIn", "SignUP" ]

export default function Dropdown() {
  const [isOpen , setIsOpen] = useState(false)
  return (
    <>
    <div className="flex ">
    <div className=' '>
         <Image className='rounded-full ' onClick={() => setIsOpen((prev) => !prev)} src={profile } width='50' height='50' alt="user"  />
         {isOpen && <div>
          {loginMenu.map((item, i) => (
            <div className=" bg-white border overflow flex flex-col items-start text-black rounded text-sm">
            <h3 className=''>{item}</h3>
            </div>
          ))}
          </div>}
    </div>
    </div>
    </>
  )
}

import Image from 'next/image'
import React from 'react'
import {FiSearch} from 'react-icons/fi'
import {AiOutlineGlobal,AiOutlineMenu} from 'react-icons/ai'
import {FaUserCircle} from 'react-icons/fa'
export const Header = () => {
  return (
   <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
        <div className='relative flex items-center h-10 cursor-pointer my-auto'>
            <Image src={'/images/logo.png'}
            width={120}
            height={10}
            alt='logo'/>        
        </div>
        <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
            <input className='flex-grow pl-5 bg-transparent outline-none text-sm text-gray-500'
            placeholder='Start your search' />
            <FiSearch size={35} className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2'/>
        </div>
        <div className='flex items-center space-x-4 justify-end text-gray-500'>
            <p className='hidden md:inline cursor-pointer'>Becom a host</p>
            <AiOutlineGlobal size={35} className='h-6 cursor-pointer'/>
            <div className='flex items-center space-x-2 border-2 p-2 rounded-full'>
                <AiOutlineMenu size={35} className='h-6' />
                <FaUserCircle size={35} className='h-6'/>
            </div>
        </div>
   </header>
  )
}

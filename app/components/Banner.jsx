import Image from 'next/image'
import React from 'react'

export const Banner = () => {
  return (
    <div className=' relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'>
        <Image src={'/images/ban.jpg'} fill cover/>
        <div className='absolute top-1/2 w-full text-center'>
            <p className='text-sm sm:text-lg font-semibold'>Not sure where to go? Perfect</p>
            <button className='text-purple-500 bg-white px-10 py-4
            shadow-md rounded-full font-bold my-3 hover:shadow-xl
            active:scale-90 transi duration-150'>
                I am Flexible
            </button>
        </div>
    </div>
  )
}

import Image from 'next/image'
import React from 'react'

export const LargCard = () => {
  return (
    <div className='py-10 '>
        <div className='relative py-6 cursor-pointer'>
            <div className='relative h-96 md:w-[1240px] mx-auto min-w-[300px]'>
                <Image
                src={'/images/outdoor.jpg'}
                fill
                alt='outdoor'
                className='rounded-xl'
                />
            </div>
            <div className='absolute top-32 left-12 md:left-64'>
                <h3 className='text-4xl mb-3 w-64 font-semibold'>The Greatest Outdoors</h3>
                <p>Whishlist Created by Airbnd</p>
                <button className='text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5'>
                    Get Inspired
                </button>
            </div>
        </div>
    </div>
  )
}

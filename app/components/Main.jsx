import Image from 'next/image'
import React from 'react'

export const Main = () => {
    return (
        <div className='max-w-7xl mx-auto px-8 ms:px-16 py-8'>
            {/* -Section -1========================================================== */}
            <div className='pt-6'>
                <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
            </div>
            <div className='grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 pt-12'>
                <div className='flex items-center m-2 space-x-10 rounded-xl
                    cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out'>
                    <div className=' relative h-16 w-16'>
                        <Image src={'/images/isb.jpg'} fill className='rounded-lg' />
                    </div>
                    <div>
                        <h2 className='font-semibold'>Islamabad</h2>
                        <h3 className='text-gray-500'>15 mint drive </h3>
                    </div>
                </div>
                <div className='flex items-center m-2 space-x-10 rounded-xl
                    cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out'>
                    <div className=' relative h-16 w-16'>
                        <Image src={'/images/rwp.jpg'} fill className='rounded-lg' />
                    </div>
                    <div>
                        <h2 className='font-semibold'>Rawalpindi</h2>
                        <h3 className='text-gray-500'>45 mint drive </h3>
                    </div>
                </div>
                <div className='flex items-center m-2 space-x-10 rounded-xl
                    cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out'>
                    <div className=' relative h-16 w-16'>
                        <Image src={'/images/pswr.jpg'} fill className='rounded-lg' />
                    </div>
                    <div>
                        <h2 className='font-semibold'>Peshawar</h2>
                        <h3 className='text-gray-500'>25 mint drive </h3>
                    </div>
                </div>
                <div className='flex items-center m-2 space-x-10 rounded-xl
                    cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out'>
                    <div className=' relative h-16 w-16'>
                        <Image src={'/images/fsd.jfif'} fill className='rounded-lg' />
                    </div>
                    <div>
                        <h2 className='font-semibold'>Faisalabad</h2>
                        <h3 className='text-gray-500'>40 mint drive </h3>
                    </div>
                </div>
                <div className='flex items-center m-2 space-x-10 rounded-xl
                    cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out'>
                    <div className=' relative h-16 w-16'>
                        <Image src={'/images/kchi.jpg'} fill className='rounded-lg' />
                    </div>
                    <div>
                        <h2 className='font-semibold'>Karchi</h2>
                        <h3 className='text-gray-500'>1 hour drive </h3>
                    </div>
                </div>
                <div className='flex items-center m-2 space-x-10 rounded-xl
                    cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out'>
                    <div className=' relative h-16 w-16'>
                        <Image src={'/images/lhr.jpg'} fill className='rounded-lg' />
                    </div>
                    <div>
                        <h2 className='font-semibold'>Lahore</h2>
                        <h3 className='text-gray-500'>30 mint drive </h3>
                    </div>
                </div>
                <div className='flex items-center m-2 space-x-10 rounded-xl
                    cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out'>
                    <div className=' relative h-16 w-16'>
                        <Image src={'/images/mltn.jpg'} fill className='rounded-lg' />
                    </div>
                    <div>
                        <h2 className='font-semibold'>Multan</h2>
                        <h3 className='text-gray-500'>20 mint drive </h3>
                    </div>
                </div>
                <div className='flex items-center m-2 space-x-10 rounded-xl
                    cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out'>
                    <div className=' relative h-16 w-16'>
                        <Image src={'/images/quta.jpg'} fill className='rounded-lg' />
                    </div>
                    <div>
                        <h2 className='font-semibold'>Quetta</h2>
                        <h3 className='text-gray-500'>25 mint drive </h3>
                    </div>
                </div>
            </div>
            {/* -Section -1========================================================== */}
            <div className='pt-24'>
                <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
            </div>
            <div className='flex space-x-3 overflow-scroll p-4 scrollbar-hide'>
                <div className='cursor-pointer hover:scale-105 transform transition duration-300 ease-in-out'>
                    <div className='relative h-80 w-80'>
                        <Image src={'/images/isb.jpg'} fill className='rounded-md'/>
                    </div>
                    <h3 className='text-xl font-semibold p-2'>Entire Home </h3>
                </div>
                <div className='cursor-pointer hover:scale-105 transform transition duration-300 ease-in-out'>
                    <div className='relative h-80 w-80'>
                        <Image src={'/images/rwp.jpg'} fill className='rounded-md'/>
                    </div>
                    <h3 className='text-xl font-semibold p-2'>Pet Allowed </h3>
                </div>
                <div className='cursor-pointer hover:scale-105 transform transition duration-300 ease-in-out'>
                    <div className='relative h-80 w-80'>
                        <Image src={'/images/lhr.jpg'} fill className='rounded-md'/>
                    </div>
                    <h3 className='text-xl font-semibold p-2'>Historical places </h3>
                </div>
                <div className='cursor-pointer hover:scale-105 transform transition duration-300 ease-in-out'>
                    <div className='relative h-80 w-80'>
                        <Image src={'/images/muree.jfif'} fill className='rounded-md'/>
                    </div>
                    <h3 className='text-xl font-semibold p-2'>Nature view </h3>
                </div>
            </div>

        </div>
    )
}

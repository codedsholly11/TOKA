import React from 'react'
import Image from 'next/image'
const Location = () => {
  return (
    <div className='flex flex-col gap-[50px] py-[50px] bg-[#fff2f3]'>
        <div className='flex flex-col items-center gap-[20px]'>
            <p className='font-bold text-[#36bb91]'>LOCATIONS</p>
            <p className='md:text-5xl text-4xl font-bold md:w-[45vw] w-[90vw] text-center'>We are global growing company</p>
            <p className='text-lg md:w-[40vw] w-[90vw] text-center'>Our company was founded in 2020. We work daily to become better and we are ready to share best practices.</p>
        </div>
        <div className='flex items-center justify-center '>
            <img src="/country.png" alt="Description of image" width={120} height={120} />
            <img src="/country03.png" alt="Description of image" width={120} height={120} />
            <img src="/country04.png" alt="Description of image" width={120} height={120} />
            <img src="/country05.png" alt="Description of image" width={120} height={120} className='md:flex hidden' />
            <img src="/country06.png" alt="Description of image" width={120} height={120} className='md:flex hidden' />
            <img src="/country07.png" alt="Description of image" width={120} height={120} className='md:flex hidden' />
        </div>
   
    </div>
  )
}

export default Location

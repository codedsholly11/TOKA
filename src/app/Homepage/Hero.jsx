import React from 'react'

const Hero = () => {
  return (
    <div className='bg-[#f7edf7] md:px-[80px] px-[25px]  pb-[60px] '>
        <div className='flex flex-col md:items-center text-center gap-[20px] py-[50px]'>
            <p className='font-bold text-[#36bb91]'>GET IN TOUCH</p>
            <h2 className='md:text-4xl text-5xl font-bold'>Contact information</h2>
            <p className='md:w-[35vw] w-[90vw] text-center'>Our company was founded in 2020. We work daily to become better and we are ready to share best practices.</p>
        </div>
        <div className='md:flex flex-col md:flex-row items-center justify-center md:items-start gap-[30px]'>
            <div className='flex flex-col gap-[30px]'>
                <div className='bg-white rounded-xl md:px-[50px] px-[30px] py-[30px] flex flex-col md:gap-[15px]  md:w-[42vw] w-[88vw] '>
                    <p className='text-2xl font-bold'>Head office</p>
                    <p className='text- md:text-lg'>202 Helga Spring Rd, Crawford,TN 38554</p>
                    <p className='text-'>800.275.8777</p>
                    <p className='text-'>Telegram Support</p>
                </div>
                <div className='bg-white rounded-xl md:px-[50px] px-[30px] py-[30px] flex flex-col md:gap-[15px]  md:w-[42vw] w-[88vw] md:h-[70vh] gap-[20px]'>
                    <p className='text-2xl font-bold'>Opening hours</p>
                    <p className='font-semibold text-lg'>Monday: <span className='text-gray-400'>8:00 – 17:00</span></p>
                    <p className='font-semibold text-lg'>Tuesday: <span className='text-gray-400'>8:00 – 17:00</span></p>
                    <p className='font-semibold text-lg'>Wednesday: <span className='text-gray-400'>8:00 – 17:00</span></p>
                    <p className='font-semibold text-lg'>Thursday: <span className='text-gray-400'>8:00 – 17:00</span></p>
                    <p className='font-semibold text-lg'>Friday: <span className='text-gray-400'>8:00 – 17:00</span></p>
                    <p className='font-semibold text-lg'>Saturday: <span className='text-gray-400'>8:00 – 17:00</span></p>
                    <p className='font-semibold text-lg'>Sunday: <span className='text-gray-400'> CLOSED</span></p>
                </div>
            </div>
            <div className='bg-white rounded-xl md:px-[50px] px-[30px] py-[30px] flex flex-col gap-[15px] md:w-[42vw] w-[88vw] mt-[30px] '>
                <p className='text-2xl font-bold'>Send us a message</p>
                <div className='flex flex-col gap-[12px]'>
                    <p>Your name</p>
                    <input className='border-2 rounded-xl md:w-[35vw] w-[73vw] h-[9vh]' type="text" />
                </div>
                <div className='flex flex-col gap-[12px]'>
                    <p>Your email</p>
                    <input className='border-2 rounded-xl md:w-[35vw] w-[73vw] h-[9vh]' type="text" />
                </div>
                <div className='flex flex-col gap-[12px]'>
                    <p>Your message</p>
                    <textarea className='border-2 rounded-xl md:w-[35vw] w-[73vw] h-[40vh]' name="" id=""></textarea>
                </div>
                <div>
                    <button className='md:w-[12vw] w-[42vw] md:h-[8vh] h-[6vh] bg-[#36bb91] rounded-2xl text-white'>Submit</button>
                </div>

            </div>
        </div>
      
    </div>
  )
}

export default Hero

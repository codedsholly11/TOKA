import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col gap-[] bg-[#fcfafd] px-[20px]'>
      <div className='flex items-center justify-between py-[50px]'>
            <div className='w-[30vw] flex flex-col gap-[25px]'>
                <h1 className='text-4xl font-bold'>Toka</h1>
                <p>Reinventing the way of creating websites, we aim to create the most master-peaced WordPress theme available on the market.</p>
            </div>
            <div className='flex flex-col gap-[20px]'>
                <p className='font-semibold'>Contact Us</p>
                <p>202 Helga Springs Rd, Crawford, TN 38554</p>
                <p>Call Us: <span className='font-bold'> 800.275.8777</span></p>
                <p>alex@company.com</p>
            </div>
            <div className='w-[30vw] flex flex-col gap-[20px]'>
                <p className='font-semibold'>Sign Up for Email Updates</p>
                <div>
                    <input className='w-[25vw] h-[9vh] rounded-3xl' type="text" placeholder='Your e-mail address' />
                    <button className='bg-[#36bb91] px-[40px] py-[13px] rounded-2xl text-white'>Subscribe</button>
                </div>
                <p>Sign up with your email address to receive news and updates</p>
            </div>
      </div>
        <p className='border-2'></p>
        <div className='flex items-center justify-between px-[20px] py-[25px]'>
            <p>Copyright ©2024 Toka. All rights reserved.</p>
            <div className='flex gap-[30px]'>
                <p>Home</p>
                <p>About Us</p>
                <p>Our Team</p>
                <p>Shop</p>
                <p>Blog</p>
                <p>Contact Us</p>
            </div>
        </div>
    </div>
  )
}

export default Footer

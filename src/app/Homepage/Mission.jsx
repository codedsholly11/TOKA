import React from 'react'
import Image from 'next/image'
import { Content } from 'next/font/google'

const Mission = () => {
  const Missions= [
    {
      img:"/chat.png",
      header:"Ask a question",
      Content:"Cras eu semper neque, sit amet aliquet odio. Donec volutpat enim quis mollis consequat.",
      btn:"Learn more"
    },
    {
      img:"/shipping.png",
      header:"Partnership",
      Content:"Cras eu semper neque, sit amet aliquet odio. Donec volutpat enim quis mollis consequat.",
      btn:"Learn more"
    },
    {
      img:"/priority.png",
      header:"Career",
      Content:"Cras eu semper neque, sit amet aliquet odio. Donec volutpat enim quis mollis consequat.",
      btn:"Learn more"
    },
  ]

  return (
    <div className='bg-[#f7f7f7] px-[80px]  pb-[60px] pt-[30px]'>
      <div className='flex flex-col md:flex-row py-[50px] h-[65vh] gap-[80px] justify-center items-center'>
        <div className='md:w-[30vw] w-[90vw] flex flex-col items-center md:items-start gap-[20px]'>
            <p className='text-[#36bb91] font-bold '>OUR MISSION</p>
            <p className='md:text-5xl text-4xl font-bold text-center md:text-start'>How can we help you right now?</p>
        </div>
        <div className='md:w-[40vw] w-[95vw]'>
            <p className='text-lg text-center'>How can we help you right now? Invest in Bitcoin, Ethereum, USDT, and other cryptocurrencies using our crypto trading app. The Bitcoin and cryptocurrency markets have experienced a surge in volume recently, making it an exciting time to become a trader. Cryptocurrency markets have seen an increase in volume in recent weeks, which is a great opportunity for new traders.</p>
        </div>
      </div>
      <div className='flex flex-col md:flex-row gap-[35px] items-center'>
        {
          Missions.map((n,index)=>(
            <div className='bg-white rounded-xl px-[50px] py-[30px] flex flex-col gap-[15px] md:w-[27vw] w-[90vw] items-center text-center'>
            <img src={n.img} alt="Description of image" width={80} height={80} />
            <p className='text-xl font-bold'>{n.header}</p>
            <p>{n.Content}</p>
            <p className='text-[#fb6426] font-bold'>{n.btn}</p>
        </div>
          ))
        }
    
      </div>
      <div></div>
    </div>
  )
}

export default Mission

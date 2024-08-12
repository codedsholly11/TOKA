"use client"
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
    
const Hero = () => {
    const [name, setName]= useState('')
    const [email, setEmail]= useState('')
    const [message, setMessage]= useState('') 
    const [submit, setSubmit]= useState(false)
    async function fetchApi(e){
        e.preventDefault()
      try {
        const baseurl='https://forms-io.onrender.com/submit-form/55c09556-195a-4e3d-a027-38fa92291fe7'
        const response = await fetch(baseurl,{
            method:'POST',
            headers:{'content-Type' : 'application/json'},
            body:JSON.stringify({name, email, message})
        })
        .then((res)=>res.json)
        if (response){
            toast.warn('your form was submitted')
            setSubmit(false)
        }
      
      } catch (error) {
        console.log(error);
        
      }  
    }   


  return (
    <div className='bg-[#f7edf7] md:px-[80px] px-[25px]  pb-[60px] flex flex-col items-center '>
        <div className='flex flex-col md:items-center text-center gap-[20px] py-[50px]'>
            <p className='font-bold text-[#36bb91]'>GET IN TOUCH</p>
            <h2 className='md:text-4xl text-5xl font-bold'>Contact information</h2>
            <p className='md:w-[35vw] w-[90vw] text-center'>Our company was founded in 2020. We work daily to become better and we are ready to share best practices.</p>
        </div>
        <div className='md:flex flex-col md:flex-row items-center justify-center md:items-start gap-[30px]'>
            <div className='flex flex-col gap-[30px]'>
                <div className='bg-white rounded-xl md:px-[50px] px-[30px] py-[30px] flex flex-col md:gap-[15px]  md:w-[42vw] w-[88vw] '>
                    <p className='text-2xl font-bold'>Head office</p>
                    <p className='text- md:text-lg'>MTN PLAZA ,1st floor opposite Juniwad filing Station ,Tanke , Ilorin Kwara state</p>
                    <p className='text-'>+234 901 697 4874 call</p>
                    <p className='text-'>+234 901 697 4874 whatsapp </p>
                    <p className='text-'><a href="https://t.me/ibfreetradingsignals">Visit Our Telegram</a></p>
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
            <form onSubmit={fetchApi}  className='bg-white rounded-xl md:px-[50px] px-[30px] py-[30px] flex flex-col gap-[15px] md:w-[42vw] w-[88vw] mt-10'>
                <p className='text-2xl font-bold'>Send us a message</p>
                <div className='flex flex-col gap-[12px]'>
                    <p>Your name</p>
                    <input onChange={(e)=>setName(e.target.value)} value={name} required name='name' className='border-2 rounded-xl md:w-[35vw] w-[73vw] px-[20px] h-[9vh]' type="text" />
                </div>
                <div className='flex flex-col gap-[12px]'>
                    <p>Your email</p>
                    <input onChange={(e)=>setEmail(e.target.value)} value={email} required name='email' className='border-2 rounded-xl md:w-[35vw] w-[73vw] px-[20px] h-[9vh]' type="text" />
                </div>
                <div className='flex flex-col gap-[12px]'>
                    <p>Your message</p>
                    <textarea onChange={(e)=>setMessage(e.target.value)} value={message} required name='message' className='border-2 rounded-xl md:w-[35vw] w-[73vw] px-[20px] h-[40vh]'></textarea>
                </div>
                <div>
                    <button type='submit' className='md:w-[12vw] w-[42vw] md:h-[8vh] h-[6vh] bg-[#36bb91] rounded-2xl text-white'>{submit? 'submitting':'submit'}</button>
                </div>
                <ToastContainer />

            <div>
        </div>

        </form>

        </div>
      
    </div>
  )
}

export default Hero;

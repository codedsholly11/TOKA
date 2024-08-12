import React from 'react'

const Map = () => {
  return (
    <div className='flex flex-col items-center justify-center py-[50px] gap-[50px]'>
        <div className='flex flex-col items-center justify-center text-center gap-[20px]'>
            <p className='font-bold text-[#36bb91]'>HOW TO GET TO US</p>
            <p className='text-4xl font-bold'>Find our office</p>
        </div>
        <div>
        <iframe className='w-[98vw]' src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d126277.12834221663!2d4.485425225710998!3d8.483793703837764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sMTN%20PLAZA%20%2C1st%20floor%20opposite%20Juniwad%20filling%20Station%20%2CTanke%20%2C%20Ilorin%20Kwara%20state!5e0!3m2!1sen!2sng!4v1723477219441!5m2!1sen!2sng" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      
    </div>
  )
}

export default Map

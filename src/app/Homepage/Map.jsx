import React from 'react'

const Map = () => {
  return (
    <div className='flex flex-col items-center justify-center py-[50px] gap-[50px]'>
        <div className='flex flex-col items-center justify-center text-center gap-[20px]'>
            <p className='font-bold text-[#36bb91]'>HOW TO GET TO US</p>
            <p className='text-4xl font-bold'>Find our office</p>
        </div>
        <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.1659777238283!2d4.555587975012533!3d8.483237191557935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103653e02d37c1cf%3A0x2715d3291448c2df!2sToshconsult%20-%20The%20best%20website%20Design%20Agency%20%7C%20Website%20Development%20Agency%20in%20Ilorin%20kwara%20state!5e0!3m2!1sen!2sng!4v1723469348905!5m2!1sen!2sng" width="600" height="450"></iframe>
        </div>
      
    </div>
  )
}

export default Map

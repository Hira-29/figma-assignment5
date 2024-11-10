import React from 'react'
import Image from 'next/image'
const Hero = () => {
  return (
    <div className='flex h-[90%]'>
     
        <div className='w-[80%] flex flex-col justify-center mx-[107px] mb-[182px] '>
        
        <h1 className='text-[40px] font-bold mb-[28px] mt-[150px] text-[#000000]'>IMPECCABLE <br/>CRAFTSMANSHIP AND<br/> FINESSE
        </h1>
        
        <p className="text-[#787054] mb-[40px] text-[29.24px] font-medium whitespace-pre-line">An example of intricate workmanship and detail, elegant necklaces
             and long and short chains form a part of our desirable collection.</p>
        
        <button className='w-[288px] h-[58px] bg-[#A29875] text-white rounded-md text-[25.8px] font-medium'>Explore Now</button>
        </div>


        <div className='w-1/2 flex justify-center items-center'>
        <Image src={"/images/hero-pic.svg"} alt="hero-pic" width={421.38} height={573.59}></Image>
        </div>
      
    </div>
  )
}

export default Hero

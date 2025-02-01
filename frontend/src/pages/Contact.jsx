import React from 'react';
import { assets } from '../assets/assets'

const Contact = () => {

  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p className='text-semibold'>CONTACT US</p>
      </div>
      <div className='my-10 flex flex-col justifu-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px] ' src={assets.contact_image} alt="" />
        <div className='flex flex-col justify-center items-start gap-6' >
          <p className='font-semibold text-lg text-gray-600'>Our Office</p>
          <p>B-4 shidhsb sdhuash <br /> jhsdhds dhilufdhs jsdhld-110554 </p>
          <p>tel:(hddsbhsd)</p>
          <p className='font-semibold text-lg text-gray-600'>Carrers At Prescripto</p>
          <p>jsdhkwegdiuwgef jasbkjs usdgis  ud djdsh.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>EXPLORE JOBS</button>
        </div>
      </div>

      
    </div>
  )
}

export default Contact

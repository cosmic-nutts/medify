import React from 'react';
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span> </p>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga debitis, repellat, enim alias fugiat sed porro voluptates harum veniam, laudantium tempora! Doloremque id, dolore ad asperiores quos officia illo dolor.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim eligendi et aut reprehenderit aliquam, repellendus perferendis vero omnis? Error itaque, aspernatur quas at tenetur iure tempore cumque voluptatem, corrupti veniam sapiente. Voluptatum illo autem similique dolorum ad culpa ea dignissimos.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam officiis iste voluptas optio autem corporis voluptatibus tenetur possimus deserunt quasi, accusantium soluta recusandae hic enim quod minus? Accusantium at alias voluptatibus dolores mollitia quae praesentium?</p>
        </div>
      </div>
      <div className='text-xl my-4'>
        <p>Why <span className='text-gray-600 font-semibold'>Choose Us</span> </p>

      </div>
      <div className='flex flex-col md:flex-row mb-20 '>
        <div className='border py-8  px-10 md:px-16 flex flex-col gap-5 text-[15px] hover:bg-green-500 hover:text-white transition-all duration-300 text-gray-600 mr-1 cursor-pointer'>
          <b>EFFICIENCY</b>
          <p>Lorem ipsum dolor, sit vel tempora! Asperiores ut, i repellat porro.</p>
        </div>
        <div className='border py-8 px-10 md:px-16 flex flex-col gap-5 text-[15px] hover:bg-green-500 hover:text-white transition-all duration-300 text-gray-600 mr-1 cursor-pointer'>
          <b>CONVENIENCE</b>
          <p>Lorem ipsum dolor solestiae odio cum tenetur animi dolorem sit.</p>
        </div>
        <div className='border py-8 px-10 md:px-16 flex flex-col gap-5 text-[15px] hover:bg-green-500 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>INNOVATION</b>
          <p>Lorem ipsum dolor sit am Autem quas optio facilis magnam velit eius mollitia libero maiores labore, nesciunt iure?</p>
        </div>

      </div>
      
    </div>
  )
}

export default About

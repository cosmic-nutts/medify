import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img className='mb-5 w-40' src={assets.logo} alt="Prescripto Logo" />
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dignissimos eveniet vitae sed blanditiis alias saepe molestiae! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur quam ratione ut eius earum incidunt modi dicta tempora quaerat numquam.</p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>Company</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+545-24415-46</li>
                    <li>shjbdb@gmail.com</li>
                </ul>
            </div>
        </div>

        <div className='flex justify-center py-5'>
            <p className='text-sm text-center'>Copyright 2025@ Prescripto - All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer

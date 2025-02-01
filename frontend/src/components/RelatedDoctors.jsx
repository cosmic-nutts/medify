import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const RelatedDoctors = ({speciality,docId}) => {
    const {doctors} =useContext(AppContext)
    const [relDoc, setRelDocs] = useState([])
    const navigate= useNavigate()

    useEffect(()=>{
        if(doctors.length > 0 && speciality){
            const doctorsData= doctors.filter(((doc)=> doc.speciality=== speciality && doc._id!==docId ))
            setRelDocs(doctorsData)
        }

    }),[doctors,speciality,docId]
  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
            <h1 className='text-3xl font-medium'>Our Top Doctors</h1>
            <p className='sm:w-1/3 text-center text-sm'>
                Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 pt-5 px-3 sm:px-0'>
                {relDoc.slice(0, 5).map((item, index) => (
                    <div 
                        onClick={() => {navigate(`/appointment/${item._id}`); scrollTo(0,0)}}
                        className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-500' 
                        key={index}
                    >
                        <img className='bg-blue-50 w-full h-60 object-cover' src={item.image} alt={item.name} />
                        
                        <div className='p-4 '>
                            <div className='flex  items-center gap-2 text-sm text-green-700 mb-1'>
                                <div className='w-2 h-2 bg-green-700 rounded-full'></div>
                                <p>Available</p>
                            </div>
                            <p className='font-medium'>{item.name}</p>
                            <p className='text-xs text-gray-500'>{item.speciality}</p>
                        </div>
                    </div>
                ))}
            </div>

            <button onClick={()=>{navigate('/doctor');scrollTo(0,0)}} className='mt-10 bg-green-500 text-white px-12 py-3 rounded-full hover:bg-green-600 transition'>
                More
            </button>
        </div>

  )
}

export default RelatedDoctors

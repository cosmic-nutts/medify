import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Doctor = () => {
  const { speciality } = useParams()
  const { doctors } = useContext(AppContext)
  const [filterDoc, setFilterDoc] = useState([])
  const navigate = useNavigate()
  const[showFilter,setShowFilter]=useState(false)

  const applyFilter = () => {
    // If speciality is provided, filter the doctors based on speciality
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality.toLowerCase() === speciality.toLowerCase()))
    } else {
      setFilterDoc(doctors)  // If no speciality, show all doctors
    }
  }

  useEffect(() => {
    applyFilter()  // Apply filter on component mount and when speciality or doctors change
  }, [doctors, speciality])

  return (
    <div>

      <p className='text-gray-700'>Browse through the doctor specialists.</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <button className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-green text-white' : '' } `} onClick={()=> setShowFilter(prev=> !prev)} >Filters</button>
        
        {/* Left side - Speciality filter */}
        <div className={` flex-col gap-4 text-sm text-gray-600 ${ showFilter ? 'flex': 'hidden sm:flex' } `}>
          <ul>
            <p 
              onClick={() => navigate(speciality !== 'General physician' ? '/doctor/General physician' : '/doctor')} 
              className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer mb-3 ${speciality==="General physician" ? "bg-indigo-100 text-black" : ""}`}>
              General Physician
            </p>

            <p 
              onClick={() => navigate(speciality !== 'Gynecologist' ? '/doctor/Gynecologist' : '/doctor')} 
              className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer mb-3 ${speciality==="Gynecologist" ? "bg-indigo-100 text-black" : ""}`}>
              Gynecologist
            </p>

            <p 
              onClick={() => navigate(speciality !== 'Dermatologist' ? '/doctor/Dermatologist' : '/doctor')} 
              className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer mb-3 ${speciality==="Dermatologist" ? "bg-indigo-100 text-black" : ""}`}>
              Dermatologist
            </p>

            <p 
              onClick={() => navigate(speciality !== 'Pediatricians' ? '/doctor/Pediatricians' : '/doctor')} 
              className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer mb-3 ${speciality==="Pediatricians" ? "bg-indigo-100 text-black" : ""}`}>
              Pediatricians
            </p>

            <p 
              onClick={() => navigate(speciality !== 'Neurologist' ? '/doctor/Neurologist' : '/doctor')} 
              className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer mb-3 ${speciality==="Neurologist" ? "bg-indigo-100 text-black" : ""}`}>
              Neurologist
            </p>

            <p 
              onClick={() => navigate(speciality !== 'Gastroenterologist' ? '/doctor/Gastroenterologist' : '/doctor')} 
              className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality==="Gastroenterologist" ? "bg-indigo-100 text-black" : ""}`}>
              Gastroenterologist
            </p>
          </ul>
        </div>

        {/* Right side - Doctors list */}
        <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 gap-y-6">
            {
              filterDoc.length > 0 ? (
                filterDoc.map((item, index) => (
                  <div 
                      onClick={() => navigate(`/appointment/${item._id}`)}
                      className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-500" 
                      key={index}
                  >
                      <img className="bg-blue-50" src={item.image} alt={item.name} />
                      <div className="p-4">
                          <div className="flex items-center gap-2 text-sm text-center text-green-700 mb-1">
                              <div className="w-2 h-2 bg-green-700 rounded-full"></div>
                              <p>Available</p>
                          </div>
                          <p className="font-medium text-lg text-gray-900">{item.name}</p>
                          <p className="text-xs text-gray-500">{item.speciality}</p>
                      </div>
                  </div>
                ))
              ) : (
                <p>No doctors found for this specialty.</p>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Doctor

import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';
import RelatedDoctors from '../components/RelatedDoctors';

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const daysOfWeek = ['SUN', 'MON', 'TUES', 'WED', 'THURS', 'FRI', 'SAT'];

  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState('');

  // Fetch doctor info
  useEffect(() => {
    if (doctors.length > 0) {
      const doc = doctors.find((doc) => doc._id === docId);
      setDocInfo(doc);
    }
  }, [doctors, docId]);

  // Generate available slots
  useEffect(() => {
    if (!docInfo) return;

    let slots = [];
    let today = new Date();

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      let dayIndex = currentDate.getDay(); // Get correct weekday index
      let endTime = new Date(currentDate);
      endTime.setHours(21, 0, 0, 0); // End time at 9 PM

      if (i === 0) {
        currentDate.setHours(currentDate.getHours() >= 10 ? currentDate.getHours() + 1 : 10);
        currentDate.setMinutes(currentDate.getMinutes() >= 30 ? 30 : 0);
      } else {
        currentDate.setHours(10, 0, 0, 0);
      }

      let timeSlots = [];
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        timeSlots.push({ datetime: new Date(currentDate), time: formattedTime });
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      if (timeSlots.length > 0) {
        slots.push({ day: daysOfWeek[dayIndex], date: currentDate.getDate(), slots: timeSlots });
      }
    }

    setDocSlots(slots);
  }, [docInfo]);

  return docInfo && (
    <div>
      {/* Doctor Info Section */}
      <div className='flex flex-col sm:flex-row gap-4'>
        <div>
          <img className='bg-green-500 w-full sm:max-w-72 rounded-lg' src={docInfo.image} alt="" />
        </div>
        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
          <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>
            {docInfo.name} <img className='w-5' src={assets.verified_icon} alt="" />
          </p>
          <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
            <p>{docInfo.degree} - {docInfo.speciality}</p>
            <button className='py-0.5 px-2 border text-xs rounded-full'>{docInfo.experience}</button>
          </div>
          <div>
            <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>
              About <img src={assets.info_icon} alt="" />
            </p>
            <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{docInfo.about}</p>
          </div>
          <div>
            <p className='text-gray-500 font-medium mt-4'>
              Appointment Fee: <span className='text-gray-600'>{currencySymbol}{docInfo.fees}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Booking Slots Section */}
      <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
        <p>Booking Slots</p>

        {/* Days Scroll */}
        <div className='flex gap-3 items-center w-full overflow-x-auto mt-4 pb-2'>
          {docSlots.length > 0 && docSlots.map((item, index) => (
            <div
              key={index}
              onClick={() => docSlots[index]?.slots?.length > 0 && setSlotIndex(index)}
              className={`text-center py-6 min-w-16 rounded-full cursor-pointer 
              ${slotIndex === index ? 'bg-green-500 text-white' : 'border border-gray-200'}
              ${docSlots[index]?.slots?.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <p>{item.day}</p>
              <p>{item.date}</p>
            </div>
          ))}
        </div>

        {/* Time Slots Scroll */}
        <div className='flex items-center w-full overflow-x-auto gap-3 mt-4 pb-2'>
          {docSlots.length > 0 && docSlots[slotIndex]?.slots?.length > 0 ? (
            docSlots[slotIndex].slots.map((item, index) => (
              <p
                key={index}
                onClick={() => setSlotTime(item.time)}
                className={`text-sm font-light px-5 py-2 rounded-full cursor-pointer 
                  ${item.time === slotTime ? 'bg-green-500 text-white' : 'text-gray-500 border border-gray-400'}`}
              >
                {item.time.toLowerCase()}
              </p>
            ))
          ) : (
            <p className="text-gray-500">No available slots for {docSlots[slotIndex]?.day}</p>
          )}
        </div>
        <button className='bg-green-500 text-white text-sm font-light px-14 py-3 rounded-full my-6'>Book An Appointment</button>
      </div>
      <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
    </div>
  );
};

export default Appointment;

import React from 'react'
import img1 from '../Images/books-icon.svg'
import img2 from '../Images/student-icon.svg'
import img3 from '../Images/credit-card-icon.svg'
function Student() {
  return (
    <div className='w-100 h-auto flex flex-wrap flex-col items-center text-center mb-8'>
        <div className='w-full h-auto flex flex-wrap flex-col items-center text-center pt-8'>
            <p className='text-indigo-800 font-bold text-2xl md:text-4xl'>"Pure Hardwork, No Shortcuts!"</p>
            <div className='w-36 h-1 border-b-4 border-yellow-400 mt-2'></div>
        </div>
        <div className='w-full flex flex-wrap justify-evenly my-4'>
            <div className='w-46 flex flex-col items-center'>
                <img className='w-44 h-44' src={img1} alt="" />
                <p className='text-3xl font-bold text-white'>600+</p>
                <p className='text-3xl font-bold text-gray-500'>Different Courses</p>
            </div>
            <div className='w-46 flex flex-col items-center'>
                <img className='w-44 h-44' src={img2} alt="" />
                <p className='text-3xl font-bold text-white'>7,00,000+</p>
                <p className='text-3xl font-bold text-gray-500'>Students Enrolled</p>
            </div>
            <div className='w-46 flex flex-col items-center'>
                <img className='w-44 h-44' src={img3} alt="" />
                <p className='text-3xl font-bold text-white'>10,000+</p>
                <p className='text-3xl font-bold text-gray-500'>Successful Transition</p>
            </div>
        </div>
    </div>
  )
}

export default Student
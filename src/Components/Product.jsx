import React from 'react'
import img1 from '../Images/neurolab-icon.svg'
import img2 from '../Images/jobPortal-icon.svg'
import img3 from '../Images/Internship-icon.svg'
import img4 from '../Images/affilitatePortal-icon.svg'
import img5 from '../Images/halloffame-icon.svg'
function Product() {
  return (
    <div className='h-auto w-100 flex flex-wrap flex-col'>
        <div className='w-full h-auto flex flex-wrap flex-col items-center text-center'>
            <p className='text-indigo-800 font-bold  text-2xl md:text-4xl'>Our Products</p>
            <div className='w-36 h-1 border-b-4 border-yellow-400 mt-2'></div>
        </div>
        <div className='h-auto w-100 flex flex-wrap justify-evenly mt-6'>
            <div className='w-[350px] h-auto flex flex-col items-center m-4 p-3 hover:border'>
               <img className='h-44 w-44' src={img1} alt="" />
               <h2 className='text-3xl font-bold text-indigo-200 text-center'>PW Skills Lab</h2>
               <p className='text-l text-center text-slate-400 font-bold mt-3'>Supercharge your project development with our robust lab.</p>
            </div>
            <div className='w-[350px] h-auto flex flex-col m-4 p-3 hover:border'>
               <img src={img2} alt="" />
               <h2 className='text-3xl font-bold text-indigo-200 text-center'>Job Portal</h2>
               <p className='text-l text-center text-slate-400 font-bold mt-3'>Use exceptional templates for a stand-out resume minus the sign up process.</p>
            </div>
            <div className='w-[350px] h-auto flex flex-col m-4 p-3 hover:border'>
               <img src={img3} alt="" />
               <h2 className='text-3xl font-bold text-indigo-200 text-center'>Experience portal</h2>
               <p className='text-l text-center text-slate-400 font-bold mt-3'>PW Skills's self-paced experience portal prioritises hands-on training with 570+ internship projects.</p>
            </div>
            <div className='w-[350px] h-auto flex flex-col m-4 p-3 hover:border'>
               <img src={img4} alt="" />
               <h2 className='text-3xl font-bold text-indigo-200 text-center'>Become an affiliate</h2>
               <p className='text-l text-center text-slate-400 font-bold mt-3'>Explore affiliate marketing opportunities with PW Skills and attain financial freedom.</p>
            </div>
            <div className='w-[350px] h-auto items-center flex flex-col m-4 p-3 hover:border'>
               <img className='h-44 w-44' src={img5} alt="" />
               <h2 className='text-3xl font-bold text-indigo-200 text-center'>Hall of fame</h2>
               <p className='text-l text-center text-slate-400 font-bold mt-3'>Our student placements and 100K+ career transitions speak volumes about our courses.</p>
            </div>
        </div>
    </div>
  )
}

export default Product
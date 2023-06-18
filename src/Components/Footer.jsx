import React from 'react'
import logo from '../Images/PWSkills-logo.png'
function Footer() {
  return (
    <div className='bg-[#161a1d] w-full h-auto md:flex flex-wrap items-center justify-evenly pt-14'>
      <div className='col md:h-96'>
        <img className='w-40' src={logo} alt='' />
        <p className='text-[16px] text-slate-50 md:ml-3 md:my-3 ml-3 my-3'>
          <span className='font-bold'>Email us :</span>support@pwskills.com
        </p>
        <p className='text-[16px] text-slate-50 ml-3'>
          <span className='font-bold'>Call us :</span>+91 7666122288
        </p>
        <img
          className='w-40 h-40 mt-4'
          src='https://pwskills.com/images/iso-9001-2015.svg'
          alt=''
        />
      </div>
      <div className='col ml-4 md:h-96'>
        <div className='mb-6'>
          <p className='text-2xl font-semibold text-slate-50'>PW Skills</p>
          <p className='md:w-[250px] w-24 border-b-4 border-yellow-700 mt-2'></p>
        </div>
        <div className='md:w-[250px] md:flex md:justify-between'>
          <div>
            <p className='text-[16px] text-slate-50'>About us</p>
            <p className='text-[16px] text-slate-50'>FAQs</p>
            <p className='text-[16px] text-slate-50'>Privacy policy</p>
          </div>
          <div>
            <p className='text-[16px] text-slate-50'>About us</p>
            <p className='text-[16px] text-slate-50'>FAQs</p>
            <p className='text-[16px] text-slate-50'>Privacy policy</p>
          </div>
        </div>
      </div>
      <div className='col ml-4 b-10 md:h-96'>
        <div className='mb-6'>
          <p className='text-2xl font-semibold text-slate-50'>Products</p>
          <p className='w-[100px] border-b-4 border-yellow-700 mt-2'></p>
        </div>
        <div className=''>
          <p className='text-[16px] text-slate-50'>PW Skills Lab</p>
          <p className='text-[16px] text-slate-50'>Job Portal</p>
          <p className='text-[16px] text-slate-50'>Experience portal</p>
          <p className='text-[16px] text-slate-50'>Become an affiliate</p>
          <p className='text-[16px] text-slate-50'>Hall of fame</p>
        </div>
      </div>
    </div>
  );
}

export default Footer
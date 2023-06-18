import React from 'react'

function Header() {
  return (
    <div className='w-full h-14 bg-indigo-200 flex justify-between px-4 md:px-10 items-center'>
      <div className='text-2xl font-bold text-indigo-700'>PW Skills</div>
      <ul className='md:flex hidden font-semibold'>
        <li className='mx-[10px] cursor-pointer'>Home</li>
        <li className='mx-[10px] cursor-pointer'>About</li>
        <li className='mx-[10px] cursor-pointer'>Contact</li>
      </ul>
      <div className='hidden md:block px-2 py-2 bg-indigo-700 rounded-lg  cursor-pointer text-white'>login/signup</div>
    <div className='md:hidden'>
        <a className='text-4xl' href="#">&#8801;</a>
    </div>
    </div>
  );
}

export default Header
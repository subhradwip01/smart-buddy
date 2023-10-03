import React from 'react'
import { Link } from 'react-router-dom';
import { Icons } from '../UI/Icons';
export const Navbar = () => {
    const navabrItem = [
        {
          name: 'Contact us',
          link: '',
        },
        {
          name: 'FAQs',
          link: '',
        },
        {
          name: 'Feedback',
          link: '',
        },
      ];
  return (
    <nav className='flex w-full justify-between items-center px-5 py-3 border border-b-[1px] border-b-slate'>
     
        {/* Logo */}
        <Link to={"/"} className="flex items-center">
          <Icons.reading className="mr-2 h-4 w-4"/> 
          <p className="font-bold">
            SmartBuddy
          </p>
        </Link>
        <div className="flex items-center gap-5">
          {navabrItem.map(item=>(
            <p>{item.name}</p>
          ))}
          <button className='text-white bg-black text-center rounded-full h-[25px] w-[25px] pt-[0.5px]'>S</button>

        </div>
    </nav>
  )
}

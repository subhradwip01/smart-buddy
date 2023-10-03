import React, { useState } from 'react'
import { Icons } from '../UI/Icons'
import { Link, useLocation } from 'react-router-dom'

export const Sidebar = () => {
   const [isHover,setIsHover] = useState(false);
   const location = useLocation();
  const menuItem = [
    {
        name:"Dashboard",
        to:"/",
        IconComp:Icons.analytic
    },
    {
        name:"Take Exam",
        to:"/exam",
        IconComp:Icons.exam
    },
    {
        name:"Talk To Expert",
        to:"/talk-to-expert",
        IconComp:Icons.brain
    }
  ]
  return (
    <aside className='flex flex-col px-3 gap-3 py-3 border border-r-[1px] border-r-slate h-screen justify-between '>
        <div className='space-y-2'>
        {menuItem.map(({name,to,IconComp})=>(
            <Link  key={name} id={name} to={to} className={`group flex justify-start items-center px-2 py-2 ${location.pathname===to ? ' bg-black text-white rounded-md ' : ' hover:bg-black hover:text-white hover:rounded-md '}`} onMouseEnter={(e)=>setIsHover(e.target.id)} onMouseLeave={()=>setIsHover(null)}>
                {<IconComp  className="mr-2 h-4 w-4" fill={(location.pathname===to || isHover==name) ? "white" : "black"}/>}
                <p>{name}</p>
            </Link>
        ))}
        </div>
        <button className='px-2 py-3 border border-[#FF3333] border-[2px] text-[#FF3333] mb-12 rounded-md'>Logout</button>
    </aside>
  )
}

export default Sidebar
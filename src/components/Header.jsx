import React, { useState } from 'react';
import { BoltIcon, Bars4Icon,XMarkIcon } from '@heroicons/react/24/solid'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {

    const [isOpen,setIsOpen]=useState(true);

    return (
        <div className=' flex justify-between items-center bg-[#9cc5ec] p-4 rounded-b-lg '>
            <Link to='/'><div className="flex items-center gap-2">
                <BoltIcon className='w-[30px] text-[#333333]'/> <h1 className='text-2xl font-bold text-[#333333]'>next<span className='text-white'>Page</span></h1>
            </div></Link>
            <ul className={`flex items-center gap-2 text-xl font-medium absolute sm:static duration-500 flex-col sm:flex-row bg-[#9cc5ec] p-8 sm:p-0 rounded-br-lg ${isOpen? ' -top-48 left-0 ' : 'top-[58px] left-0 z-50 ' } `}>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/books'>Books</NavLink>
                </li>
                <li>
                    <NavLink to='/about'>About</NavLink>
                </li>
            </ul>
            <div  onClick={()=>setIsOpen(!isOpen)} className='sm:hidden'>
            { isOpen?<Bars4Icon className='w-[30px] text-white '></Bars4Icon>
            :<XMarkIcon className='w-[30px] text-white '></XMarkIcon> }
            </div>
        </div>
    );
};

export default Header;
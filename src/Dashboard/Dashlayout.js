import React from 'react';
import { Outlet } from 'react-router-dom';
import img1 from './stack.jpg'

const Dashlayout = () => {
    return (
        <div className='grid grid-cols-12 gap-2 mx-5'>
            <div className=' col-span-3 '>
               <div className='flex items-center'>
                <img className='w-24 h-24' src={img1} alt=""/>
                <h1 className='text-4xl font-bold text-slate-500'>Stack</h1>
               </div>
               <div>
                <p className='text-xl tracking-normal font-medium text-slate-400'>PAGES</p>
               </div>
            </div>
            <div className=' col-span-9 '>
                <Outlet/>
            </div>
        </div>
    );
};

export default Dashlayout;
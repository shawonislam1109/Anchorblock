import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import img1 from './stack.jpg'
import { RxDashboard } from 'react-icons/rx';
import { CiUser } from 'react-icons/ci';
import { RiFilePaper2Fill } from "react-icons/ri";

const Dashlayout = () =>
{
    return (
        <div className='grid grid-cols-12 gap-2 mx-5'>
            <div className=' col-span-3 '>
                <div className='flex items-center'>
                    <img className='w-24 h-24' src={ img1 } alt="" />
                    <h1 className='text-4xl font-bold text-slate-500'>Stack</h1>
                </div>
                <div className='ml-3'>
                    <p className='mt-9  text-xl tracking-normal font-medium text-slate-400'>PAGES</p>
                    <div>
                        <div className='flex items-center p-3 hover:bg-slate-200 rounded-md focus:bg-slate-200'>
                            <RxDashboard className='text-xl mr-3 text-slate-400'/>
                        <Link to='/dashboard' className='text-xl font-semibold text-slate-400 '>Dashboard</Link>
                        </div>
                        <div className='flex items-center p-3 hover:bg-slate-200 rounded-md'>
                        <CiUser className='text-2xl mr-2 text-slate-400'/>
                        <Link to='/userlist' className='text-xl font-semibold text-slate-400'>Users</Link>
                        </div>
                        <div className='flex items-center p-3 hover:bg-slate-200 rounded-md'>
                            <RiFilePaper2Fill className='text-xl mr-3 text-slate-400'/>
                        <Link className='text-xl font-semibold text-slate-400'>Sales</Link>
                        </div>

                    </div>
                </div>
            </div>
            <div className=' col-span-9 '>
                <Outlet />
            </div>
        </div>
    );
};

export default Dashlayout;
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaRegBell } from "react-icons/fa";
import image from './profile.jpg'
import { Link } from 'react-router-dom';

const UserList = () =>
{
    const { isLoading, error, data } = useQuery({
        queryKey: [ 'list' ],
        queryFn: async () =>
        {
            const res = await fetch('https://reqres.in/api/users?page=2');
            const data = res.json()
            return data
        }
    })
    const userdata = data?.data;
    console.log(userdata)
    return (
        <div>
            <div className='flex justify-between items-center'>
                <div className="form-control mt-8 flex ">
                    <input type="text" placeholder="Search" className="input           
                    input-bordered rounded-md w-96 " />
                </div>
                <div className='flex justify-center items-center'>
                    <Link to='/signin' className='text-xl mr-3'>SignIn</Link>
                    <Link to='/register' className='text-xl mr-3'>SignUp</Link>
                    <FaRegBell className='text-3xl mr-3' />
                    <div className="avatar">
                        <div className="w-12 rounded-full">
                            <img src={ image } alt='' />
                        </div>

                    </div>
                </div>
            </div>
            <h1 className='text-4xl font-semibold text-slate-500 my-8'>Users List</h1>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head*/ }
                        <thead>
                            <tr>
                                <th className='text-xl font-semibold text-slate-500'>#ID</th>
                                <th className='text-xl font-semibold text-slate-500'>User</th>
                                <th className='text-xl font-semibold text-slate-500'>Email</th>
                                <th className='text-xl font-semibold text-slate-500'>Options </th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */ }

                            {
                                userdata && userdata.map((data, i) => <tr>
                                    <th className='text-xl font-semibold text-slate-500'>{ i + 1 }</th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={ data.avatar } alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className='text-xl font-semibold text-slate-500'>{ data.first_name }</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='text-xl font-semibold text-slate-500'>{ data.email }</td>
                                    <td className='text-2xl font-bold text-slate-500 cursor-pointer'>...</td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default UserList;
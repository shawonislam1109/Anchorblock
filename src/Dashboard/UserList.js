import { useQuery } from '@tanstack/react-query';
import React from 'react';
import MapingUser from './MapingUser';

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
   const userdata = data?.data ; 
   console.log(userdata)
    return (
        <div>
            <h1>this is the user list section on the way for the seciton</h1>
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
                              userdata && userdata.map((data, i) =>  <tr>
                              <th className='text-xl font-semibold text-slate-500'>{i+1}</th>
                              <td>
                              <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={data.avatar} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className='text-xl font-semibold text-slate-500'>{data.first_name}</div>
            </div>
          </div>
                              </td>
                              <td className='text-xl font-semibold text-slate-500'>{data.email}</td>
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
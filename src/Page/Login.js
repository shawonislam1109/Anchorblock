import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { singInuser } from '../Redux/AuthSlice';

const Login = () => {
    {
        const [ error, setError ] = useState('');
        const { register, formState: { errors }, handleSubmit , reset} = useForm();
        const dispatch = useDispatch();
    
        const [checked , setChecked] = useState(false) ; 
    
        const loginSubmit = (data) =>
        {
           dispatch(singInuser(data))
           reset() ; 
         const output =   localStorage.getItem('token')
         console.log(output)
        }
    
        const acceptHandle =(event) => {
            setChecked(event.target.checked)
        }
    
        return (
            <div className=' flex  justify-center items-center mt-9'>
                <div className='w-96 md:w-1/2 p-9 rounded-md shadow-sm '>
                    <h1 className='text-3xl text-center font-bold text-slate-600'> Getting started  </h1>
                    <p className='text-center mt-3 font-semibold text-slate-600'>Welcome back you've been  missed</p>
                    <div className="grid  md:grid-cols-2 gap-4 w-full my-9">
                        <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center text-xl font-semibold text-slate-400">Sign Up with Google</div>
                        <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center text-xl font-semibold text-slate-400">Sign Up with Apple ID</div>
                    </div>
                    <div className=" font-semibold text-2xl text-slate-600 text-center">OR</div>
                    <form onSubmit={ handleSubmit(loginSubmit) }>
                        <div className="form-control ">
    
                            <input { ...register("email",
                                { required: "Please enter a valid email address" }
                            ) } type="text" placeholder="@ Your email" className="input input-bordered input-secondary w-full my-3 py-8 text-xl rounded-lg" />
                            { errors.email && <p role='alert' className='text-red-500 mt-3'>{ errors.email?.message }</p> }
                        </div>
    
    
                        <div className="form-control w-full ">
                            <input { ...register("password",
                                {
                                    required: "password  is required",
                                    minLength: { value: 6, message: ' you password must be 6 character & longer ' },
                                    // pattern: { value: /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/, message: 'password must be strong' }
                                },
    
                            ) } type="password" placeholder="Create Password" className="input  w-full mt-3 py-8 text-xl rounded-lg" />
    
                            { errors.password && <p role='alert' className='text-red-500'>{ errors.password?.message }</p> }
    
                        </div>
                        <div>
                            { error && <p className='text-red-500'>{ error }</p> }
                        </div>
                        <div className=" flex justify-start items-center">
                        
                                <input onClick={acceptHandle} type="checkbox"  className="checkbox rounded-lg checkbox-lg" />
                            <p className='text-start ml-5 text-xl font-semibold text-slate-500 my-5'>Remember me</p>
                       
                        </div>
                        
                        {
                            checked ?<input  className='w-full  font-bold bg-blue-600 hover:bg-blue-700 cursor-pointer mt-4 text-white text-center p-5 rounded-lg' value='Sign In' type="submit" />  : <input disabled  className='w-full  font-bold bg-blue-300 mt-4 text-white text-center p-5 rounded-lg cursor-not-allowed' value='Sign In' type="submit" />  
                        }
                    </form>
                    <h1 className='text-center mt-5 text-xl text-slate-500'>Don't have account yet? <Link className='text-blue-600' to='/register'>Sign Up</Link></h1>
                </div>
            </div>
        );
    };
    
};

export default Login;
import React from 'react'
import register from '../assets/register.jpg';
import register2 from '../assets/register2.jpg';
import register3 from '../assets/register3.jpg';
import register4 from '../assets/register4.jpg';
import register5 from '../assets/register5.jpg';
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';

function Register() {
    return (
        <>
            <div className='w-full h-screen flex flex-col justify-start items-center relative overflow-hidden'>
                <Link to='/'><p className='absolute top-10 left-8 text-white z-30 flex justify-center items-center gap-2 cursor-pointer'><IoIosArrowBack />Go Back</p></Link>
                <div className='w-full py-10 lg:px-10 h-full flex flex-col justify-center relative overflow-hidden items-center bg-black'>
                    <img src={register} className='animate-slideUp h-full w-full object-cover mb-7 rounded-xl' />
                    <img src={register2} className='animate-slideUp h-full w-full object-cover mb-7 rounded-xl' />
                    <img src={register3} className='animate-slideUp h-full w-full object-cover mb-7 rounded-xl' />
                    <img src={register4} className='animate-slideUp h-full w-full object-cover mb-7 rounded-xl' />
                    <img src={register5} className='animate-slideUp h-full w-full object-cover mb-7 rounded-xl' />

                    <div className='w-full h-full absolute bottom-0 bg-gradient-to-t from-black to-transparent'></div>

                    <div className='w-full h-full lg:justify-end flex px-10 py-5 flex-col justify-center items-center absolute bottom-4'>
                        <h1 className='text-lg font-Montserrat font-semibold text-white'>Get started with</h1>
                        <span className='text-2xl lg:text-4xl font-Montserrat tracking-widest font-bold bg-gradient-to-br from-purple-400 via-pink-400 to-orange-600 bg-clip-text text-transparent'>DOWNTOWN.IO</span>
                        <form className='w-full md:w-[60%] lg:w-[40%] flex flex-col gap-3 h-auto py-4'>
                            <div className='w-full flex flex-col justify-center items-start gap-1'>
                                <label htmlFor="name" className='text-white'>Enter Full Name</label>
                                <input type="text" placeholder='Ex. John Doe' className=' w-full outline-none bg-white px-3 py-1 lg:py-2 rounded-lg' />
                            </div>
                            <div className='w-full flex flex-col justify-center items-start gap-1'>
                                <label htmlFor="email" className='text-white'>Enter Email Address</label>
                                <input type="email" placeholder='Ex. john@gmail.com' className=' w-full outline-none bg-white px-3 py-1 lg:py-2 rounded-lg' />
                            </div>
                            <div className='w-full flex flex-col justify-center items-start gap-1'>
                                <label htmlFor="password" className='text-white'>Enter a Password</label>
                                <input type="text" placeholder='abc123@#' className=' w-full outline-none bg-white px-3 py-1 lg:py-2 rounded-lg' />
                            </div>
                            <button className='w-full font-Montserrat bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400 text-white py-2 rounded-md cursor-pointer hover:opacity-85 duration-200 ease-in-out'>Register</button>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register

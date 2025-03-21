import React, { useState } from 'react'
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx"; import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import Dropdown from '../components/Dropdown.jsx';

function About() {

    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const handleMenuVisible = () => {
        setIsMenuVisible(!isMenuVisible);
    }

    return (
        <>
            <div className='w-full bg-black relative h-auto flex flex-col justify-center items-center'>

                <div className={`md:hidden ${isMenuVisible ? "-translate-y-0" : "-translate-y-full"} z-40 w-full h-screen bg-black absolute duration-500 transition-transform ease-in-out top-0 left-0 flex flex-col text-white justify-center items-start px-10 gap-5`}>
                   <Link to='/about-us' className='text-3xl font-Montserrat cursor-pointer'>About</Link>
          <Link to='/nearby-places' className='text-3xl font-Montserrat cursor-pointer'>Nearby Locations</Link>
          <Link to='/upcoming/events' className='text-3xl font-Montserrat cursor-pointer'>Events</Link>
          <Link to='/plan-trip' className='text-3xl font-Montserrat cursor-pointer'>Plan My Trip</Link>
                </div>

                <Link to='/' className='mt-10 px-10 flex justify-start items-center gap-2 cursor-pointer text-white w-full bg-transparent'><IoIosArrowBack /> Go back</Link>

                <div className='w-full md:w-[60%] lg:w-[40%] h-auto py-8 flex justify-center items-center'>
                    <div className={`w-[90%] z-50 rounded-full backdrop-blur-md bg-white/20 px-5 py-5 flex justify-between md:justify-center items-center ${isMenuVisible ? "bg-transparent" : ""}`}>
                        <p className={`font-Montserrat tracking-widest z-20 font-semibold ${isMenuVisible ? "text-white" : "text-white"} duration-300 ease-in-out z-50`}>DOWNTOWN-IO</p>
                        <span className={`cursor-pointer md:hidden p-3 rounded-full duration-300 ease-in-out ${isMenuVisible ? "bg-transparent" : "bg-white"} z-50 relative`} onClick={handleMenuVisible}>{isMenuVisible ? <span><RxCross1 className='text-lg font-bold text-white z-50' /></span> : <span><RiMenu3Fill className='text-lg font-bold text-black' /></span>}</span>
                    </div>
                </div>

                <div className='w-[70%] border-b-[1.5px] border-gray-500 h-auto py-4 mb-10 flex flex-col justify-center items-center bg-black'>
                    <h2 className='bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent text-center text-2xl lg:text-4xl font-Montserrat font-semibold'>About Us</h2>
                </div>

                <div className='min-h-screen w-full lg:w-[60%] px-10 py-10 bg-black'>
                    <p className='text-white font-Montserrat text-sm'>Welcome to DOWNTOWN.IO, your ultimate travel and local discovery companion! Our mission is to enhance your journey by providing personalized recommendations and real-time information, making your experience smoother, more enjoyable, and stress-free.
                        We understand that every traveler has unique needs, which is why we offer a range of features designed to cater to both spontaneous explorers and well-planned adventurers.
                    </p>

                    <h1 className='text-white font-semibold mt-10'>What we offer : </h1>

                    <p className='text-white font-Montserrat text-sm mt-5'>Nearby Places: Discover exciting places based on your current location or any specific area. Whether you're looking for hidden gems or famous landmarks, we've got you covered.</p>
                    <p className='text-white font-Montserrat text-sm mt-5'>Upcoming Events: Stay in the know by browsing upcoming events happening near you or at any destination you're interested in. Never miss out on local festivals, concerts, or community gatherings!</p>
                    <p className='text-white font-Montserrat text-sm mt-5'>Local Services: Need an electrician, mechanic, or doctor? Quickly find and access trusted local services to help you when you need them most.</p>
                    <p className='text-white font-Montserrat text-sm mt-5'>Personalized Trip Planner: Plan your dream trip with our easy-to-use tool. Simply fill in your details like source location, destination, budget, and travel dates, and get a comprehensive, day-wise itinerary along with a list of recommended hotels. It's your all-in-one travel guide at your fingertips.</p>
                    
                    <p className='text-white font-Montserrat text-sm mt-10'>We are committed to making your travel experience seamless and memorable, offering tailored solutions to explore the world around you while keeping convenience in mind. Let us help you explore the local, plan the perfect getaway, and ensure you make the most of every moment.
                        <br></br><br></br>
                        Join us today and start your next adventure!</p>
                </div>

                <div className='w-full h-20 bg-black'>

                </div>

                <div className={`w-full h-auto bg-zinc-900 flex flex-col justify-between pt-5 pb-10 items-center gap-4 ${isMenuVisible ? "hidden" : "block"}`}>
                    <h1 className='mb-5 bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent w-[70%] text-2xl font-Montserrat font-bold text-center tracking-widest py-2 border-b-[1.5px] border-gray-500'>DOWNTOWN.IO</h1>
                    <Link to='/about-us' className='text-white text-[10px] lg:text-sm font-Montserrat cursor-pointer'>About US</Link>
                    <Link to='/nearby-places' className='text-white text-[10px] lg:text-sm font-Montserrat cursor-pointer'>Nearby Locations</Link>
                    <Link to='/upcoming/events' className='text-white text-[10px] lg:text-sm font-Montserrat cursor-pointer'>Events</Link>
                    <Link to='/plan-trip' className='text-white text-[10px] lg:text-sm font-Montserrat cursor-pointer'>Plan My Trip</Link>
                </div>
            </div>
        </>
    )
}

export default About

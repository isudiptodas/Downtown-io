import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';
import EventBox from '../components/EventBox';

function UpcomingEvents() {

    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [isSearching, setIsSearching] = useState(false);
    const [events, setEvents] = useState([]);
    const [place, setPlace] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [userCity, setUserCity] = useState('');
    const [userCountry, setUserCountry] = useState('');
    const [userState, setUserState] = useState('');
    const [userNeighbourhood, setUserNeighbourhood] = useState('');

    const handleMenuVisible = () => {
        setIsMenuVisible(!isMenuVisible);
    }

    const convertToPlace = async (lat, lon) => {

        const openCageApi = import.meta.env.VITE_GEOCODING_API_KEY;
        const openCageUrl = `https://api.opencagedata.com/geocode/v1/json?q=${lat},${lon}&key=${openCageApi}`;

        try {
            const res = await axios.get(openCageUrl);
            const address = res.data.results[0].components
            // console.log(res.data.results[0].components);
            setUserCity(address.city);
            setUserCountry(address.country);
            setUserNeighbourhood(address.neighbourhood);
            setUserState(address.state);
            setPlace(address.city);

            // setTimeout(() => {
            //     console.log(userState, userCity, userCountry, userNeighbourhood);
            // },3000);
        }
        catch (err) {
            console.log(err.message);
        }
    }

    const fetchEvents = async (e) => {
        e.preventDefault();

        if (place === '') {
            toast.error('Place is empty');
            return;
        }

        try {

            setIsSearching(true);
            const response = await axios.post('https://downtown-io.onrender.com/api/events',
                {
                    location: userCity || place
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
            );

            if (response.data.success) {
                const result = response.data.events.events_results
                // console.log(result);
                setEvents(result);
            }
        }
        catch (err) {
            console.log(err.message);
        }
        finally {
            setIsSearching(false);
        }

    }

    const fetchLocationEvents = async (e) => {
        e.preventDefault();

        try {
            navigator.geolocation.getCurrentPosition((pos) => {
                setLatitude(pos.coords.latitude);
                setLongitude(pos.coords.longitude);
            });

            convertToPlace(latitude, longitude)
        }
        catch (err) {
            console.log(err.message);
        }
    }

    return (
        <>
            <div className='w-full bg-black h-auto flex flex-col justify-center items-center'>
                <Toaster />
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
                    <h2 className='bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent text-center text-2xl lg:text-4xl font-Montserrat font-semibold'>Upcoming Events</h2>
                </div>

                <div className='w-full px-5 h-auto'>
                    <p className='text-white text-center font-Montserrat md:text-lg tracking-wider mb-10'>Enter a location to search upcoming events</p>
                </div>

                <div className='w-full lg:w-[80%] px-10 h-auto py-5 flex flex-col lg:flex-row justify-center items-center gap-3'>
                    <input type="text" className='w-full lg:w-[80%] py-2 px-5 text-black bg-white rounded-full' placeholder='For example : Hyderabad' value={place} onChange={(e) => setPlace(e.target.value)} />
                    <button className='w-full lg:w-[20%] hover:opacity-90 duration-200 ease-in-out cursor-pointer bg-gradient-to-br from-purple-400 via-purple-400 to-orange-400 py-2 rounded-full text-white font-bold' onClick={fetchEvents}>{isSearching === true ? "Searching..." : "search"}</button>
                </div>

                <div className='w-full px-10 lg:w-[80%] h-auto'>
                    <button className='w-full hover:opacity-90 duration-200 ease-in-out cursor-pointer bg-transparent border-[1px] border-white py-2 rounded-full text-white font-bold' onClick={fetchLocationEvents}>Search events in your location</button>
                </div>

                <div className={`w-full min-h-72 grid sm:grid-cols-2 lg:grid-cols-3 justify-items-center px-5 py-10 gap-5 lg:gap-8`}>
                    {events.length > 1 && events.map((event, index) => {
                        return <EventBox key={index} Venue={event.venue || ''} Date={event.date || ''} Address={event.address || ''} Img={event.image || ''} Title={event.title || ''} Ticket={event.ticket_info[0] || ''} />
                    })}
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

export default UpcomingEvents

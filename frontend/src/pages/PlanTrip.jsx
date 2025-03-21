import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';
import { IoIosBeer } from "react-icons/io";
import { GiLovers } from "react-icons/gi";
import { MdFamilyRestroom } from "react-icons/md";
import { IoBicycleOutline } from "react-icons/io5";
import { FaRupeeSign } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa6";
import { FaEuroSign } from "react-icons/fa";
import { TbCurrencyDirham } from "react-icons/tb";
import { FaPoundSign } from "react-icons/fa";
import HotelBox from '../components/HotelBox';

function PlanTrip() {

  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [tripType, setTripType] = useState('');
  const [isCurrencyChosen, setIsCurrencyChosen] = useState(false);
  const [currency, setCurrency] = useState('');
  const [budget, setBudget] = useState('');
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [totalPerson, setTotalPerson] = useState('');
  const [duration, setDuration] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [response, setRespopnse] = useState('');
  const [hotels, setHotels] = useState([]);

  // const query = `I want to go on a trip from ${source} to ${destination}. Total ${totalPerson} of us are going and for ${duration} and the trip
  //  type will be of ${tripType} and my budget is ${budget} ${currency}. Now what i want from you is to generate an array of 3 objects,
  //  First object will be a list of all hotels of ${destination} that fits in my budget and the object structure will be like this : {id: 1, hotelName: 'Hotel', hotelImage: 'image', hotelReviews: 21, hotelRating: 4.5, directions: 'google-maps-direction'}.
  //  Second object will be of nearby places that i can visit in ${destination} and the object structure will be : {id: 1, placeName: 'name', description: 'description', rating: 3.7, directions: 'google-maps-direction'}.
  //  Third object will be a day wise plan like on which day i need to visit or do what, like if my trip duration is for only 4-5 days then show me day wise otherwise show me in this way : day 1-4 :  you can go there, visit there, do this etc, day-4-7 : visit there, do this, try this etc.
  //  Now generate this response`;

  const input = `I want to go on a trip from ${source} to ${destination}. Total ${totalPerson} of us are going and for ${duration} and the trip
   type will be of ${tripType} and my budget is ${budget} ${currency}. Now what i want from you is to generate a day wise plan like on which da what should i do and note that if my trip duration is less than 7 days then plan day wise like : day 1, day 2, day 3 like this other wise do it like this : day 1-3 : do this, visit here, try this. day 4-7 : do this, visit here, try this etc.
   Now generate the response. Dont write any extra information at starting like : here is a detailed budget or below i am providing a detailed informationa and trip. No dont use any starting info, just start writing and planning day wise. And also give the response in plain text, no need to o write in bold or underline or anything, just plain text`;

  const handleMenuVisible = () => {
    setIsMenuVisible(!isMenuVisible);
  }

  const generateResponse = async (e) => {

    e.preventDefault();

    if (!source || !destination || !duration || !totalPerson || !tripType || !budget || !startDate || !endDate) {
      toast.error('All fields are required');
      return;
    }

    const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

    const data = {
      contents: [
        {
          parts: [
            {
              text: input,
            },
          ],
        },
      ],
    };

    const headers = {
      'Content-Type': 'application/json',
    }

    try {

      setIsSearching(true);
      const res = await axios.post(url, data, { headers });

      // console.log(res.data.candidates[0].content.parts[0].text);
      setRespopnse(res.data.candidates[0].content.parts[0].text);
      // console.log(res.data);

      const result = await axios.post(`https://downtown-io.onrender.com/api/hotels`, {
        destination,
        currency: currency.toUpperCase(),
        startDate,
        endDate
      });

      if (result.data.success) {
        // console.log(result.data.result.properties);
        setHotels(result.data.result.properties);
      }
    }
    catch (err) {
      // console.log(err.message);
    }
    finally {
      setIsSearching(false);
      setSource('');
      setDestination('');
      setTotalPerson('');
      setDuration('');
      setStartDate('');
      setEndDate('');
      setTripType('');
      setCurrency('');
      setBudget('');
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
          <h2 className='bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent text-center text-2xl lg:text-4xl font-Montserrat font-semibold'>Plan Your Trip</h2>
        </div>

        <div className='w-full px-5 h-auto'>
          <p className='text-white text-center font-Montserrat md:text-lg tracking-wider mb-10'>Help us plan your trip</p>
        </div>

        <div className='w-full md:w-[60%] h-auto py-5 px-10 flex flex-col justify-center items-center gap-4'>
          <div className='w-full h-auto flex flex-col justify-start items-start gap-2 py-2'>
            <label className='text-white font-Montserrat text-[12px]'>Enter source location : </label>
            <input type="text" className='outline-none w-full py-2 px-5 bg-white text-black rounded-full' value={source} placeholder='Starting trip from ...' onChange={(e) => setSource(e.target.value)} />
          </div>

          <div className='w-full h-auto flex flex-col justify-start items-start gap-2 py-2'>
            <label className='text-white font-Montserrat text-[12px]'>Enter destination : </label>
            <input type="text" className='outline-none w-full py-2 px-5 bg-white text-black rounded-full' value={destination} placeholder='Want to go ...' onChange={(e) => setDestination(e.target.value)} />
          </div>

          <div className='w-full h-auto flex flex-col justify-start items-start gap-2 py-2'>
            <label className='text-white font-Montserrat text-[12px]'>How many of you are going ?  </label>
            <input type="number" className='outline-none w-full py-2 px-5 bg-white text-black rounded-full' value={totalPerson} placeholder='For example : 4' onChange={(e) => setTotalPerson(e.target.value)} />
          </div>

          <div className='w-full h-auto flex flex-col justify-start items-start gap-2 py-2'>
            <label className='text-white font-Montserrat text-[12px]'>You are going for how many days ?  </label>
            <input type="text" className='outline-none w-full py-2 px-5 bg-white text-black rounded-full' value={duration} placeholder='For example : 2 days / A week/ A month' onChange={(e) => setDuration(e.target.value)} />
          </div>

          <div className='w-full h-auto flex flex-col justify-start items-start gap-2 py-2'>
            <label className='text-white font-Montserrat text-[12px]'>Enter your trip start date :  </label>
            <input type="text" className='outline-none w-full py-2 px-5 bg-white text-black rounded-full' value={startDate} placeholder='YYYY-MM-DD' onChange={(e) => setStartDate(e.target.value)} />
          </div>

          <div className='w-full h-auto flex flex-col justify-start items-start gap-2 py-2'>
            <label className='text-white font-Montserrat text-[12px]'>Enter your trip end date :  </label>
            <input type="text" className='outline-none w-full py-2 px-5 bg-white text-black rounded-full' value={endDate} placeholder='YYYY-MM-DD' onChange={(e) => setEndDate(e.target.value)} />
          </div>

          <div className='w-full h-auto flex flex-col justify-start items-start gap-2 py-2'>
            <label className='text-white font-Montserrat text-[12px]'>Select your trip type</label>
          </div>

          <div className='w-full h-auto grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-5'>

            <div className={`w-44 sm:w-32 md:w-44 lg:w-40 h-32 cursor-pointer bg-zinc-700 flex flex-col justify-center items-center gap-2 rounded-xl hover:opacity-70 ${tripType === 'solo' ? "border-4 border-blue-600 opacity-90 bg-blue-800" : ""}`} onClick={() => setTripType('solo')}>
              <IoBicycleOutline className='text-4xl text-white font-Montserrat' />
              <p className='text-sm text-white font-Montserrat'>Solo Travel</p>
            </div>

            <div className={`w-44 sm:w-32 md:w-44 lg:w-40 h-32 cursor-pointer bg-zinc-700 flex flex-col justify-center items-center gap-2 rounded-xl hover:opacity-70 ${tripType === 'couple' ? "border-4 border-pink-600 opacity-90 bg-pink-800" : ""}`} onClick={() => setTripType('couple')}>
              <GiLovers className='text-4xl text-white font-Montserrat' />
              <p className='text-sm text-white font-Montserrat'>Couple</p>
            </div>

            <div className={`w-44 sm:w-32 md:w-44 lg:w-40 h-32 cursor-pointer bg-zinc-700 flex flex-col justify-center items-center gap-2 rounded-xl hover:opacity-70 ${tripType === 'friends' ? "border-4 border-emerald-600 opacity-90 bg-emerald-800" : ""}`} onClick={() => setTripType('friends')}>
              <IoIosBeer className='text-4xl text-white font-Montserrat' />
              <p className='text-sm text-white font-Montserrat'>Friends</p>
            </div>

            <div className={`w-44 sm:w-32 md:w-44 lg:w-40 h-32 cursor-pointer bg-zinc-700 flex flex-col justify-center items-center gap-2 rounded-xl hover:opacity-70 ${tripType === 'family' ? "border-4 border-yellow-600 opacity-90 bg-yellow-800" : ""}`} onClick={() => setTripType('family')} >
              <MdFamilyRestroom className='text-4xl text-white font-Montserrat' />
              <p className='text-sm text-white font-Montserrat'>Family</p>
            </div>
          </div>

          <p className='w-full text-start text-white font-Montserrat text-[12px] py-4'>Choose your preffered currency : </p>

          <div className='w-full flex flex-wrap justify-start md:justify-start lg:justify-start gap-3 lg:gap-7 py-5'>
            <div className={`hover:opacity-70 duration-200 ease-in-out cursor-pointer ${currency === 'inr' ? "bg-blue-100 border-2 border-blue-600 text-black" : "text-white"} h-6 py-4 px-3 rounded-lg w-20 flex bg-zinc-600 justify-center items-center gap-2`} onClick={() => { setCurrency('inr'); setIsCurrencyChosen(true) }}>
              <FaRupeeSign />
              <p>INR</p>
            </div>
            <div className={`hover:opacity-70 duration-200 ease-in-out cursor-pointer  ${currency === 'usd' ? "bg-blue-100 border-2 border-blue-600 text-black" : "text-white"} h-6 py-4 px-3 rounded-lg w-20 flex bg-zinc-600 justify-center items-center gap-2`} onClick={() => { setCurrency('usd'); setIsCurrencyChosen(true) }}>
              <FaDollarSign />
              <p>USD</p>
            </div>
            <div className={`hover:opacity-70 duration-200 ease-in-out cursor-pointer ${currency === 'eur' ? "bg-blue-100 border-2 border-blue-600 text-black" : "text-white"} h-6 py-4 px-3 rounded-lg w-20 flex bg-zinc-600 justify-center items-center gap-2`} onClick={() => { setCurrency('eur'); setIsCurrencyChosen(true) }}>
              <FaEuroSign />
              <p>EUR</p>
            </div>
            <div className={`hover:opacity-70 duration-200 ease-in-out cursor-pointer ${currency === 'aed' ? "bg-blue-100 border-2 border-blue-600 text-black" : "text-white"} h-6 py-4 px-3 rounded-lg w-20 flex bg-zinc-600 justify-center items-center gap-2`} onClick={() => { setCurrency('aed'); setIsCurrencyChosen(true) }}>
              <TbCurrencyDirham />
              <p>AED</p>
            </div>
            <div className={`hover:opacity-70 duration-200 ease-in-out cursor-pointer ${currency === 'gbp' ? "bg-blue-100 border-2 border-blue-600 text-black" : "text-white"} h-6 py-4 px-3 rounded-lg w-20 flex bg-zinc-600 justify-center items-center gap-2`} onClick={() => { setCurrency('gbp'); setIsCurrencyChosen(true) }}>
              <FaPoundSign />
              <p>GBP</p>
            </div>
          </div>

          {/* <input type="range" min={0} max="100" className={`range range-xs ${isCurrencyChosen ? "block" : "hidden"}`} /> */}
          <label className={`${isCurrencyChosen ? "block" : "hidden"} text-start w-full text-white text-[12px] font-Montserrat`}>Enter your budget : </label>
          <input type="text" className={`${isCurrencyChosen ? "block" : "hidden"} w-full py-2 bg-white rounded-lg px-5 text-black outline-none`} value={budget} placeholder={currency === 'inr' ? "₹10000" : "" || currency === 'usd' ? "$1000" : "" || currency === 'eur' ? "€500" : "" || currency === 'aed' ? "إ.400" : "" || currency === 'gbp' ? "£720" : ""} onChange={(e) => setBudget(e.target.value)} />
          <button className='py-2 w-full mt-5 bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400 rounded-full text-white font-Montserrat font-bold cursor-pointer hover:opacity-85 duration-200 ease-in-out' onClick={generateResponse}>{isSearching === true ? "Planning... please wait" : "Start planning"}</button>
        </div>

        <h2 className={` ${response === '' ? "hidden" : "block"} w-full text-start lg:text-center px-10 text-white font-Montserrat mb-5 lg:w-[60%] lg:border-b-[1.5px] border-b-zinc-400 lg:py-10 font-bold mt-7 text-3xl lg:text-5xl`}>Here's a breakdown of your trip plan</h2>

        <div className={`w-full lg:w-[60%] min-h-72 overflow-hidden break-words justify-items-center px-10 py-10 gap-5 lg:gap-8`}>
          <pre className='w-full break-words text-white font-Montserrat' style={{
            wordWrap: 'break-word',
            whiteSpace: 'pre-wrap',
          }}>
            {response}
          </pre>
        </div>

        <h2 className={`w-full text-start lg:text-center px-10 text-white font-Montserrat mb-5 lg:w-[40%] lg:border-b-[1.5px] border-b-zinc-400 lg:py-10 font-bold text-3xl lg:text-5xl ${response === '' ? "hidden" : "block"}`}>Hotels</h2>

        <div className={`w-full py-5 h-auto px-5 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-3 md:gap-5 ${response === '' ? "hidden" : "block"}`}>
          {hotels.length > 0 && hotels.map((hotel, index) => {
            return <HotelBox key={index} HotelName={hotel.name} Amenities={hotel.amenities} Review={hotel.reviews} Rate={hotel?.rate_per_night?.lowest || ''} Essential={hotel.essential_info} Image={hotel.images[0].thumbnail} Rating={hotel.overall_rating} Type={hotel.type} Lat={hotel.gps_coordinates?.latitude || ''} Long={hotel.gps_coordinates?.longitude || ''} />
          })}
        </div>

        <h2 className={`w-full text-start lg:text-center px-10 text-white font-Montserrat mb-5 lg:py-10 font-light text-2xl lg:text-3xl ${response === '' ? "hidden" : "block"}`}>Have a safe and unforgettable trip 😊</h2>

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

export default PlanTrip

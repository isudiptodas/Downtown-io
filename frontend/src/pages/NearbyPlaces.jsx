import React, { useState } from 'react'
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import { MdArrowOutward } from "react-icons/md";
import { medical, travel, accomodation, food, financial, lifestyle } from '../nearbyPlaces.js';
import NearbyPlaceBox from '../components/NearbyPlaceBox.jsx';
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import Dropdown from '../components/Dropdown.jsx';

function NearbyPlaces() {

  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [selectedValue, setSelectedvalue] = useState('');

  const handleMenuVisible = () => {
    setIsMenuVisible(!isMenuVisible);
  }

  const openMap = (placename) => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const latitude = pos.coords.latitude;
      const longitude = pos.coords.longitude;

      const url = `https://www.google.com/maps/search/${placename}/@${latitude},${longitude},15z`;

      window.open(url, '_blank');
    });
  }

  const setDropdownValue = (value) => {
    setSelectedvalue(value);
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
          <h2 className='bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent text-center text-2xl lg:text-4xl font-Montserrat font-semibold'>Explore Nearby Places</h2>
        </div>

        <div className='w-1/2 md:w-1/3 flex justify-center items-center h-auto py-2'>
          <Dropdown onSelect={setDropdownValue} />
        </div>


        <div className={`w-full h-auto py-10 bg-black grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 px-6 gap-10 justify-items-center ${isMenuVisible ? "hidden" : "block"}`}>

          {selectedValue === 'travel' && travel.map((place) => {
            return <NearbyPlaceBox key={place.id} placeName={place.placeName} openmap={() => openMap(place.placeName)} />
          })}
          {selectedValue === 'food' && food.map((place) => {
            return <NearbyPlaceBox key={place.id} placeName={place.placeName} openmap={() => openMap(place.placeName)} />
          })}
          {selectedValue === 'accomodation' && accomodation.map((place) => {
            return <NearbyPlaceBox key={place.id} placeName={place.placeName} openmap={() => openMap(place.placeName)} />
          })}
          {selectedValue === 'medical' && medical.map((place) => {
            return <NearbyPlaceBox key={place.id} placeName={place.placeName} openmap={() => openMap(place.placeName)} />
          })}
          {selectedValue === 'financial' && financial.map((place) => {
            return <NearbyPlaceBox key={place.id} placeName={place.placeName} openmap={() => openMap(place.placeName)} />
          })}
          {selectedValue === 'lifestyle' && lifestyle.map((place) => {
            return <NearbyPlaceBox key={place.id} placeName={place.placeName} openmap={() => openMap(place.placeName)} />
          })}

        </div>

        <div className='h-64 lg:h-44 w-full bg-black'>

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

export default NearbyPlaces

import React from 'react'
import { MdArrowOutward } from "react-icons/md";

function NearbyPlaceBox({placeName, openmap}) {
  return (
    <>
      <div className='bg-zinc-800 h-36 w-40 px-5 lg:w-56 rounded-lg hover:opacity-85 duration-300 ease-in-out hover:scale-95 flex flex-col justify-center items-center gap-4'>
            <p className='text-white text-center font-Montserrat capitalize text-sm lg:text-lg'>{placeName}</p>
            <button className='w-full cursor-pointer hover:opacity-80 duration-200 ease-in-out bg-white text-black flex justify-center items-center gap-2 rounded-full py-2' onClick={openmap}>Visit <MdArrowOutward/></button>
      </div>
    </>
  )
}

export default NearbyPlaceBox

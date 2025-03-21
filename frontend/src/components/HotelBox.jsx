import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";
import { RiDirectionLine } from "react-icons/ri";

function HotelBox({Type, HotelName, Image, Rating, Review, Amenities, Essential, Rate, Lat, Long}) {

    const [type, setType] = useState(Type || 'Type unknown');
    const [hotelName, setHotelName] = useState(HotelName);
    const [image, setImage] = useState(Image || '');
    const [rating, setRating] = useState(Rating || '');
    const [review, setReview] = useState(Review || '');
    const [amenities, setAmenities] = useState(Amenities || []);
    const [essentials, setEssentials] = useState(Essential || []);
    const [rate, setRate] = useState(Rate || '');
    const [lat, setLat] = useState(Lat || '');
    const [long, setLong] = useState(Long || '');

    const revisedRating = parseFloat(rating.toFixed(1));

    const openMap = () => {
        const mapUrl = `https://www.google.com/maps?q=${lat},${long} (${hotelName})&hl=en`;
        window.open(mapUrl, '_blank');
    }

    return (
        <>
            <div className='w-full bg-zinc-800 h-auto mb-5 md:w-[360px] xl:w-[300px] flex xl:flex-col justify-between overflow-hidden items-center rounded-xl'>

                {/*Image*/}
                <div className='w-[40%] h-72 xl:w-full xl:h-60 overflow-hidden relative'>
                    <span className='text-black bg-white px-4 py-1 rounded-md shadow-lg absolute top-3 left-3 text-[12px]'>{type}</span>
                    <span className={`text-black bg-white px-4 py-1 rounded-md shadow-lg absolute top-3 right-3 text-[12px] ${rate === '' ? "hidden" : "block"}`}>{rate}</span>
                    <img src={image} className='h-full w-full object-cover' />
                </div>

                <div className='w-[60%] h-full xl:w-full xl:h-[60%] flex flex-col justify-start lg:justify-between items-start py-4 px-3'>
                    <p className='text-white text-start font-Montserrat font-bold text-lg'>{hotelName}</p>
                    <p className='text-gray-300 text-start font-Montserrat font-light text-sm flex justify-center items-center gap-2'><FaStar className='text-yellow-400' /> {revisedRating} ({review}) reviews</p>

                    <div className={`w-full py-2 h-auto flex flex-col justify-start items-start ${amenities.length > 0 ? "block" : "hidden"}`}>
                        <p className='text-white font-Montserrat text-sm font-semibold'>Amenities</p>
                        <div className='w-full content overflow-x-auto h-auto pr-5 flex gap-10 py-1'>
                            {amenities.map((item, index) => {
                                return <span className='w-12 whitespace-nowrap text-gray-300 mr-5 text-[10px]' key={index}>
                                     {item}
                                </span>
                            })}
                        </div>
                    </div>

                    <div className={`w-full py-2 h-auto flex flex-col justify-start items-start  ${essentials.length > 0 ? "block" : "hidden"}`}>
                        <p className='text-white font-Montserrat text-sm font-semibold'>Essentials</p>
                        <div className='w-full h-auto overflow-x-auto content pr-5 flex gap-10 py-1'>
                            {essentials.map((item, index) => {
                                return <span className='w-12 whitespace-nowrap text-gray-300 text-[10px]' key={index}>
                                    {item}
                                </span>
                            })}
                        </div>
                    </div>

                    <button className='w-full text-white bg-blue-500 flex justify-center items-center gap-2 cursor-pointer hover:bg-blue-600 duration-200 ease-in-out py-2 rounded-full' onClick={openMap}>View on map <RiDirectionLine/></button>
                </div>


            </div>
        </>
    )
}

export default HotelBox

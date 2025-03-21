import React from 'react'
import { FaStar } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { RiDirectionLine } from "react-icons/ri";
import { useState, useEffect } from 'react';
import { toast, Toaster } from 'react-hot-toast';

function ServiceBox({ Title, Rating, Reviews, Address, Phone, Direction }) {

    const [title, setTitle] = useState(Title || 'Unknown');
    const [rating, setRating] = useState(Rating || 'Unknown');
    const [reviews, setReviews] = useState(Reviews || 'Unknown');
    const [address, setAddress] = useState(Address || 'Unknown');
    const [phone, setPhone] = useState(Phone || '');
    const [direction, setDirection] = useState(null);

    useEffect(() => {
        if (Direction.links) {
            // console.log(Direction.links.directions);
            setDirection(Direction.links.directions);
        }
        else{
            setDirection('');
        }
    }, [Direction]); 

    const openMap = () => {
        if (direction !== ''){
            window.open(direction, '_blank');
        }
        else{
            toast.error('No direction found');
            return;
        }
    }

    return (
        <>
            <div className='w-full rounded-lg h-auto px-5 py-5 flex gap-2 flex-col justify-between items-start bg-zinc-800'>
                <Toaster/>
                <p className='text-white font-Montserrat text-xl'>{title}</p>
                <p className='flex justify-center items-center gap-2 text-[12px]'><FaStar />{rating} <span>{reviews} reviews</span></p>
                <p className={`${phone === '' ? "hidden" : "block"} flex justify-center items-center gap-2 text-[12px]`}><IoMdCall />{phone}</p>
                <p className='flex justify-center items-center gap-2 text-[12px]'><FaLocationDot />{address}</p>
                <button className={`w-full py-2 bg-blue-500 text-white flex justify-center items-center gap-2 hover:opacity-85 duration-300 ease-in-out cursor-pointer rounded-full`} onClick={openMap}>Get Directions <RiDirectionLine /></button>
            </div>
        </>
    )
}

export default ServiceBox

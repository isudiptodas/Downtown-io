import React, { useState } from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { PiTicketDuotone } from "react-icons/pi";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaRegBuilding } from "react-icons/fa";
import { BsCalendarDate } from "react-icons/bs";

function EventBox({Venue, Ticket, Address, Date, Title, Img}) {

    const [title, setTitle] = useState(Title || 'Unknown');
    const [image, setImage] = useState(Img || '');
    const [ticket, setTicket] = useState(Ticket);
    const [venue, setVenue] = useState(Venue.name || 'Unknown');
    const [address, setAddress] = useState(Address);
    const[date, setDate] = useState(Date || 'Not Disclosed');

    const openTicket = () => {
        window.open(ticket.link, '_blank');
    }

    return (
        <>
            <div className='w-full border-[1px] border-black flex flex-col gap-3 justify-between lg:gap-5 items-start sm:w-72 md:w-96 lg:w-80 h-auto py-5 px-5 bg-zinc-800 rounded-lg relative overflow-hidden'>
                <div className='w-full h-44 overflow-hidden rounded-lg'>
                    <img src={image} className='h-full w-full object-cover' />
                </div>
                <p className='font-Montserrat text-lg text-white font-bold'>{title}</p>
                <div className='w-full h-auto flex justify-start items-center gap-2'>
                    <BsCalendarDate className='text-gray-400 text-[10px] lg:text-sm'/>
                    <p className='text-[10px] lg:text-sm'>{date.when}</p>
                </div>
                <div className='w-full h-auto flex justify-start items-center gap-2'>
                    <FaRegBuilding className='text-gray-400 text-[10px] lg:text-sm'/>
                    <p className='text-[10px] lg:text-sm'>{venue}</p>
                </div>
                <div className='w-full h-auto flex justify-start items-start gap-2'>
                    <FaLocationDot className='text-gray-400 text-[10px] lg:text-sm'/>
                    <p className='text-[10px] lg:text-sm'>{address.map((location, index) => {
                        return <p key={index}>{location}</p>
                    })}</p>
                </div>
                <button className='w-full py-2 rounded-full bg-white text-black flex justify-center items-center gap-2 cursor-pointer hover:opacity-80 font-Montserrat font-semibold duration-300 ease-in-out' onClick={openTicket}>Ticket <PiTicketDuotone/></button>
            </div>
        </>
    )
}

export default EventBox

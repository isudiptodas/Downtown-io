import React, { useState, useEffect } from 'react'
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';
import img6 from '../assets/img6.jpg';
import img7 from '../assets/img7.jpg';
import img8 from '../assets/img8.jpg';
import celebration from '../assets/celebration.jpg';
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import { MdArrowOutward } from "react-icons/md";
import { Link } from 'react-router-dom';

function LandingPage() {

  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [blur, setBlur] = useState(false);

  const images = [
    {
      id: 1,
      img: img1,
      title: "Explore the vibrant streets of this bustling city, filled with history, culture, and entertainment."
    },
    {
      id: 2,
      img: img2,
      title: "Discover the beauty of nature in this stunning landscape, perfect for outdoor enthusiasts."
    },
    {
      id: 3,
      img: img3,
      title: "Get ready to indulge in the world's best cuisine, from street food to fine dining."
    },
    {
      id: 4,
      img: img4,
      title: "Visit the iconic landmarks that make this city a popular destination for travelers."
    },
    {
      id: 5,
      img: img5,
      title: "Experience the thrill of adventure in this action-packed destination, perfect for thrill-seekers."
    },
    {
      id: 6,
      img: img6,
      title: "Relax on the stunning beaches of this tropical paradise, ideal for a relaxing getaway."
    },
    {
      id: 7,
      img: img7,
      title: "Immerse yourself in the rich history and culture of this fascinating city, filled with museums, galleries, and landmarks."
    },
    {
      id: 8,
      img: img8,
      title: "Enjoy the breathtaking views of this scenic destination, perfect for nature lovers and photographers."
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setBlur(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setBlur(false);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleMenuVisible = () => {
    setIsMenuVisible(!isMenuVisible);
  }

  return (
    <>
      <div className='w-full auto py-4 lg:pl-5 lg:pt-10 px-5 bg-black flex flex-col lg:flex-row relative content'>

        <div className={`md:hidden ${isMenuVisible ? "-translate-y-0" : "-translate-y-full"} z-40 w-full h-screen bg-black absolute duration-500 transition-transform ease-in-out top-0 left-0 flex flex-col text-white justify-center items-start px-10 gap-5`}>
         <Link to='/about-us' className='text-3xl font-Montserrat cursor-pointer'>About</Link>
          <Link to='/nearby-places' className='text-3xl font-Montserrat cursor-pointer'>Nearby Locations</Link>
          <Link to='/upcoming/events' className='text-3xl font-Montserrat cursor-pointer'>Events</Link>
          <Link to='/plan-trip' className='text-3xl font-Montserrat cursor-pointer'>Plan My Trip</Link>
        </div>

        <div className='w-full lg:w-1/2 h-[70vh] py-5 rounded-t-lg lg:rounded-t-[40px] flex flex-col justify-between items-center rounded-b-[40px] bg-black relative overflow-hidden'>

          <div className={`w-[90%] z-50 rounded-full backdrop-blur-md bg-white/20 px-5 py-5 flex justify-between md:justify-center items-center ${isMenuVisible ? "bg-transparent" : ""}`}>
            <p className={`font-Montserrat tracking-widest z-20 font-semibold ${isMenuVisible ? "text-white" : "text-black"} duration-300 ease-in-out z-50`}>DOWNTOWN-IO</p>
            <span className={`cursor-pointer md:hidden p-3 rounded-full duration-300 ease-in-out ${isMenuVisible ? "bg-transparent" : "bg-white"} z-50 relative`} onClick={handleMenuVisible}>{isMenuVisible ? <span><RxCross1 className='text-lg font-bold text-white z-50' /></span> : <span><RiMenu3Fill className='text-lg font-bold text-black' /></span>}</span>
          </div>

          <div className={`absolute z-20 inset-0 transition-all duration-500 ${blur ? "blur-xl" : "blur-none"}`}>
            <img
              src={images[currentIndex].img}
              alt="Display"
              className="h-full w-full object-cover lg:object-fill"
            />
          </div>


          <div className={`w-[80%] z-30 h-auto py-5 px-3 flex justify-center items-center absolute bottom-6 backdrop-blur-lg bg-white/10 rounded-3xl transition-all duration-500 ${blur ? "blur-0" : "blur-none"}`}>
            <p className="text-center text-white font-light font-Montserrat">
              {images[currentIndex].title}
            </p>
          </div>
        </div>

        <div className={`h-auto lg:h-[70vh] py-7 lg:py-0 lg:px-5 flex flex-col justify-between gap-5 lg:justify-start lg:items-center items-center w-full lg:w-1/2 ${isMenuVisible ? "hidden" : "block"}`}>
          <div className='h-full w-full flex flex-wrap p-2'>
            <div className='w-1/2 border-[4px] border-black h-full lg:h-1/2 rounded-tl-2xl bg-zinc-800 px-10 flex flex-col justify-center items-start cursor-pointer hover:opacity-80 duration-200 ease-in-out gap-3 py-5'>
              <p className=' text-5xl lg:text-8xl text-gray-500'>01</p>
              <p className='text-white font-Montserrat text-[8px] md:text-lg text-start'>Plan upcoming events in your community</p>
            </div>

            <div className='w-1/2 border-[4px] border-black h-full lg:h-1/2 rounded-tr-2xl bg-zinc-800 px-10 flex flex-col justify-center items-start cursor-pointer hover:opacity-80 duration-200 ease-in-out gap-3 py-5'>
              <p className=' text-5xl lg:text-8xl text-gray-500'>02</p>
              <p className='text-white font-Montserrat text-[8px] md:text-lg text-start'>Explore location nearby like never before</p>
            </div>

            <div className='w-1/2 border-[4px] border-black h-full lg:h-1/2 rounded-bl-2xl bg-zinc-800 px-10 flex flex-col justify-center items-start cursor-pointer hover:opacity-80 duration-200 ease-in-out gap-3 py-5'>
              <p className=' text-5xl lg:text-8xl text-gray-500'>03</p>
              <p className='text-white font-Montserrat text-[8px] md:text-lg text-start'>Plan trips with friends, family or with your special ones</p>
            </div>

            <div className='w-1/2 border-[4px] border-black h-full lg:h-1/2 rounded-br-2xl bg-zinc-800 px-10 flex flex-col justify-center items-start cursor-pointer hover:opacity-80 duration-200 ease-in-out gap-3 py-5'>
              <p className=' text-5xl lg:text-8xl text-gray-500'>04</p>
              <p className='text-white font-Montserrat text-[8px] md:text-lg text-start'>Get detailed guide on your upcoming trip</p>
            </div>

          </div>

        </div>
      </div>

      <div className='w-full h-32 bg-black flex justify-center px-5 md:px-24 items-center'>
        <p className='text-white text-2xl md:text-4xl text-center font-Montserrat'>Plan your next trip with <span className='bg-gradient-to-br from-purple-500 via-pink-400 to-orange-500 bg-clip-text text-transparent font-semibold'>DOWNTOWN AI</span></p>
      </div>

      {/* <div className='w-full h-auto py-5 flex justify-center items-center bg-black'>
        <Link to='/auth/login'><p className='text-black text-lg md:text-2xl flex cursor-pointer justify-between items-center gap-5 py-1 pl-8 md:pl-12 pr-2 rounded-full bg-white'>Sign In<Link to='/auth/register'><button className='bg-black text-white md:px-12 px-5 py-1 cursor-pointer rounded-full'>Get Started</button></Link></p></Link>
      </div> */}

      <div className={`${isMenuVisible ? "hidden" : "block"}  h-auto px-2 py-5 lg:pt-10 w-full bg-black flex justify-center items-center`}>
        <div className='w-[80%] h-72 lg:h-44 xl:h-56 border-t-2 bg-transparent overflow-hidden border-gray-600 rounded-full'>
          <div className='w-full h-1/2 flex flex-col md:flex-row justify-evenly items-center gap-5'>
            <div className=' w-full md:w-[20%] py-5 text-white px-5 h-full flex flex-col text-center justify-center items-center'>
              <p className='text-[16px] md:text-lg font-bold font-Montserrat'>20,000+</p>
              <p className='text-[10px] md:text-sm font-Montserrat'>cities across the globe</p>
            </div>

            <div className=' w-full md:w-[20%] py-5 text-white px-5 h-full flex flex-col text-center justify-center items-center'>
              <p className='text-[16px] md:text-lg font-bold font-Montserrat'>50,00,000+</p>
              <p className='text-[10px] md:text-sm font-Montserrat'>locations to explore</p>
            </div>

            <div className=' w-full md:w-[20%] py-5 text-white px-5 h-full flex flex-col text-center justify-center items-center'>
              <p className='text-[16px] md:text-lg font-bold font-Montserrat'>120+</p>
              <p className='text-[10px] md:text-sm font-Montserrat'>countries to choose from</p>
            </div>
          </div>
        </div>
      </div>

      <div className={`w-full h-72 md:h-96 px-5 py-5 lg:py-0 bg-black flex justify-center items-center ${isMenuVisible ? "hidden" : "block"}`}>
        <div className='group w-full lg:w-[80%] h-full overflow-hidden rounded-lg relative'>
          <img src={celebration} className='group-hover:scale-110 duration-300 ease-in-out h-full w-full object-cover' />
          <div className='w-full h-full absolute bg-gradient-to-t from-black to-transparent bottom-0 opacity-70'></div>
          <p className='absolute left-5 py-4 bottom-3 text-white text-2xl sm:text-4xl lg:text-6xl w-full px-10 lg:text-center lg:bottom-10 lg:left-0 font-Montserrat'>People, places & experiences that matter</p>
        </div>
      </div>

      <div className='h-auto bg-black w-full py-5 lg:py-14 flex flex-col justify-start items-center'>
        <p className='text-white text-2xl md:text-3xl py-5 w-[80%] text-center font-Montserrat font-extralight'>Connecting you to what matters</p>
        <div className='w-full px-10 md:py-5 lg:py-10 h-auto flex flex-col justify-center items-center gap-3 lg:gap-5 py-3'>
          <Link to="/nearby-places" className='text-black text-sm w-full sm:w-[60%] md:text-lg lg:w-[40%] flex cursor-pointer justify-between items-center gap-5 py-1 pl-8 md:pl-8 pr-2 rounded-full bg-white'>Explore nearby places<button className='bg-black text-white md:px-12 px-5 py-1 cursor-pointer flex justify-center items-center gap-2 rounded-full'>Visit<MdArrowOutward /></button></Link> 
          <Link to='/upcoming/events' className='text-black text-sm w-full sm:w-[60%] md:text-lg lg:w-[40%] flex cursor-pointer justify-between items-center gap-5 py-1 pl-8 md:pl-8 pr-2 rounded-full bg-white'>Explore upcoming events<button className='bg-black text-white md:px-12 px-5 py-1 cursor-pointer flex justify-center items-center gap-2 rounded-full'>Visit<MdArrowOutward /><Link></Link></button></Link>
          <Link to='/plan-trip' className='text-black text-sm w-full sm:w-[60%] md:text-lg lg:w-[40%] flex cursor-pointer justify-between items-center gap-5 py-1 pl-8 md:pl-8 pr-2 rounded-full bg-white'>Plan your next trip<button className='bg-black text-white md:px-12 px-5 py-1 cursor-pointer flex justify-center items-center gap-2 rounded-full'>Visit<MdArrowOutward /><Link></Link></button></Link>
          <Link to='/local' className='text-black text-sm w-full sm:w-[60%] md:text-lg lg:w-[40%] flex cursor-pointer justify-between items-center gap-5 py-1 pl-8 md:pl-8 pr-2 rounded-full bg-white'>Avail local services<button className='bg-black text-white md:px-12 px-5 py-1 cursor-pointer flex justify-center items-center gap-2 rounded-full'>Visit<MdArrowOutward /><Link></Link></button></Link>
        </div>
      </div>

      <div className='w-full h-auto bg-zinc-900 flex flex-col justify-between pt-5 pb-10 items-center gap-4'>
        <h1 className='mb-5 bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent w-[70%] text-2xl font-Montserrat font-bold text-center tracking-widest py-2 border-b-[1.5px] border-gray-500'>DOWNTOWN.IO</h1>
        <Link to='/about-us' className='text-white text-[10px] lg:text-sm font-Montserrat cursor-pointer'>About US</Link>
        <Link to='/nearby-places' className='text-white text-[10px] lg:text-sm font-Montserrat cursor-pointer'>Nearby Locations</Link>
        <Link to='/upcoming/events' className='text-white text-[10px] lg:text-sm font-Montserrat cursor-pointer'>Events</Link>
        <Link to='/plan-trip' className='text-white text-[10px] lg:text-sm font-Montserrat cursor-pointer'>Plan My Trip</Link>
      </div>


    </>
  )
}

export default LandingPage

import React from 'react';
import 'animate.css';
import { Link } from 'react-router-dom';
const Banner = () => {
  return (
    <div className='relative'>

      <img src={'/public/banner/wallpapersden.com_omen-valorant-4k_3840x2160.jpg'} alt="" />

      <div className='lg:absolute  lg:w-1/2 mx-25 text-center lg:ml-16 lg:top-88 lg:text-white '>
        <h2 className="text-5xl font-semibold my-8 animate__animated animate__lightSpeedInRight">Dive into the World of Gaming!</h2>

        <p className=' animate__animated animate__fadeInUpBig'>From hidden gems to blockbuster hits, we bring you the ultimate reviews, ratings, and insights.</p>

        <Link to="/allreviews" className="btn-outline btn mt-12 hover:bg-red-500 animate__animated animate__jackInTheBox">Explore More</Link>
      </div>

    </div>
  );
};

export default Banner;

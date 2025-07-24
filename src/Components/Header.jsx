import React from 'react';
import mos_img1 from '../assets/mos_1.jpg';
import mos_img2 from '../assets/mos_2.jpg';
import mos_img3 from '../assets/mos_3.jpg';
import header_img from '../assets/header_image.jpg';


const Header = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between  items-center mt-20  md:mt-40 px-4 md:px-12 gap-10">
      {/* Left Section */}
      <div className="w-full md:w-1/3">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-semibold">
          Mosquito{' '}
          <span className="bg-gradient-to-r from-yellow-400 to-sky-500 text-transparent bg-clip-text">
            Control
          </span>
        </h1>
        <button className="px-5 py-2 bg-blue-950 text-white mt-5 rounded-full">
          Contact Us
        </button>

        <hr className="hidden md:block border-gray-300 mt-8 w-full" />

        <p className="text-sm mt-6">
          Whether it is a one-time treatment or season-long services for maximum protection, we offer custom programs designed for your unique requirements. Our licensed professionals will outline your needs and discuss the best course of action for your family, pets, and guests.
        </p>

        <div className="flex  mt-6">
          <img src={mos_img2} alt="mosquito1" className="w-12 h-12 rounded-full" />
          <img src={mos_img1} alt="mosquito2" className="w-12 h-12 rounded-full" />
          <img src={mos_img3} alt="mosquito3" className="w-12 h-12 rounded-full" />
        </div>
      </div>

      {/* Center Section */}
      <div className="w-full md:w-1/3 flex justify-center">
        <img
          src={header_img}
          alt="Header"
          className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover border-4 border-white rounded-full"
        />
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/3 flex flex-col items-start">
        <div>
          <p className="text-sm">Call Today</p>
          <p className="font-bold text-2xl md:text-3xl">888.457.6630</p>
        </div>

        <div className="mt-4">
          <p className="text-sm">Location</p>
          <h1 className="font-bold text-2xl md:text-3xl">Nearest Location</h1>
        </div>

        <div className="mt-4 pr-0 md:pr-10">
          <p className="text-sm">
            Looking for "Mosquito Control Near Me"? Find a location now!
          </p>
        </div>

        <hr className="hidden md:block border-gray-300 mt-8 w-full" />

        <button className="bg-black rounded-full px-6 py-3 text-white mt-8">
          Get In Touch
        </button>
      </div>
    </div>
  );
};

export default Header;

import React from 'react';
import location_img from "../assets/location.png";
import bgimage from "../assets/bg_img.jpg"


const About = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-10 px-4'>
      
      {/* Top Two Boxes */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-7 w-full max-w-6xl'>
        {/* Left Box */}
        <div style={{backgroundImage:` url(${bgimage})` }} className='w-full  bg-cover bg-center min-h-[250px] rounded-2xl flex flex-col justify-center z-[-10]'>
          <h1 className='text-2xl md:text-4xl text-white font-semibold mt-9 pl-4'>
            As a franchise, you'll <br /> receive:
          </h1>
          <button className='bg-yellow-400 px-4 py-2 rounded-full ml-6 mt-5 w-fit'>
            Contact Us
          </button>
        </div>

        {/* Right Box */}
        <div className='py-6 px-4 min-h-[250px] bg-white border border-gray-300 w-full rounded-xl'>
          <img
            src={location_img}
            alt=""
            className='bg-yellow-300 rounded-full p-2 w-12 h-12 mb-4'
          />
          <h1 className='text-2xl font-bold'>World-Class TRAINING</h1>
          <p className='text-sm mt-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut porro
            ipsum ducimus tempora dolore dolores quisquam reprehenderit! Saepe,
            blanditiis aliquid?
          </p>
        </div>
      </div>

      {/* Bottom 4 Boxes */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 w-full max-w-6xl'>
        {/* Card 1 */}
        <div className='py-6 px-4 min-h-[200px] bg-white border border-gray-300 rounded-xl w-full'>
          <img
            src={location_img}
            alt=""
            className='bg-green-300 rounded-full p-2 w-12 h-12 mb-4'
          />
          <h1 className='text-lg font-bold'>
            Cloud-Based Management Software
          </h1>
        </div>

        {/* Card 2 */}
        <div className='py-6 px-4 min-h-[200px] bg-slate-950 text-white border border-gray-300 rounded-xl w-full'>
          <img
            src={location_img}
            alt=""
            className='bg-gray-700 rounded-full p-2 w-12 h-12 mb-4'
          />
          <h1 className='text-lg font-bold'>
            Managed Online Branding and Marketing
          </h1>
        </div>

        {/* Card 3 */}
        <div className='py-6 px-4 min-h-[200px] bg-white border border-gray-300 rounded-xl w-full'>
          <img
            src={location_img}
            alt=""
            className='bg-blue-500 rounded-full p-2 w-12 h-12 mb-4'
          />
          <h1 className='text-lg font-bold'>Personal Success Coaching</h1>
        </div>

        {/* Card 4 */}
        <div className='py-6 px-4 min-h-[200px] bg-white border border-gray-300 rounded-xl w-full'>
          <img
            src={location_img}
            alt=""
            className='bg-yellow-300 rounded-full p-2 w-12 h-12 mb-4'
          />
          <h1 className='text-lg font-bold'>
            Cloud-Based Management Software
          </h1>
        </div>
      </div>
    </div>
  );
};

export default About;

import React from 'react';
import mos_author from '../assets/mos_author.jpg';

const Record = () => {
  return (
    <div className="mt-10 pb-10" id="record">
      {/* Top Stats Section */}
      <div className="flex flex-col items-center md:h-[400px]  bg-slate-950 text-white px-4 py-10">
        <h1 className="text-2xl md:text-4xl text-center mt-4">
          A proven Record of{' '}
          <span className="bg-gradient-to-r from-yellow-400 to-sky-500 text-transparent bg-clip-text font-bold">
            Profitability
          </span>
        </h1>

        {/* Stats */}
        <div className="flex flex-col md:flex-row gap-8 mt-10 text-center">
          <div className="md:border-r-2 border-gray-800 md:pr-8">
            <h1 className="text-2xl md:text-4xl font-medium">$436,630</h1>
            <p className="py-2">
              Average revenue per franchisee <br />
              in business 2+ years
            </p>
          </div>

          <div className="md:border-r-2 border-gray-800 md:pr-8">
            <h1 className="text-2xl md:text-4xl font-medium">170</h1>
            <p className="py-2">Owners</p>
          </div>

          <div>
            <h1 className="text-2xl md:text-4xl font-medium">107,000+</h1>
            <p className="py-2">Customers served in 2024</p>
          </div>
        </div>
      </div>

      {/* Investment Section */}
      <div className="relative px-4   mt-[-20px]  md:mt-[-65px]">
        <div className="bg-gray-200 rounded-3xl flex flex-col   lg:flex-row items-center justify-between  p-6 md:p-10 
         max-w-4xl mx-auto shadow-lg">
          {/* Text Content */}
          <div className="mb-6 lg:mb-0 lg:w-2/3">
            <h1 className="text-black text-2xl md:text-4xl lg:text-5xl font-semibold">
              Invest in your <br /> Future
            </h1>
            <p className="text-black mt-4 text-sm md:text-base">
              By Owning a Mosquito Control Franchise 
Join Mosquito <br />  Authority’s   Mosquito Control Franchise and 
Build  <br />a Thriving Business While Realizing the Potential of <br />
Providing Your Community with an Essential Service
              <br />
            </p>
          </div>

          {/* Image */}
          <div className="lg:w-1/3">
            <img
              src={mos_author}
              alt="Author"
              className="w-full max-w-xs h-auto rounded-xl mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Record;

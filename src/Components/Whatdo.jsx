import React from 'react';
import doctor_img from "../assets/lady_doctor.jpg";

const Whatdo = () => {
  return (
    <div className='px-4 md:px-12 lg:px-32 py-10'>
      
      {/* Title */}
      <div className='flex flex-col items-center relative'>
        <h1 className='text-2xl md:text-4xl lg:text-5xl font-semibold text-center'>
          What <span className='bg-gradient-to-r from-yellow-400 to-green-300 text-transparent bg-clip-text'>WE</span> DO
        </h1>
        <div className='h-1 w-20 bg-black mt-4'></div>
      </div>

      {/* Text + Image Section */}
      <div className='flex flex-col md:flex-row items-center gap-10 md:gap-20 mt-10'>
        
        {/* Left Text */}
        <div className='w-full max-w-2xl'>
          <p className='text-sm leading-7'>
            At Mosquito Authority, we kill mosquitoes, but that’s not all we do. It’s our mission to protect the customers and communities we serve from mosquitoes and the diseases they carry. We’ve made it our goal to not only create a comfortable environment but also to make the world a safer place to live. Nothing we take more seriously than the trust our customers place in us.
          </p>
          <br />
          <p className='text-sm leading-7'>
            Mosquito Authority does things quite differently than your average mosquito control business, and we’re proud of it. We make three promises to our customers: no commitments, no contracts, and no mosquitoes – guaranteed. Our franchisees always go the extra mile to make sure customers love the service they receive from us.
          </p>
        </div>

        {/* Right Image */}
        <div className='flex justify-center items-center'>
          <div className='rounded-full border-0 md:border-2 border-gray-900 p-1'>
            <img
              src={doctor_img}
              alt=""
              className='rounded-full h-[200px] w-[200px] md:h-[300px] md:w-[300px] object-cover'
            />
          </div>
        </div>
      </div>

      {/* Bottom Paragraphs */}
      <div className='gap-5 py-6 space-y-6 max-w-4xl '>
        <p className='text-sm leading-7'>
          Our franchise system prioritizes owner success, providing top-tier products, support, and ongoing innovation to ensure market leadership and profitable franchises. We’re always on the lookout for new technologies and processes that can make our franchisees even more successful. The result? Continued market leadership and happy, profitable franchisees. Our proven processes and expert guidance help each franchise to build a thriving business.
        </p>
        <p className='text-sm leading-7'>
          Our management team comprises dedicated professionals who are laser-focused on the success of our franchisees. We know that our franchise owners are the lifeblood of Mosquito Authority and that it would be difficult to continue to see incredible growth without them. Their success motivates us daily.
        </p>
        <p className='text-sm leading-7'>
          Above all, Mosquito Authority is a dedicated team, committed to collective success, offering tools and support for business excellence.
        </p>
      </div>
    </div>
  );
};

export default Whatdo;

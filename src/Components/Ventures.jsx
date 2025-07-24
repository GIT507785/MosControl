import React from "react";
import mountain_image1 from "../assets/mountain_1.jpg"
import mountain_image2 from "../assets/mountain_2.jpg"
import mountain_image3 from "../assets/mountain_3.jpg"
import check_img from '../assets/check.png'


const Ventures = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr mt-4     from-sky-100  to-yellow-100 flex items-center justify-center p-6">
      <div className="max-w-6xl w-full        
      flex flex-col md:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold leading-snug text-gray-900">
            Transform Ventures with <br />
            <span className="bg-gradient-to-r from-yellow-400 to-sky-500 text-transparent bg-clip-text  ">Global Insights</span> &{" "}
            <span className="text-gray-800">Tech Innovation</span>
          </h1>

          <div className="mt-10 space-y-6">
            {/* Market Alignment */}
            <div className="flex items-start gap-3">
              <span className="text-blue-600 text-xl mt-1"> <img src={check_img}  alt="" /> </span>
              <div>
                <h3 className="font-semibold text-lg text-gray-800">Market Alignment</h3>
                <p className="text-gray-600">
                  We match your vision with market trends using expert analysis, ensuring success.
                </p>
              </div>
            </div>

            {/* Human-Centered Strategy */}
            <div className="flex items-start gap-3">
              <span className="text-pink-600 text-xl mt-1"> <img src={check_img}  alt="" /> </span>
              <div>
                <h3 className="font-semibold text-lg text-gray-800">Human-Centered Strategy</h3>
                <p className="text-gray-600">
                  We design unique strategies for naming and brand growth, boosting impact.
                </p>
              </div>
            </div>

            {/* Growth Strategy */}
            <div className="flex items-start gap-3">
              <span className="text-indigo-600 text-xl mt-1"> <img src={check_img}  alt="" />  </span>
              <div>
                <h3 className="font-semibold text-lg text-gray-800">Growth Strategy</h3>
                <p className="text-gray-600">
                  We guide your launch with tailored market positioning plans, driving results.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 relative">
          <div className="relative w-full max-w-md mx-auto">
            <div className="absolute top-6 left-6 over-flow-hidden   
            w-full h-full bg-gray-300 rounded-3xl -z-10 transform rotate-3"></div>
            <img
              src={mountain_image1}
              alt="Mountain View"
              className="rounded-3xl  object-cover  w-[230px] h-[290px]   shadow-xl rotate-10   mt-[100px] " 
            /> 
            <img src={mountain_image2} alt=""                 
             className="rounded-3xl w-[230px] h-[290px]   object-cover  shadow-xl mt-[-300px] 
              border-yellow-400  border-r-2   border-t-blue-500  "  
             />   
             <img src={mountain_image3} alt=""                 
              className="rounded-3xl w-[230px] h-[290px]   object-cover  rotate-20  border-r-2  border-yellow-400  border-t-2   border-r-blue-500   
               shadow-xl mt-[-290px]" 
             />   
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ventures;
import React from 'react';
import footerimg from "../assets/footerimg.jpg"
import logo from "../assets/logo.svg"

const Footer = () => {
  return (
    <div 
      className="relative min-h-screen flex items-center mt-10     justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${footerimg})` }}
    >
      <div className="w-full   mx-auto flex flex-col md:flex-row items-center justify-between p-6">
        {/* Curved Footer Background */}
        <div className="relative bg-slate-900  text-white md:py-25  py-8  px-7   rounded-xl      w-full   z-10">
          <div className="mb-6">
            <img src={logo}  alt="Logo" className="mb-2  " />
            <p className="italic text-sm">
              Have Questions Or Need More Information? Contact Us Today To Find <br />
              Out How We Can Help You Achieve Academic Success.
            </p>
          </div>
          <div className="mb-4">
            <p className="mb-1">📞 +92-342-313-5480</p>
            <p>✉️ hafizhaseeb4480@gmail.com</p>
          </div>
          <div className="mt-26 ">
            <h4 className="font-semibold   text-2xl  mb-3">Quicklinks</h4>
            <ul className="space-y-1 text-sm flex flex-col md:flex-row   md:gap-5 ">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Benefits</a></li>
              <li><a href="#" className="hover:underline">Significance</a></li>
              <li><a href="#" className="hover:underline">Ideal Location</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white shadow-lg rounded-lg p-8 w-full md:w-1/2  mt-8 md:mt-0  md:ml-[-50px] z-20">
          <h2 className="text-xl font-semibold mb-4">Fill Information</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-300 rounded p-2"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded p-2"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="w-full border border-gray-300 rounded p-2"
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full border border-gray-300 rounded p-2"
            />
            <button
              type="submit"
              className="bg-yellow-400 text-black font-semibold w-full py-2 rounded hover:bg-yellow-500 transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;

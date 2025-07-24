import React from 'react'
import service_img from "../assets/service1.jpg"
import service_img2 from "../assets/service2.jpg"
import service_img3 from "../assets/service3.jpg"

const Servicies = () => {
  return (
    <div className='flex flex-col items-center py-10 from-sky-500 to-white-100 justify-center mt-10 px-4 md:px-10 lg:px-32'> 

      {/* Card 1 */}
      <div className='w-full max-w-4xl bg-blue-200 rounded-3xl shadow-lg flex flex-col md:flex-row items-center md:items-start gap-6 p-6 md:h-[230px]'>
        <img src={service_img} alt="" className='w-full md:w-[400px] h-[200px] md:h-[230px] rounded-xl object-cover' />
        <div>
          <h1 className='text-2xl md:text-4xl font-medium mt-4 md:mt-6'>Medical Test</h1> 
          <p className='text-sm py-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora cupiditate repellat, nobis assumenda maxime voluptatibus a autem!</p>
          <button className='bg-black text-white px-4 py-1 rounded-full'>Read More</button>
        </div>
      </div> 

      {/* Card 2 */}
      <div className='w-full max-w-4xl bg-blue-200 rounded-3xl shadow-lg flex flex-col md:flex-row items-center md:items-start gap-6 p-6 mt-12 md:h-[230px]'>
        <img src={service_img2} alt="" className='w-full md:w-[400px] h-[200px] md:h-[230px] rounded-xl object-cover' />
        <div>
          <h1 className='text-2xl md:text-3xl font-medium mt-4 md:mt-6'>Comprehensive Medical Test (Bronze Plan)</h1> 
          <p className='text-sm py-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora cupiditate repellat, nobis assumenda maxime voluptatibus a autem!</p>
          <button className='bg-black text-white px-4 py-1 rounded-full'>Read More</button>
        </div>
      </div> 

      {/* Card 3 */}
      <div className='w-full max-w-4xl bg-blue-200 rounded-3xl shadow-lg flex flex-col md:flex-row items-center md:items-start gap-6 p-6 mt-12 md:h-[230px]'>
        <img src={service_img3} alt="" className='w-full md:w-[400px] h-[200px] md:h-[230px] rounded-xl object-cover' />
        <div>
          <h1 className='text-2xl md:text-3xl font-medium mt-4 md:mt-6'>Comprehensive Medical Test (Silver Plan)</h1> 
          <p className='text-sm py-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora cupiditate repellat, nobis assumenda maxime voluptatibus a autem!</p>
          <button className='bg-black text-white px-4 py-1 rounded-full'>Read More</button>
        </div>
      </div> 

    </div>
  )
}

export default Servicies

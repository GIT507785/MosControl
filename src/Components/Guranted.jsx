import React from 'react'
import mos_author from "../assets/mos_author.jpg"
// import arrow from "../assets/arrow.png"

const Guranted = () => {
  return (
    <div>

    <div className='flex   flex-col-reverse    md:flex-row gap-19  py-5    items-center mt-10 px-10 justify-center '> 
      <div>
        <img src={mos_author} alt=""  className=' md:w-[240px] md:h-[360px] w-[150px] h-[180px]  rounded-full'/>
        {/* <img src={arrow} alt=""  className='w-50  relat '/> */}
      </div>
 <div>
    <h1 className='mt-3  text-2xl md:text4xl  lg:text-5xl font-serif 
     bg-gradient-to-r from-yellow-400 to-sky-500 text-transparent bg-clip-text    '> <span className='text-black'> No  </span> 
      MOSQUITOES.</h1> 
    <h1 className='text-2xl  md:text4xl mt-2 font-serif  lg:text-5xl'> GURANTED.</h1>

    <p className='text-sm text-gray-600 mt-3 max-w-[400px]'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, ullam facilis autem similique dolor delectus consequuntur? Pariatur ipsa in tenetur fugiat eum, vero neque cumque rem, alias, atque doloribus temporibus.</p>

    <button className='bg-black text-white px-3 py-1 mt-5 cursor-pointer  rounded-full' > Contact Us</button>
   </div>
    </div>


     </div>
  )
}

export default Guranted

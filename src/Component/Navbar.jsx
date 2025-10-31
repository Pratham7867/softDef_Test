import React from 'react'

function Navbar() {
  return (
    <div className=' absolute top-12 left-[2] h-10 w-[100vw] flex justify-between items-center mr-300'>
      <div className='logo flex items-center gap-1 ml-5 float-left '>
        <img className='w-11 h-11 ' src="./logo.png" alt="" />
        <h2 className='font-[ Inter ] font-[900] text-gray-300 text-2xl '>FloraVision.</h2>
      </div>
      <div className='textNav flex justify-between items-center gap-15  text-[#ffffff]  font-[IndieFlower] font-[500] text-2xl  '>
        <h2>Home</h2>
        <h2>Plant Type <i class="ri-arrow-down-s-fill"></i></h2>
        <h2>More</h2>
        <h2>Contact</h2>
      </div>

      <div className='h-6 w-6  flex justify-between items-center mr-50 gap-15 '>
        <img src="/search.png" alt="" />
        <img src="/bag.png" alt="" />
        <div className='h-4 w-5 flex flex-col gap-2  '>
            <div className='bg-white h-1 w-8 rounded-md'></div>
            <div className='bg-white h-1 w-6 ml-2 rounded-md'></div>
        </div>
      </div>

        
    </div>
  )
}

export default Navbar




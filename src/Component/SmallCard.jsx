import React from 'react'

function SmallCard() {
  return (
    <>

      <div id='wave' className="h-[70vh] w-[30vw] bg-white/5 border border-white/10  backdrop-blur-[0.4vw] absolute top-50 right-12 rounded-[4vw] shadow-2xl ">
        <img className='absolute top-[-7vw] right-5 h-[50vh] w-[27vw]' src="./rose mongorose.png" alt="" />
        <section className='absolute bottom-20  left-18'>
          <h1 className='text-[1.5vw] text-gray-300 font-[Inter ] font-semibold'>Indoor Plant  </h1>
          <h1 className='text-[2vw] text-gray-300 font-[Inter ] font-semibold'>Aglaonema  plant <i className="ri-arrow-right-s-line ml-20"></i></h1>
          <button className="py-3 px-12 text-2xl rounded-lg border-[0.2vw] border  border-gray-300 text-gray-300">Buy Now</button>
          <div className=' absolute left-35 bottom-[-3vw] flex gap-3 '>
            <div className='h-[0.5vw] rounded-full w-5 bg-white '></div>
            <div className='h-[0.5vw] rounded-full w-2 bg-white '></div>
            <div className='h-[0.5vw] rounded-full w-2 bg-white '></div>
          </div>
        </section>
      </div>
      <div className='h-[25vh] w-[23vw]  absolute bottom-[-3vw] left-11 bg-white/5 border border-white  backdrop-blur-[0.5vw]  rounded-[3vw]  '>
        <div className='w-[4vw] h-[8vh] rounded-full  absolute top-[2vw] left-5 overflow-hidden '>
          <img className='absolute top-[-1vw]' src="./Profile.png" alt="" />
        </div>
        <div class="absolute top-15  left-25 w-[21.9%] text-nowrap overflow-hidden text-yellow-400">
          ★  ★  ★  ★    ★
        </div>
        <h1 className='text-[2.8vh] text-gray-300 font-[Inter ] absolute top-8 left-25 '>Ronnie Hamill</h1>
        <p className='text-[1.9vh] w-65 text-gray-300 font-[Inter ] absolute bottom-5 left-7 '>I can't express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home.</p>
      </div>
    </>
  )
}

export default SmallCard
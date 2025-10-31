import React from 'react'

function OurBest() {
    return (
        <>
            <div className='w-[100%]  h-[150%] bg-[#1b2316] relative ' >
                <h1 className='trendy absolute left-[35%] mt-35 text-[7vh] w-115  h-20  text-gray-300 flex items-center justify-center  font-[Inter ] font-semibold' ><div id='Border-Color'className='w-16 border-l-6   border-b-6 rounded-bl-3xl h-[8vh] border-[rgba(85,176,0,0.6)]  absolute bottom-[-0.5vw] left-[2vw]'></div>  <div className='w-16 border-r-6 border-[rgba(85,176,0,0.6)]  border-t-6 rounded-tr-3xl h-[8vh]   absolute top-[-0.5vw] right-[2vw]'></div>Our Best o2</h1>
                <div className='w-[93%] h-[55%] bg-white/ border border-white/15 shadow-xl absolute top-110 left-15  backdrop-blur-[0.7vw] rounded-[9vw]'>
                    <img className='absolute top-[-9vw] left-[-5vw] h-[100vh] w-[100vh]' src="./rose mongorose.png" alt="" />
                    <div className='absolute left-180 top-20 w-150  text-gray-300 font-[Inter ] '>
                        <h1 className='text-[2.2vw] mb-3 '>We Have Small And Best O2 Plants Collection’s</h1>
                        <p className=' text-[1.7vw] mb-4'>Oxygen-producing plants, often referred to as "O2 plants," are those that release oxygen into the atmosphere through the process of photosynthesis.</p>
                        <p className=' text-[1.7vw]'>Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.</p>
                        <button className="py-3 px-12 text-2xl rounded-lg border-[0.2vw] border  border-gray-300 text-gray-300 absolute ">Explore</button>
                        <div className='absolute right-10 bottom-[-4vw] text-gray-300  flex gap-10'>
                            <i className="ri-arrow-left-s-line text-[2.5vw]" ></i>
                            <h3 className='text-[1rem] mt-4'>  <span className='text-35'>o1/ </span> <spam>o4</spam></h3>
                            <i className="ri-arrow-right-s-line text-[2.5vw]"></i>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default OurBest

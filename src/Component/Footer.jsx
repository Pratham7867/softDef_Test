import React from 'react'

function Footer() {
    return (
        <div className='w-[100%] h-[100%] bg-[#1b2316] relative' >
            <div className=' absolute left-[50%] flex gap-3 top-[3vw]'>
                <div className='h-[0.5vw] rounded-full w-6 bg-white '></div>
                <div className='h-[0.5vw] rounded-full w-2 bg-white '></div>
                <div className='h-[0.5vw] rounded-full w-2 bg-white '></div>
            </div>
            <div className='w-full h-[60%]  absolute bottom-12 flex ' >
                <section className='flex flex-col ml-[4vw]  mt-11 '>
                    <div className='logo flex items-center gap-1 ml-5 float-left '>
                        <img className='w-22 h-22 ' src="./logo.png" alt="" />
                        <h2 className='font-[ Inter ] font-[900] text-gray-300 text-4xl '>FloraVision.</h2>
                    </div>
                    <p className='text-[1.8vw] w-[39%] ml-10 mt-3 text-gray-100 '>"From lush indoor greens to vibrant outdoor blooms, our plants are crafted to thrive and elevate your living environment."</p>
                    <div className='text-2xl text-gray-100 flex gap-15 font-[ Inter ] font-bold ml-10 mt-25 '>
                        <h1>FB</h1>
                        <h1>TW</h1>
                        <h1>LI</h1>
                    </div>
                </section>
                <section className='left-[49%] absolute top-10 flex flex-col gap-5 '>
                    <h1 className='text-3xl text-white font-bold'>Quick Link's</h1>
                    <div className='text-2xl text-white font-semibold underline-offset-2 underline flex flex-col gap-4 '>
                        <h1>Home</h1>
                        <h1>Type's Of Plant's</h1>
                        <h1>Contact</h1>
                        <h1>Privacy</h1>
                    </div>
                </section>
                <section className=' absolute right-0 mt-7'>
                    <h1 className='text-3xl text-white font-bold w-80 '>For Every Update.</h1>
                    <div className=' w-[30vw] h-18 mt-20 mr-2 border-3 rounded-xl border-white  relative'>
                        <h1 className='top-3 left-4 text-[3vh] text-gray-200 absolute '>Enter Email</h1>
                        <div className='absolute top-0 right-0 flex justify-center items-center rounded-xl w-[10vw] text-[3vh] font-bold uppercase h-full border bg-white'>Subscribe </div>
                    </div>
                    <h1 className='text-[1.5vw] w-[90%] mt-35 text-gray-100' >FloraVision © all right reserve</h1>
                </section>
            </div>
        </div>
    )
}

export default Footer

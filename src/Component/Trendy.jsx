import React from 'react'

function Trendy() {
  return (
    <>
    <div className='w-[100%]  absolute top-[115%]  ' >

        <h1 className='trendy absolute left-[35%]  text-[7vh] w-115  h-20  text-gray-300 flex items-center justify-center  font-[Inter ] font-semibold' > <div id='Border-Color'className='w-16 border-l-6   border-b-6 rounded-bl-3xl h-[8vh] border-[rgba(251,211,0,0.6)]  absolute left-[-0.5vw]'></div>  <div className='w-16 border-r-6  border-[rgba(251,211,0,0.6)]  border-t-6 rounded-tr-3xl h-[8vh]   absolute right-[-0.5vw]'></div>Our Trendy plants</h1>

        <div className='w-[93%] h-[58vh] bg-white/5 border border-white/10 shadow-2xl absolute top-40 left-15  backdrop-blur-[0.7vw] rounded-[9vw]'>
        <img className='absolute top-[-13vw] left-3 h-[80vh] w-[80vh]' src="./Rose Gold.png" alt="" />
        <div >
            <h1 className='text-[5vh] text-gray-300 font-[Inter ] font-semibold absolute top-20 left-[50%] '>For Your Desks Decorations</h1>
            <p className='w-160 text-gray-300 font-[Inter ] absolute top-40 left-[50%] text-[2vh] font-bold '>I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!</p>
            <h1 className='text-[5vh] text-gray-300 font-[Inter ] font-semibold absolute top-55 left-[50%] '>Rs. 599/-</h1>
            <button className="py-3 px-12 text-2xl rounded-lg border-[0.2vw] border  border-gray-300 text-gray-300 absolute top-75 left-[50%]">Explore</button>
            <div className='w-15 h-15 text-2xl rounded-lg border-[0.2vw] border flex items-center justify-center border-gray-300 text-gray-300 absolute top-75 left-[65%]'>
              <img className='w-9 h-9' src="./bag.png" alt="" />
            </div>
        </div>
        </div>
    </div>

    <div className='w-[100%]  absolute top-[190%]  ' >
        <div className='w-[93%] h-[58vh] bg-white/5 border border-white/10 shadow-2xl absolute top-40 left-15 shadow-2xl  backdrop-blur-[0.7vw] rounded-[9vw]'>
        <img className='absolute top-[-10vw] right-3 h-[80vh] w-[80vh]' src="./rose Gold Mogora.png" alt="" />
        <div >
            <h1 className='text-[5vh] text-gray-300 font-[Inter ] font-semibold absolute top-20 right-[60%] '>For Your Desks Decorations</h1>
            <p className='w-160 text-gray-300 font-[Inter ] absolute top-40 right-[49%] text-[2vh] font-bold '>The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming</p>
            <h1 className='text-[5vh] text-gray-300 font-[Inter ] font-semibold absolute top-55 right-[83%] '>Rs. 399/-</h1>
            <button className="py-3 px-12 text-2xl rounded-lg border-[0.2vw] border  border-gray-300 text-gray-300 absolute top-75 right-[82%]">Explore</button>
            <div className='w-15 h-15 text-2xl rounded-lg border-[0.2vw] border flex items-center justify-center border-gray-300 text-gray-300 absolute top-75 right-[75%]'>
              <img className='w-9 h-9' src="./bag.png" alt="" />
            </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Trendy

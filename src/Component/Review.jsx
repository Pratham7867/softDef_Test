import React, { useEffect, useState } from 'react'

const data = [
    {
        Name: 'Ronnie Hamill',
        review: 'Just got my hands on some absolutely awesome plants, and I couldn’t be happier!',
        img: './Profile1.png'
    },
    {
        Name: 'Lula Rolfson',
        review: 'Each one has its own unique charm and personality, and they’ve already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home.',
        img:'./Profile2.jpg'
    },
    {
        Name: 'Carol Huels',
        review: "It's like bringing a little piece of nature indoors. Definitely worth the investment—my plant collection has never looked better!",
        img:'./Profile3.png'
    }
]

function Review() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    setInfo(data);
  }, []);


    return (
        <div className='w-[100%] h-[100%] bg-[#1b2316] relative ' >
            <h1 className='trendy absolute left-[35%] mt-35  text-[7vh] w-115  h-20  text-gray-300 flex items-center justify-center  font-[Inter ] font-semibold' ><div id='Border-Color'className='w-16 border-l-6   border-b-6 rounded-bl-3xl h-[8vh] border-[rgba(251,211,0,0.6)]  absolute left-[-0.5vw]'></div>  <div className='w-16 border-r-6  border-[rgba(251,211,0,0.6)]  border-t-6 rounded-tr-3xl h-[8vh]   absolute right-[-0.5vw]'></div>Customer Review</h1>
        <div className='flex flex-wrap w-[100%] gap-10 gap-y-[12vw] justify-center'>
            {info.map((data) => (
            
            <div id='border' className='h-95 w-115  relative  top-85 bg-white/5 shadow-2xl border border-white/10  backdrop-blur-[0.5vw]  rounded-[4vw]  '>
                <div className='w-20 h-20 rounded-full  absolute top-[4vw] left-8 overflow-hidden  '>
                    <img className='w-full h-full object-cover ' src={data.img} alt="" />
                </div>
                <h1 className='text-[5vh] text-gray-300 font-[Inter ] font-bold absolute top-15 left-35 '>{data.Name}</h1>
                <div class="absolute top-27  left-35 w-[24.4%] text-nowrap overflow-hidden text-[1.5vw] text-yellow-400">
                    ★  ★  ★  ★    ★
                </div>
                <p className='text-[2.5vh] w-80 h-80  text-gray-300 font-[Inter ] absolute top-40 left-15 '>{data.review}</p>
            </div>
            ))}
        </div>
    </div>
    )
}

export default Review

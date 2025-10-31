import React, { useEffect, useState } from 'react'


const data =[

    
    {
        
        Name: 'Aglaonema plant', dics: 'The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care', Price: 'Rs. 300/-', img: './rose mongorose.png',
    },
    {
        
        Name: 'Plantain Lilies',
        dics: 'Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes,', Price: 'Rs. 380/-', img: './rose Gold Mogora.png',
    },
    {

        Name: 'Cactus', dics: 'It is known for their ability to thrive in arid environments', Price: 'Rs. 259/-', img: './Cactus.png',
    },
    {

        Name: 'Swiss cheese Plant', dics: 'It is a popular tropical houseplant known for its distinctive, perforated leaves', Price: 'Rs. 400/-', img: './Swiss cheese Plant.png',
    },
    {

        Name: 'Sansevieria plant', dics: 'It is a popular indoor plant admired for its striking appearance and low-maintenance nature.', Price: 'Rs. 450/-', img: './Sansevieria plant.png',
    },
    {

        Name: 'Agave plant', dics: 'The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves and architectural forms.', Price: 'Rs. 359/-', img: './Agave plant.png',
    }
    
]



function TopSelling() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    setInfo(data);
  }, []);

    return (
        <div className='w-[100%] min-h-[200%] bg-[#1b2316] relative'>
            <h1 className='trendy absolute left-[35%]  text-[7vh] w-150  rounded-2xl h-20  text-gray-300 flex items-center justify-center  font-[Inter ] font-semibold' ><div id='Border-Color'className='w-16 border-l-6  border-b-6 rounded-bl-3xl h-[8vh] border-[rgba(251,211,0,0.6)]  absolute left-[1vw]'></div>  <div className='w-16 border-r-6  border-[rgba(251,211,0,0.6)]  border-t-6 rounded-tr-3xl h-[8vh]   absolute right-[-0vw]'></div>Our Top Selling Plants</h1>
        
         <div className='flex flex-wrap w-[100%] gap-10 gap-y-[12vw] justify-center '>{
                info.map((data) => (
                    <div id='wave' className="h-135 w-112 bg-white/5 border border-white/15  backdrop-blur-[0.4vw] relative top-60 shadow-2xl rounded-[4vw] ">
                        <img className='absolute top-[-7vw] right-5 h-[27vw] w-[27vw]' src={data.img} alt="" />
                        <section className='absolute bottom-10  left-12'>
                            <h1 className='text-[4.2vh] text-gray-300 font-[Inter ]'>{data.Name}</h1>
                            <p className='w-100 text-gray-300 font-[Inter ]  text-[2.5vh]  '>{data.dics}</p>
                            <h1 className='text-[5vh] text-gray-300 font-[Inter ]'>{data.Price}</h1>
                            <div className='w-12 h-12 text-2xl rounded-lg border-[0.2vw] border flex items-center justify-center border-gray-300 text-gray-300 absolute  right-15 bottom-1'>
                                <img className='w-7 h-7' src="./bag.png" alt="" />
                            </div>
                        </section>
                    </div>
                ))
            } </div>
     </div>
    )
}

export default TopSelling

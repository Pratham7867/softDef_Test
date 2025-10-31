import Navbar from "./Navbar"
import SmallCard from "./SmallCard"
import Trendy from "./Trendy"

function Home() {
  return (
        <div className="home bg-[url('./BackGround.jpg')] min-h-[300vh] bg-[position:center_-120px] bg-cover bg-[#1b2316] bg-no-repeat  max-w-screen">
            <Navbar/> 
            <div className="Hometext absolute xs:w-50 top-50 left-7 h-50 w-200 " >
                <h1 className="text-[8vw] text-gray-300 font-[Inter ] ">Earth’s Exhale</h1>
                <p className="w-180 text-gray-300 font-[Inter ] mt-[-1vw] font-semibold text-[1.4vw]">"Earth Exhale" symbolizes the purity and vitality of the Earth's natural environment and its essential role in sustaining life.</p>
                <div id="Home-Bottom" className="flex  gap-4 mt-2 " >
                <button className="py-3 px-12 text-2xl rounded-lg border-[0.2vw] border  border-gray-300 text-gray-300">Buy Now</button>
                <div  className=" text-2xl rounded-full border-[0.2vw]  border border-gray-300 min-w-15 min-h-15  text-gray-300 flex justify-center items-center"> <i className="ri-play-large-fill"></i></div>
                <h1 className="mt-4  text-gray-300 font-[IndieFlower] text-[1.5vw]">Live Demo...</h1>
                </div>
            </div>
            <SmallCard/>
            <Trendy></Trendy>
        </div>
  )
}

export default Home

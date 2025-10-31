import './App.css'
import Footer from './Component/Footer'
import Home from './Component/Home'
import OurBest from './Component/OurBest'
import Review from './Component/Review'
import TopSelling from './Component/TopSelling'
import Trendy from './Component/Trendy'

function App() {

  return (

    <div className='main h-screen '>
    {/* <Background/> */}
    <Home></Home>
    <TopSelling/>
    <Review></Review>
    <OurBest></OurBest>
    <Footer></Footer>
  </div>
  )
}

export default App

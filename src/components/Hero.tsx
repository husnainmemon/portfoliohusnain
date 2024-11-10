import React from 'react'
import Navbar from './navbar'

const Hero = () => {
  return (
    <div id="hero" className='min-h-screen bg-no-repeat bg-[url(/banner_pg.png.png)] bg-left lg:bg-[15%] bg-cover'
    style={{backgroundSize: "35%"}}
    >
     <Navbar/>
     <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
      <div className='hidden lg:block'></div>
      <div className='text-[100px] sm:text-[130px] font-bold leading-tight justify-center items-center'>
        <div>
          <p data-aos="zoom-in-up">I,m</p>
          <p data-aos="zoom-in-up">Husnain</p>
          <p data-aos="zoom-in-up">Memon</p>
        </div>
      </div>
      </div> 
      
    </div>
  )
}

export default Hero

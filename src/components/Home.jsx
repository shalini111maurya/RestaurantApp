import React from 'react'
import home from '../assets/home.png'
import PrimaryButton from './primaryButton'
import homeBg from '../assets/homeBg.png'

const BgStyle ={
    backgroundImage : `url(${homeBg})`,
    backgroundRepeat : "no-repeat",
    backgroundPosition : "center",
    backgroundSize : "cover",
    width : "100%",
    height : "100%",
}

const Home = () => {
  return (
    <>
      <div style={BgStyle} className='relative z-[1] '>
        <div className='container py-16 sm:py-0'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[600px]'>
                {/* ----Left-section----- */}
                <div className='space-y-7 text-dark order-2 sm:order-1'>
                    <h1 data-aos="fade-up" className='text-5xl'>Your Source for Healthy, Fresh Meal {" "} <span className='text-secondary font-cursive text-7xl'>Delivery</span> {" "} in Lucknow</h1>
                    <p data-aos="fade-up" data-aos-delay ="300" className='lg:pr-64'>Nutritious & Delicious Meal Plans Delivered Right to Your Door  From 500/- per week</p>
                    <div data-aos="fade-up" data-aos-delay ="500">
                        <PrimaryButton />
                    </div>
                </div>
                
                {/* -----Right-section----- */}
                <div data-aos="zoom-in" data-aos-delay ="500" className='relative z-30 order-1 sm:order-2'>
                    <img className='w-full sm:scale-125 sm:translate-y-16' src={home} alt="" />
                </div>

            </div>

        </div>

      </div>
    </>
  )
}

export default Home

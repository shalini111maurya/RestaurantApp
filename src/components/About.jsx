import React from 'react'
import { FaUser} from 'react-icons/fa'
import polygon from '../assets/polygon.png'
import vector from '../assets/vector-wave.png'

const bgStyle ={
    backgroundImage : `url(${polygon})`,
    backgroundRepeat : "no-repeat",
    backgroundPosition : "center",
    backgroundSize : "cover",
    width : "100%",
    height : "100%",
    position : "relative",
}

const About = ({HandlePopup}) => {
  return (
    <>
     <div style={bgStyle} className='py-14'>
        <div className="container min-h-[500px] relative z-10">
            <h1 data-aos="fade" data-aos-delay ="300" className='pt-20  tracking-wider text-4xl font-semibold text-white text-center'>About Us</h1>
            {/* Card Section */}
            <div data-aos="fade" data-aos-delay ="300" className='bg-white/80 p-10 my-10'>
            At Good Food, we believe that eating well is the foundation of a healthy and happy life. 
            Founded with the mission to make nutritious, delicious meals accessible to everyone, 
            our meal delivery service is dedicated to helping busy people in Lucknow prioritize their health without sacrificing convenience.
          
            Our team of culinary experts and nutritionists work together to craft balanced, 
            flavorful meals using the freshest, high-quality ingredients. Whether you’re looking
             to maintain a healthy lifestyle, reach fitness goals, or simply enjoy wholesome, 
            home-cooked meals without the effort, we’ve got you covered.
            <div className='pt-10 flex justify-center'>
                <button onClick={HandlePopup} className='flex justify-center items-center gap-2 bg-primary text-xl h-[40px] text-white px-5 py-2 hover:scale-105 duration-300 '>
                <FaUser/>
                My Account
                </button>
            </div>
            </div>
        </div>
        {/* wave vector */}
        <div className='absolute top-0 right-0 w-full'>
            <img src={vector} alt="" className='mx-auto' />
        </div>
     </div> 
    </>
  )
}

export default About

import React from 'react'
import Apple from '../assets/png/apple.png'
import Kiwi from '../assets/png/kiwi.png'
import Leaf from '../assets/png/leaf.png'
import Lemon from '../assets/png/lemon.png'
import Tomato from '../assets/png/tomato.png'
import PrimaryButton from './PrimaryButton'


const Banner = () => {
  return (
    <>
      <div className='container py-14 relative'>
        <div className='relative z-20'>
            <h1 data-aos="fade-up" data-aos-delay ="300" className='py-16 tracking-wider text-2xl font-semibold text-dark text-center'>
            Feel the Difference in Every Healthy Bite
            </h1 >
            <div className='space-y-10'>
                <div data-aos="fade-up" data-aos-delay ="500" className='grid grid-cols-1 sm:grid-cols-2 gap-4 py-10'>
                    <div>
                        <p>
                            {" "}
                            In today's fast-paced world, <span className='text-primary'>time</span>  is our most precious resource.
                             At Good Food, we believe that eating healthy shouldn't mean sacrificing your time or convenience.
                              That's why our Lucknow-based healthy meal plan delivery service is designed for those who want to enjoy 
                             nutritious meals without the hassle of shopping, cooking, or meal prepping
                        </p>
                    </div>
                    <div></div>
                </div>
                <div data-aos="fade-up" data-aos-delay ="500" className='grid grid-cols-1 sm:grid-cols-2 gap-4 py-10'>
                    <div></div>
                    <div>
                        <p>
                            {" "}
                            At Good Food, we understand that in today’s busy world, <span className='text-primary'>time</span> is a luxury. 
                            That’s why we offer a simple solution for Lucknow residents who want to eat well without the hassle. 
                            Our healthy meal delivery service provides fresh, 
                            nutrient-packed meals right to your door, saving you time on grocery shopping and cooking. 
                            Now, eating healthy is as easy as opening the door
                        </p>
                    </div>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-delay ="500" data-aos-offset= "0"  className='flex justify-center mt-10 sm:mt-14'>
                <PrimaryButton/>
            </div>
        </div>
            {/* fruits  */}
            <div data-aos="fade-right" className=' absolute top-16 -left-16 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100'>
                <img className='max-w-[160px]' src={Leaf} alt="" />
            </div>

            <div data-aos="fade-right" className=' absolute -bottom-16 -left-16 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100'>
                <img className='max-w-[280px]' src={Tomato} alt="" />
            </div>

            <div data-aos="fade-left" className=' absolute top-10 -right-16 sm:right-20  opacity-50 sm:opacity-100'>
                <img className='max-w-[280px]' src={Lemon} alt="" />
            </div>

            <div data-aos="fade-left"  className='hidden sm:block absolute bottom-0 right-0 '>
                <img className='max-w-[200px]' src={Apple} alt="" />
            </div>

            <div data-aos="fade"  className='absolute top-1/2 -translate-y-1/3 left-1/3 -translate-x-1/3  opacity-50 sm:opacity-100'>
                <img className='max-w-[180px]' src={Kiwi} alt="" />
            </div>
      </div>
    </>
  )
}

export default Banner

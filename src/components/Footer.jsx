import React from 'react'
import { FaPhone } from 'react-icons/fa6';
import {IoLocationSharp} from 'react-icons/io5';
import {MdEmail} from 'react-icons/md' ;

const Footer = () => {
  return (
    <>
     <div className='text-white mt-20'>
        <div data-aos = "fade-down" className="container bg-gradient-to-b from-primary to-primaryDark rounded-t-3xl">
            <h1 className='py-10 text-3xl font-bold text-yellow text-center'>Contact Us</h1>
            <div className='grid grid-cols-1 sm:grid-col-2 md:grid-cols-3 gap-14 border-b-2 border-white pb-6'>
                {/* Address Section */}
                <div className='text-center space-y-4'>
                    <div className='flex justify-center'>
                        <IoLocationSharp className='text-5xl'/>
                    </div>
                    <p>
                        #abc Road , Gomti Nagar
                        <br /> Lucknow Uttar Pradesh 226014
                    </p>
                </div>
                {/* Email Section */}
                <div className='text-center space-y-4'>
                    <div className='flex justify-center'>
                        <MdEmail className='text-5xl'/>
                    </div>
                    <p>abcd@gmail.com </p>
                    <p>customersupport@gmail.com</p>
                </div>
                {/* Phone Number Section */}
                <div className='text-center space-y-4'>
                    <div className='flex justify-center'>
                        <FaPhone className='text-5xl'/>
                    </div>
                    <p>+91 0000000000 - Sales and Services </p>
                    <p>+ 91 1111111111 - Hiring Queries</p>
                    <p>+ 91 2222222222 - Contact at Whatsapp</p>

                </div>
            </div>
                {/* Bottom Footer */}
                <div className='flex justify-between p-4 items-center'>
                    <p>@ 2024 GoodFood. All right reserved</p>
                    <div className='flex items-center gap-6'>
                        <a href="#"> Privacy Policy</a>
                        <a href="#"> Terms & Conditions</a>
                    </div>
                </div>
        </div>
     </div> 
    </>
  )
}

export default Footer

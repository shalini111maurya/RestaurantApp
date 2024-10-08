import React from 'react'
import {FaCaretDown, FaUser} from 'react-icons/fa'

const Navlinks =[
   { 
    id:1,
    name :"Home",
    link : "/#",
   },
   {
    id:2,
    name :"About",
    link : "/#",
   },
   {
    id:3,
    name :"Contact",
    link : "/#",
   }

]

const DropDownLinks =[
    { 
        id:1,
        name :"Vegetables",
        link : "/#",
       },
       {
        id:2,
        name :"Fruits",
        link : "/#",
       },
       {
        id:3,
        name :"Grains",
        link : "/#",
       }
]

const Navbar = ({HandlePopup}) => {
  return (
    <>
     <div data-aos="fade" className='bg-white shadow-lg'>
        <div className='container flex justify-between py-4 sm:py-3'>
            {/*-----Logo Section */}
            <div className='font-bold text-3xl'>
                Logo
            </div>
            {/*-----NavLink Section */}
            <div>
                <ul className='flex items-center gap-10'>
                    {
                        Navlinks.map(({id, name, link})=>{
                            return (
                                <li key={id}>
                                    <a className='hidden sm:inline-block hover:text-primary text-xl font-semibold' href={link} >{name}</a>
                                </li>
                            )
                        })
                    }
                    {/*-----Category Dropdown */}
                    <li className='hidden md:block cursor-pointer group '>
                    <a className='inline-block hover:text-primary text-xl font-semibold' href="/#" >
                     <div className=' flex items-center gap-[2px] py-2'>
                     Category
                    <span>
                        <FaCaretDown className='group-hover: rotate-180 duration-300' />
                    </span>
                     </div>
                    </a>
                    {/*----- Dropdown List */}
                    <div className='absolute z-[9999] hidden group-hover:block w-[200px] p-2 bg-white text-black shadow-md '>
                        <ul>
                            {
                                DropDownLinks.map(({id, name, link}) => (
                                    <li key={id}>
                                        <a className='inline-block w-full rounded-md p-2 hover:bg-primary/20 text-xl' href={link}>
                                            {name}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    </li>

                    {/*----- Login Button*/}
                    <li>
                        <button onClick={HandlePopup} className='flex justify-center items-center gap-2 bg-secondary text-xl h-[40px] text-white px-2 md:px-5 py-2 hover:scale-105 duration-300 '>
                            <FaUser/>
                            My Account
                        </button>
                    </li>

                </ul>
            </div>

        </div>
     </div>
    </>
  )
}

export default Navbar

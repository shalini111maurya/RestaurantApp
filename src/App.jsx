import React, {useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Banner from './components/Banner'
import WhyChooseUs from './components/WhyChooseUs'
import About from './components/About'
import Footer from './components/Footer'
import Popup from './components/popup'
import AOS from "aos";
import  "aos/dist/aos.css"

const App = () => {

  const [showPopup, setShowPopup] = React.useState(false);

  const HandlePopup = () => {
    setShowPopup(true);
  }

  React.useEffect(()=> {
    AOS.init({
      offset :100,
      duration:800,
      easing :"ease-in-state",
      delay :100
    });
    AOS.refresh();
  }, []);

  return (
    <div className='overflow-x-hidden'>
      <Navbar HandlePopup= {HandlePopup}/>
      <Home/>
      <Banner/>
      <WhyChooseUs/>
      <About HandlePopup= {HandlePopup}/>
      <Banner/>
      <Footer />
      <Popup showPopup={showPopup} setShowPopup={setShowPopup}/>
    </div>
  )
}

export default App


import React, { useState,useEffect } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Menu from './components/Menu/Menu';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import MoveToTop from './components/MoveToTop/MoveToTop';
import ScrollToTop from "react-scroll-to-top";

function App() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined
  })
  const [isMobile, setMobile] = useState(false)
  useEffect(() => {
    const handleSize = () =>{
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    window.addEventListener("resize", handleSize)
    handleSize()
    return () => 
      window.removeEventListener("resize" , handleSize);
  }, []);

  useEffect(()=>{
    if(windowSize.width < 500){
      setMobile(true)
    }
    else{
      setMobile(false)
    }
  }, [windowSize])

  return (
    <div className='font-sans overflow-y-auto overflow-x-hidden h-screen bg-white dark:bg-slate-800 text-14'>
      <Navbar/>
      <Menu/>
      <Content/>
      <Footer/>
      
    </div>
  );
}

export default App;

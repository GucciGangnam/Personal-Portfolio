
// IMPORTS //
//RRD
import { Route, Routes, useNavigate } from 'react-router-dom'
// React 
import { useState, useEffect } from 'react'
// Styles
import './App.css'
// Pages

// Components 
import { NavbarMobile } from './components/NavbarMobile'
import { NavbarDesktop } from './components/NavbarDesktop'
import { CVnavMobile } from './components/CVnavMobile'

// Pages 
import { Homepage } from './pages/Homepage'
import { CVpageMobile } from './pages/CVpageMobile'
import { Projectpage } from './pages/Projectspage'
import { Contactpage } from './pages/Contactpage'

// COMPONENT //
function App() {
  // STATES 
  const [ismobile, setIsMobile] = useState(true)
  const [isCVnavShowing, setIsCVnavShowing] = useState(false)
  const [currentCVPage, setCurrentCVPage] = useState(1);

  // Use effect to see surrent page number 
  useEffect(() => { 
    console.log(currentCVPage)
  }, [currentCVPage])

  // Function to handle window resize
  const handleResize = () => {
    if (window.innerWidth < 700) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // Effect to add event listener on component mount
  useEffect(() => {
    handleResize(); // Check initial width
    window.addEventListener('resize', handleResize); // Add listener
    return () => {
      window.removeEventListener('resize', handleResize); // Clean up
    };
  }, []);



  return (
    <div className='App-Dark'>
      {ismobile ? <NavbarMobile /> : <NavbarDesktop />}
      {/* Absolute positioning */}
      {isCVnavShowing && <CVnavMobile  currentCVPage={currentCVPage}/>}
      <Routes>
      <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/cv" element={<CVpageMobile setIsCVnavShowing={setIsCVnavShowing} currentCVPage={currentCVPage} setCurrentCVPage={setCurrentCVPage}/>} />
        <Route path="/projects" element={<Projectpage />} />
        <Route path="/contact" element={<Contactpage />} />
      </Routes>
    </div>
  )
}

export default App

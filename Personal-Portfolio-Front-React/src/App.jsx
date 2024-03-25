
// IMPORTS //
//RRD

// React 
import { useState, useEffect } from 'react'
// Styles
import './App.css'
// Pages

// Components 
import { NavbarMobile } from './components/NavbarMobile'
import { NavbarDesktop } from './components/NavbarDesktop'

// Pages 
import { Homepage } from './pages/Homepage'

// COMPONENT //
function App() {
  // STATES 
  const [ismobile, setIsMobile] = useState(true)

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
      {ismobile ? <NavbarMobile/> : <NavbarDesktop/>}
       {/* Absolute positioning */}

      <Homepage/>
    </div>
  )
}

export default App

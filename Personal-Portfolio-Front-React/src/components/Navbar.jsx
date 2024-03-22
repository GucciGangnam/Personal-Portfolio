// IMPORTS //
// RRD
// React
import { useState, useEffect } from 'react';
// Styles
import './Navbar.css'

// Components 

// COMPONENT //
export const Navbar = () => {
    // STATES
    const [isMobile, setIsmobile] = useState(true);
    // FUNCTIONS //
    // Toggle selected button
    const toggleSelectedBTN = (e) => {
        const buttons = document.querySelectorAll('.Navbar-BTNs button');
        buttons.forEach(button => {
            if (button === e.target) {
                button.classList.remove('Navbar-BTN-Deselected');
                button.classList.add('Navbar-BTN-Selected');
            } else {
                button.classList.remove('Navbar-BTN-Selected');
                button.classList.add('Navbar-BTN-Deselected');
            }
        });
    }
    // Hnalde show nav menu 
    const showNavMenu = () => { 
        console.log("showing nav menu")
    }


    return (<>
        {!isMobile ?
            <div className='Navbar-Dark'>
                <div className='Navbar-Title'>
                    Alexander Micklewright
                </div>
                <div className='Navbar-BTNs'>
                    <button className='Navbar-BTN-Selected' onClick={toggleSelectedBTN}>Home</button>
                    <button className='Navbar-BTN-Deselected' onClick={toggleSelectedBTN}>CV</button>
                    <button className='Navbar-BTN-Deselected' onClick={toggleSelectedBTN}>Projects</button>
                    <button className='Navbar-BTN-Deselected' onClick={toggleSelectedBTN}>Contact</button>
                    <button className='Navbar-BTN-Deselected' onClick={toggleSelectedBTN}>Extra</button>
                </div>
            </div>
            :
            <div className='Mobile-Navbar-Dark'>
                <div className='Mobile-Navbar-Title'>
                    Alexander Micklewright
                </div>
                <div className='Mobile-Navbar-BTNs'>
                    <button className='Mobile-Navbar-BTN'>Home</button>
                </div>
            </div>
        }


    </>
    );
}
// IMPORTS 
// IMPORTS
import { useState, useEffect } from 'react';
// Styles
import './NavbarDesktop.css'

// COMPONENT 
export const NavbarDesktop = () => {
    // State to track active button
    const [activeButton, setActiveButton] = useState('homeBTN');

    // button Handlers
    const handleButtonClick = (buttonId) => {
        setActiveButton(buttonId);
        console.log("directing to " + buttonId);
    };

    return (
        <div className="NavbarDesktop">
            <div className='Navnbar-Desktop-Header'>
                Alexander Micklewright
            </div>
            <div className='Navbar-Desktop-BTNs'>
                <button
                    id='homeBTN'
                    className={activeButton === 'homeBTN' ? 'Navbar-Desktop-BTN-Selected' : 'Navbar-Desktop-BTN'}
                    onClick={() => handleButtonClick('homeBTN')}
                >
                    Home
                </button>
                <button
                    id='cvBTN'
                    className={activeButton === 'cvBTN' ? 'Navbar-Desktop-BTN-Selected' : 'Navbar-Desktop-BTN'}
                    onClick={() => handleButtonClick('cvBTN')}
                >
                    CV
                </button>
                <button
                    id='projectsBTN'
                    className={activeButton === 'projectsBTN' ? 'Navbar-Desktop-BTN-Selected' : 'Navbar-Desktop-BTN'}
                    onClick={() => handleButtonClick('projectsBTN')}
                >
                    Projects
                </button>
                <button
                    id='contactBTN'
                    className={activeButton === 'contactBTN' ? 'Navbar-Desktop-BTN-Selected' : 'Navbar-Desktop-BTN'}
                    onClick={() => handleButtonClick('contactBTN')}
                >
                    Contact
                </button>
                <button
                    id='xxxxBTN'
                    className={activeButton === 'xxxxBTN' ? 'Navbar-Desktop-BTN-Selected' : 'Navbar-Desktop-BTN'}
                    onClick={() => handleButtonClick('xxxxBTN')}
                >
                    XXXX
                </button>
            </div>
        </div>
    );
};
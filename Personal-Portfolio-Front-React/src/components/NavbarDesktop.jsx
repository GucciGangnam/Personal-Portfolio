// IMPORTS 
// IMPORTS
import { useState, useEffect } from 'react';
// RRD
import { Link, useNavigate } from "react-router-dom";
// Styles
import './NavbarDesktop.css'

// COMPONENT 
export const NavbarDesktop = () => {
    console.log("Navbar Desktop Rendered")
    // Initiate useNavigate
    const navigate = useNavigate();
    // State to track active button
    const [activeButton, setActiveButton] = useState('homeBTN');

    // button Handlers
    const handleButtonClick = (buttonId) => {
        const linkTo = buttonId.slice(0, -3);
        navigate('/'+linkTo)
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

            </div>
        </div>
    );
};
// IMPORTS
import { useState, useEffect } from 'react';
// RRD
import { Link, useNavigate } from "react-router-dom";
// Styles
import './NavbarMobile.css'

// COMPONENT 
export const NavbarMobile = () => {
    // Initiate Navigate
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState('');

    // Handle Open close Navbar 
    const toggleNavOpen = () => {
        setIsOpen(!isOpen);
    };
    // Handle button selecter
    const handleNavigate = (path) => { 
        // close the nav bar 
        setIsOpen(false)
        // navigate to chosen path
        navigate('/' + path)
    }

    return (
        <div className={isOpen ? "Mobile-Navbar-Open" : "Mobile-Navbar-Closed"}>
            <div className='Mobile-Navbar-top'>
                <div className='Mobile-Navbar-Header'>Alexander Micklewtight</div>
                <button className={isOpen ? 'Mobile-Navbar-Menu-BTN-Open' : 'Mobile-Navbar-Menu-BTN-Closed'} onClick={toggleNavOpen}>{isOpen ? "Close" : "Home"}</button>
            </div>
            <div className='Mobile-Navbar-BTN-grid'>
                <button id='homeBTN' onClick={() => {handleNavigate('home')}} className='Mobile-Navbar-BTN'><img src='/Home.png' alt='Home'></img><p>Home</p></button>
            </div>
            <div className='Mobile-Navbar-BTN-grid'>
                <button id='cvBTN' onClick={() => {handleNavigate('cv')}} className='Mobile-Navbar-BTN'><img src='/Document.png' alt='CV'></img><p>CV</p></button>
            </div>

            <div className='Mobile-Navbar-BTN-grid'>
                <button id='projectsBTN' onClick={() => {handleNavigate('projects')}} className='Mobile-Navbar-BTN'><img src='/Code.png' alt='Projects'></img><p>Projects</p></button>
            </div>

            <div className='Mobile-Navbar-BTN-grid'>
                <button id='contactBTN' onClick={() => {handleNavigate('contact')}} className='Mobile-Navbar-BTN'><img src='/Contact.png' alt='Contact'></img><p>Contact</p></button>
            </div>
        </div>
    );
};
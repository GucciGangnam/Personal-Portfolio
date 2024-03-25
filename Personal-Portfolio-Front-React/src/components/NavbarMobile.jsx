// IMPORTS
import { useState, useEffect } from 'react';
// Styles
import './NavbarMobile.css'

// COMPONENT 
export const NavbarMobile = () => {
    const [isOpen, setIsOpen] = useState('');

    // Handle Open close Navbar 
    const toggleNavOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={isOpen ? "Mobile-Navbar-Open" : "Mobile-Navbar-Closed"}>
            <div className='Mobile-Navbar-top'>
                <div className='Mobile-Navbar-Header'>Alexander Micklewtight</div>
                <button className={isOpen ? 'Mobile-Navbar-Menu-BTN-Open' : 'Mobile-Navbar-Menu-BTN-Closed'} onClick={toggleNavOpen}>{isOpen ? "Close" : "Home"}</button>
            </div>
            <div className='Mobile-Navbar-BTN-grid'>
                <button className='Mobile-Navbar-BTN'><img src='/Home.png' alt='Home'></img><p>Home</p></button>
            </div>
            <div className='Mobile-Navbar-BTN-grid'>
                <button className='Mobile-Navbar-BTN'><img src='/Document.png' alt='CV'></img><p>Home</p></button>
            </div>

            <div className='Mobile-Navbar-BTN-grid'>
                <button className='Mobile-Navbar-BTN'><img src='/Code.png' alt='Contact'></img><p>Home</p></button>
            </div>

            <div className='Mobile-Navbar-BTN-grid'>
                <button className='Mobile-Navbar-BTN'><img src='/Contact.png' alt='Contact'></img><p>Home</p></button>
            </div>
        </div>
    );
};
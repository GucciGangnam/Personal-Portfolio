// IMPORTS 
// IMPORTS
import { useState, useEffect } from 'react';
// Styles
import './NavbarDesktop.css'

// COMPONENT 

export const NavbarDesktop = () => {
    return (
        <div className="NavbarDesktop">
            <div className='Navnbar-Desktop-Header'>
                Alexander Micklewright
            </div>
            <div className='Navbar-Desktop-BTNs'>
                <button className='Navbar-Desktop-BTN-Selected'>Home</button>
                <button className='Navbar-Desktop-BTN'>CV</button>
                <button className='Navbar-Desktop-BTN'>Projects</button>
                <button className='Navbar-Desktop-BTN'>Contact</button>
                <button className='Navbar-Desktop-BTN'>XXXX</button>
            </div>
        </div>
    )
}
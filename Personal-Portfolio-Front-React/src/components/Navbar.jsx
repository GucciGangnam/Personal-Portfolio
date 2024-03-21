// IMPORTS //
// RRD
// React
// Styles
import './Navbar.css'


// COMPONENT //
export const Navbar = () => {
    // STATES
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


    return (
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
    );
}
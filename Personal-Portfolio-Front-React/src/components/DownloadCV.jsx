// IMPORTS 
// React 
import { useState } from 'react'
// RRD 
import { Link } from 'react-router-dom'
// Styles 
import './DownloadCV.css'



// COMPONENT

export const DownloadCV = ({ isCVProtectorShowing, setIsCVProtectorShowing }) => {

    // STATES 
    const [password, setPassword] = useState("")


    // Function to open and close CV Downloaded
    const toggleCVProtector = () => {
        if (isCVProtectorShowing) {
            setIsCVProtectorShowing(false)
        } else {
            setIsCVProtectorShowing(true)
        }
    }

    // Hnalde password input 
    const handlePasswordInput = (e) => { 
        setPassword(e.target.value)
    }

    const submitPassword = (e) => { 
        // RUN A FETCH TO MY BACKEND
        e.preventDefault(); // Prevents the default form submission behavior
        console.log(password);
    }

    return (
        <div className='DownloadCV'>
            <span>
            <Link style={{ textDecoration: 'underline', color: '#FF8535' }} to={'/contact'}>Contact me </Link>to get the password
            </span>
            <input
            type='password'
            value={password}
            onChange={handlePasswordInput}
                
            >
            </input>
            <div className='BTN-DIV'>
                <button onClick={toggleCVProtector}>Close</button>
                <button onClick={submitPassword}>Submit</button>
            </div>

        </div>
    )
}
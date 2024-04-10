// IMPORTS 
// React 
import { useState } from 'react'
// Styles 
import './Contact.css'

// COMPONENT 
export const Contact1 = ({setFormStep}) => { 

    // Button handlers 
    const handleStart = () => { 
        setFormStep(2)
    }

    return ( 
        <div className='Contact1'>
            Leave me a message and I'll get back to you.
            <button onClick={handleStart}>Start</button>
        </div>
    )
}
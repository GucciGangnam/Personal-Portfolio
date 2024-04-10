// IMPORTS 
/// react 
import { useState } from 'react'
// Styles
import './Contactpage.css'
// Components
import { Contact1 } from "../components/Contact1"
import { Contact2 } from "../components/Contact2"
import { Contact3 } from "../components/Contact3"
import { Contact4 } from "../components/Contact4"
import { Contact5 } from "../components/Contact5"

// COMPONENT 
export const Contactpage = () => {
    // STATES
    const [formStep, setFormStep] = useState(1)
    const [ContactData, setContactData] = useState({})
    return (
        <div className="ContactPage">
            { formStep === 1 && <Contact1  setFormStep={setFormStep} setContactData={setContactData}/> }
            { formStep === 2 && <Contact2  setFormStep={setFormStep} setContactData={setContactData}/> }

            
            {/* <Contact2/>
            <Contact3/>
            <Contact4/>
            <Contact5/> */}
        </div>
    )
}
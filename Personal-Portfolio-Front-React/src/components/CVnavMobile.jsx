// IMPORTS 
import "./CVnavMobile.css"
// React 
import { useState, useEffect } from "react";


// COMPONENTS 
export const CVnavMobile = ({ currentCVPage }) => {



    return (
        <div className="CVnavMobile">

            <div className={currentCVPage == 1 ? "CVnav-Circle-Selected" : "CVnav-Circle"} >

            </div>

            <div className={currentCVPage == 2 ? "CVnav-Circle-Selected" : "CVnav-Circle"} >

            </div>

            <div className={currentCVPage == 3 ? "CVnav-Circle-Selected" : "CVnav-Circle"} >

            </div>

            <div className={currentCVPage == 4 ? "CVnav-Circle-Selected" : "CVnav-Circle"} >

            </div>

            <div className={currentCVPage == 5 ? "CVnav-Circle-Selected" : "CVnav-Circle"} >

            </div>


        </div>
    )
}
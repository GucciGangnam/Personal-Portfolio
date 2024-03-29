// IMPORTS 

// Styles
import "./Homepage.css"

// COMPONENTS
export const Homepage = () => {
    return (
        <div className="Homepage">
            <div className="HP-Left-Container">
                <img className="Stack-Img3" src="/Stack3VF.png"></img>
                <img className="Stack-Img2" src="/Stack2VF.png"></img>
                <img className="Stack-Img1" src="/Stack1VF.png"></img>
                <div className="Slogan-Text"> Design | Develop | Deploy | Maintain </div>
            </div>
            <div className="HP-Right-Container">
                <img className="HP-Img" src="/Avatar.png" alt="Profile-Avatar"></img>
            </div>
        </div>
    )
}
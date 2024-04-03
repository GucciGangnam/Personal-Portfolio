// IMPORTS 
// React 
import { useEffect } from "react"
// Styles 
import "./Projectspage.css"

// COMPONENT 
export const Projectpage = () => {

    // FUNCTION
    // Interceptor for Cards
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                console.log(entry)
                if (entry.isIntersecting && entry.intersectionRatio >= 0.1) {
                    if (entry.target.classList.contains("Flex-Grid-L")) {
                        entry.target.classList.add("Flex-Grid-L-Show");
                    } else if (entry.target.classList.contains("Flex-Grid-R")) {
                        entry.target.classList.add("Flex-Grid-R-Show");
                    } else if (entry.target.classList.contains("Flex-Grid-Text")) {
                        entry.target.classList.add("Flex-Grid-Text-Show");
                    }
                    console.log('Element is intersecting:', entry.target);
                } else {
                    if (entry.target.classList.contains("Flex-Grid-L")) {
                        entry.target.classList.remove("Flex-Grid-L-Show");
                    } else if (entry.target.classList.contains("Flex-Grid-R")) {
                        entry.target.classList.remove("Flex-Grid-R-Show");
                    } else if (entry.target.classList.contains("Flex-Grid-Text")) {
                        entry.target.classList.remove("Flex-Grid-Text-Show");
                    }
                    console.log('Element is not intersecting enough:', entry.target);
                }
            });
        }, { threshold: 0.5 }); // specifying threshold of 0.5 for 50% visibility
    
        const cards = document.querySelectorAll(".Flex-Grid-L, .Flex-Grid-Text, .Flex-Grid-R");
        cards.forEach(card => {
            observer.observe(card);
        });
    
        // Cleanup function
        return () => {
            cards.forEach(card => {
                observer.unobserve(card);
            });
        };
    }, []);
    
    


    return (
        <div className="Projectpage">



            <div className="Flex-Grid-L">
                <div className="Project-Card">
                    <div className="Project-Card-Title">
                        Title
                    </div>
                    <div className="Project-Card-Icon">
                        <img src="/Math.png" alt="Calulator"></img>
                    </div>
                    <div className="Project-Card-BTN-Div">
                        <button className="Project-Card-Code-BTN">Code</button>
                        <button className="Project-Card-Preview-BTN">Preview</button>
                    </div>
                </div>
            </div>
            <div className="Flex-Grid-Text">
                <div className="Flex-Grid-Text-Box">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                </div>
            </div>



            <div className="Flex-Grid-Text">
                <div className="Flex-Grid-Text-Box">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                </div>
            </div>
            <div className="Flex-Grid-R">
                <div className="Project-Card">
                    <div className="Project-Card-Title">
                        Title
                    </div>
                    <div className="Project-Card-Icon">
                        <img src="/Math.png" alt="Calulator"></img>
                    </div>
                    <div className="Project-Card-BTN-Div">
                        <button className="Project-Card-Code-BTN">Code</button>
                        <button className="Project-Card-Preview-BTN">Preview</button>
                    </div>
                </div>
            </div>



            <div className="Flex-Grid-L">
                <div className="Project-Card">
                    <div className="Project-Card-Title">
                        Title
                    </div>
                    <div className="Project-Card-Icon">
                        <img src="/Math.png" alt="Calulator"></img>
                    </div>
                    <div className="Project-Card-BTN-Div">
                        <button className="Project-Card-Code-BTN">Code</button>
                        <button className="Project-Card-Preview-BTN">Preview</button>
                    </div>
                </div>
            </div>
            <div className="Flex-Grid-Text">
                <div className="Flex-Grid-Text-Box">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                </div>
            </div>

            <div className="Flex-Grid-Text">
                <div className="Flex-Grid-Text-Box">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                </div>
            </div>
            <div className="Flex-Grid-R">
                <div className="Project-Card">
                    <div className="Project-Card-Title">
                        Title
                    </div>
                    <div className="Project-Card-Icon">
                        <img src="/Math.png" alt="Calulator"></img>
                    </div>
                    <div className="Project-Card-BTN-Div">
                        <button className="Project-Card-Code-BTN">Code</button>
                        <button className="Project-Card-Preview-BTN">Preview</button>
                    </div>
                </div>
            </div>



            <div className="Flex-Grid-L">
                <div className="Project-Card">
                    <div className="Project-Card-Title">
                        Title
                    </div>
                    <div className="Project-Card-Icon">
                        <img src="/Math.png" alt="Calulator"></img>
                    </div>
                    <div className="Project-Card-BTN-Div">
                        <button className="Project-Card-Code-BTN">Code</button>
                        <button className="Project-Card-Preview-BTN">Preview</button>
                    </div>
                </div>
            </div>
            <div className="Flex-Grid-Text">
                <div className="Flex-Grid-Text-Box">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                </div>
            </div>

            <div className="Flex-Grid-Text">
                <div className="Flex-Grid-Text-Box">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                </div>
            </div>
            <div className="Flex-Grid-R">
                <div className="Project-Card">
                    <div className="Project-Card-Title">
                        Title
                    </div>
                    <div className="Project-Card-Icon">
                        <img src="/Math.png" alt="Calulator"></img>
                    </div>
                    <div className="Project-Card-BTN-Div">
                        <button className="Project-Card-Code-BTN">Code</button>
                        <button className="Project-Card-Preview-BTN">Preview</button>
                    </div>
                </div>
            </div>



            <div className="Flex-Grid-L">
                <div className="Project-Card">
                    <div className="Project-Card-Title">
                        Title
                    </div>
                    <div className="Project-Card-Icon">
                        <img src="/Math.png" alt="Calulator"></img>
                    </div>
                    <div className="Project-Card-BTN-Div">
                        <button className="Project-Card-Code-BTN">Code</button>
                        <button className="Project-Card-Preview-BTN">Preview</button>
                    </div>
                </div>
            </div>
            <div className="Flex-Grid-Text">
                <div className="Flex-Grid-Text-Box">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                </div>
            </div>


        </div>
    )
}
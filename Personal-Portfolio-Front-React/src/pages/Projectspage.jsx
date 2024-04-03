// IMPORTS 
// React 
import { useEffect, useRef } from "react"
// Styles 
import "./Projectspage.css"

// COMPONENT 
export const Projectpage = () => {


    // Interceptor for Cards
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.intersectionRatio >= 0) {
                    if (entry.target.classList.contains("Project-Container-Odd")) {
                        entry.target.classList.replace("Project-Container-Odd", "Project-Container-Odd-Showing");
                    } else if (entry.target.classList.contains("Project-Container-Even")) {
                        entry.target.classList.replace("Project-Container-Even", "Project-Container-Even-Showing");
                    }
                    console.log('Element is intersecting:', entry.target);
                } else {
                    if (entry.target.classList.contains("Project-Container-Odd-Showing")) {
                        entry.target.classList.replace("Project-Container-Odd-Showing", "Project-Container-Odd");
                    } else if (entry.target.classList.contains("Project-Container-Even-Showing")) {
                        entry.target.classList.replace("Project-Container-Even-Showing", "Project-Container-Even");
                    }
                    console.log('Element is not intersecting enough:', entry.target);
                }
            });
        }, { threshold: 0.0 }); // specifying threshold of 0.5 for 50% visibility

        const cards = document.querySelectorAll(".Project-Container-Odd, .Project-Container-Even ");
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


            <div className="Project-Container-Odd">
                <div className="Project-Card">
                    <div className="Project-Card-Title">
                        Console.blog
                    </div>
                    <div className="Project-Card-Icon">
                        <img src="/Console.png" alt="Calulator"></img>
                    </div>
                    <div className="Project-Card-BTN-Div">
                        <button className="Project-Card-Code-BTN">Code</button>
                        <button className="Project-Card-Preview-BTN">Preview</button>
                    </div>
                </div>

                <div className="Project-Text">
                    <>Console.blog is a developer focused blpg posting site whewre users can blog and converse. 
                    This site showcases:
                    <br/>
                    - Full Jam Stack
                    <br/>
                    - API development
                    <br/>
                    - Access Tokens</>
                    <div className="Framework-Icons-Container">
                        <img className="Framework-Icon" src="/JavaScript.png"></img>
                        <img className="Framework-Icon" src="/CSS.png"></img>
                        <img className="Framework-Icon" src="/React.png"></img>
                        <img className="Framework-Icon" src="/Vite.png"></img>
                        <img className="Framework-Icon" src="/Nodejs.png"></img>
                        <img className="Framework-Icon" src="/Mongo Db.png"></img>
                    </div>
                </div>
            </div>

            <div className="Project-Container-Even">
                <div className="Project-Card">
                    <div className="Project-Card-Title">
                        Infinitune
                    </div>
                    <div className="Project-Card-Icon">
                        <img src="/Spotify.png" alt="Calulator"></img>
                    </div>
                    <div className="Project-Card-BTN-Div">
                        <button className="Project-Card-Code-BTN">Code</button>
                        <button className="Project-Card-Preview-BTN">Preview</button>
                    </div>
                </div>

                <div className="Project-Text">
                    <>As part of the Odin Project, I was assigned the task of developing a front end only shopping site that relied on an external API to provide the products and data for the content of the shop. Inspired by my favourite app, I built a 'physical cd' shop where people can browse the entire collection of music on spotify.  After reading all of spotify's documentation, I was able to access huge amounts of info and I think I made a prertty cool site.</>
                    <div className="Framework-Icons-Container">
                        <img className="Framework-Icon" src="/JavaScript.png"></img>
                        <img className="Framework-Icon" src="/CSS.png"></img>
                        <img className="Framework-Icon" src="/React.png"></img>
                        <img className="Framework-Icon" src="/Vite.png"></img>
                    </div>
                </div>
            </div>

            <div className="Project-Container-Odd">
                <div className="Project-Card">
                    <div className="Project-Card-Title">
                        Catch em all
                    </div>
                    <div className="Project-Card-Icon">
                        <img src="/Pokemon.png" alt="Calulator"></img>
                    </div>
                    <div className="Project-Card-BTN-Div">
                        <button className="Project-Card-Code-BTN">Code</button>
                        <button className="Project-Card-Preview-BTN">Preview</button>
                    </div>
                </div>

                <div className="Project-Text">
                    <>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</>
                    <div className="Framework-Icons-Container">
                        <img className="Framework-Icon" src="/JavaScript.png"></img>
                        <img className="Framework-Icon" src="/CSS.png"></img>
                        <img className="Framework-Icon" src="/React.png"></img>
                        <img className="Framework-Icon" src="/Vite.png"></img>
                    </div>
                </div>
            </div>

            <div className="Project-Container-Even">
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

                <div className="Project-Text">
                    <>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</>
                    <div className="Framework-Icons-Container">
                        <img className="Framework-Icon" src="/JavaScript.png"></img>
                        <img className="Framework-Icon" src="/CSS.png"></img>
                        <img className="Framework-Icon" src="/React.png"></img>
                        <img className="Framework-Icon" src="/Vite.png"></img>
                        <img className="Framework-Icon" src="/Nodejs.png"></img>
                        <img className="Framework-Icon" src="/Mongo Db.png"></img>
                    </div>
                </div>
            </div>

            <div className="Project-Container-Odd">
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

                <div className="Project-Text">
                    <>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</>
                    <div className="Framework-Icons-Container">
                        <img className="Framework-Icon" src="/JavaScript.png"></img>
                        <img className="Framework-Icon" src="/CSS.png"></img>
                        <img className="Framework-Icon" src="/React.png"></img>
                        <img className="Framework-Icon" src="/Vite.png"></img>
                        <img className="Framework-Icon" src="/Nodejs.png"></img>
                        <img className="Framework-Icon" src="/Mongo Db.png"></img>
                    </div>
                </div>
            </div>

            <div className="Project-Container-Even">
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

                <div className="Project-Text">
                    <>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</>
                    <div className="Framework-Icons-Container">
                        <img className="Framework-Icon" src="/JavaScript.png"></img>
                        <img className="Framework-Icon" src="/CSS.png"></img>
                        <img className="Framework-Icon" src="/React.png"></img>
                        <img className="Framework-Icon" src="/Vite.png"></img>
                        <img className="Framework-Icon" src="/Nodejs.png"></img>
                        <img className="Framework-Icon" src="/Mongo Db.png"></img>
                    </div>
                </div>
            </div>


        </div>
    )
}
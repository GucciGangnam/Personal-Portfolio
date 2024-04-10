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

    // Button handlers 
    // CONSOLEBLOG

    // INFINITUNE
    const openInfinitune = () => {
        window.open("https://infinitune-shop.vercel.app", "_blank");
    }
    const openInfinituneGit = () => {
        window.open("https://github.com/GucciGangnam/shopping-cart", "_blank");
    }
    //CATCH EM ALL
    const openCatchemallGit = () => {
        window.open("https://github.com/GucciGangnam/Memory-Game-2", "_blank");

    }
    const openCatchemall = () => {
        window.open("https://memory-game-2.vercel.app", "_blank");

    }
    //JOKES ON U
    const openJokesonu = () => {
        window.open("https://jokesonu.adaptable.app/home", "_blank");
    }
    const openJokesonuGit = () => {
        window.open("https://github.com/GucciGangnam/members-only", "_blank");
    }
    //Hidden GPT
    const openHiddengpt = () => {
        window.open("https://hidden-gpt.vercel.app", "_blank");
    }
    const openHiddengptGit = () => {
        window.open("https://github.com/GucciGangnam/hidden-GPT", "_blank");
    }
    // Console.blog
    const openConsoleblog = () => {
        window.open("https://console-blog-tawny.vercel.app", "_blank");
    }
    const openConsoleblogGit = () => {
        window.open("https://github.com/GucciGangnam/console.blog", "_blank");
    }







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
                        <button className="Project-Card-Code-BTN" onClick={openConsoleblogGit}>Code</button>
                        <button className="Project-Card-Preview-BTN" onClick={openConsoleblog}>Preview</button>
                    </div>
                </div>

                <div className="Project-Text">
                    <>Console.blog is a developer focused blog posting site whewre users can blog and converse. This project showcases the implementation of a full JAM stack with a focus on restful API developemnt and access tokens.</>
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
                        <button className="Project-Card-Code-BTN" onClick={openInfinituneGit}>Code</button>
                        <button className="Project-Card-Preview-BTN" onClick={openInfinitune}>Preview</button>
                    </div>
                </div>
                <div className="Project-Text">
                    <>Infinitune is a front end application mimicing an online store that focusus on showcasing the use of 3rd party API's.  Inspired by spotify, I designed a shop to browse and buy music.  Unfortunatly, the country selector doesnt seem to be working anymore so I will re-read the documentation at a later date.</>
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
                        <button className="Project-Card-Code-BTN" onClick={openCatchemallGit}>Code</button>
                        <button className="Project-Card-Preview-BTN" onClick={openCatchemall}>Preview</button>
                    </div>
                </div>

                <div className="Project-Text">
                    <>Catch Em All was my first fully front end focused web app.  Its a simple memory game designed to showcase the implementation of a large scope of the React framework. </>
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
                        Jokes on U
                    </div>
                    <div className="Project-Card-Icon">
                        <img src="/Laugh.png" alt="Calulator"></img>
                    </div>
                    <div className="Project-Card-BTN-Div">
                        <button className="Project-Card-Code-BTN" onClick={openJokesonuGit}>Code</button>
                        <button className="Project-Card-Preview-BTN" onClick={openJokesonu}>Preview</button>
                    </div>
                </div>

                <div className="Project-Text">
                    <>Jokes on u is an express built web app where users can post jokes but must become a "VIP" member to see the joke set-ups. This project showcases the implementation of authentification and node preficiency aswell as the use of No SQL DB MongoDB. Although not the prettiest site, the front was built using EJS as the view engine of my express app.</>
                    <div className="Framework-Icons-Container">
                        <img className="Framework-Icon" src="/JavaScript.png"></img>
                        <img className="Framework-Icon" src="/EJS.png"></img>

                        <img className="Framework-Icon" src="/Nodejs.png"></img>
                        <img className="Framework-Icon" src="/Mongo Db.png"></img>
                    </div>
                </div>
            </div>

            <div className="Project-Container-Odd">
                <div className="Project-Card">
                    <div className="Project-Card-Title">
                        Hidden GPT
                    </div>
                    <div className="Project-Card-Icon">
                        <img src="/Bot.png" alt="Calulator"></img>
                    </div>
                    <div className="Project-Card-BTN-Div">
                        <button className="Project-Card-Code-BTN" onClick={openHiddengptGit}>Code</button>
                        <button className="Project-Card-Preview-BTN" onClick={openHiddengpt}>Preview</button>
                    </div>
                </div>

                <div className="Project-Text">
                    <>Hidden GPT uses the Google Gemini API to communicate with Googles LLM under the covert ruse of a phony Outlook help page. This site showcases nothing more than 3rd party API implementation and my first site with an actual user.</>
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


        </div>
    )
}
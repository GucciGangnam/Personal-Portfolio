//IMPORTS 
// Styles 
import './CVpageMobile.css'
// React 
import { useState, useEffect, useRef } from 'react';



// COMPONENT//
export const CVpageMobile = ({ setIsCVnavShowing, currentCVPage, setCurrentCVPage }) => {

    useEffect(() => {
        let lastScrollTop = 0;
        const cvPageMobile = document.querySelector('.CVpageMobile');

        const handleScroll = () => {
            const currentScrollTop = cvPageMobile.scrollTop;

            if (currentScrollTop > lastScrollTop) {
                // Scrolling down
                setIsCVnavShowing(true);
            } else if (lastScrollTop - currentScrollTop > 1) {
                // Scrolling up
                setIsCVnavShowing(false);
            }

            lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling
        };

        cvPageMobile.addEventListener('scroll', handleScroll);

        return () => {
            cvPageMobile.removeEventListener('scroll', handleScroll);
        };
    }, [setIsCVnavShowing]);

    const scrollRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = scrollRef.current.scrollTop;
            const scrollHeight = scrollRef.current.scrollHeight;
            const clientHeight = scrollRef.current.clientHeight;
            const scrollFraction = scrollTop / (scrollHeight - clientHeight);
            // console.log(scrollFraction)


            if (scrollFraction <= 0.001) {
                setCurrentCVPage(1);
            } else if (scrollFraction <= 0.2501) {
                setCurrentCVPage(2);
            } else if (scrollFraction <= 0.5001) {
                setCurrentCVPage(3);
            } else if (scrollFraction <= 0.7501) {
                setCurrentCVPage(4);
            } else {
                setCurrentCVPage(5);
            }
        };

        const ref = scrollRef.current;

        if (ref) {
            ref.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (ref) {
                ref.removeEventListener('scroll', handleScroll);
            }
        };
    }, [currentCVPage]);

    return (
        <div className="CVpageMobile" ref={scrollRef}>

            <div className='scrollpage'>
                <div className='Mobile-Scrollpage-Date'>
                    {currentCVPage === 1 ? <div className='Mobile-Date'>1995</div> : null}
                    {currentCVPage === 2 ? <div className='Mobile-Date'>2014</div> : null}
                    {currentCVPage === 3 ? <div className='Mobile-Date'>2017</div> : null}
                    {currentCVPage === 4 ? <div className='Mobile-Date'>2020</div> : null}
                    {currentCVPage === 5 ? <div className='Mobile-Date'>2021</div> : null}
                </div>
                {currentCVPage === 1 ? <div className='Mobile-Scrollpage-Content'>
                    <div className='MSC-Title'>
                        Introduction
                    </div>
                    <div className='MSC-Body'>
                        Born in 1995 in the north of England, I grew up in a somewhat gentrified area and experience a tytpical British upbringing.
                        <br />
                        <br />
                        Blah blah blah
                    </div>
                    <img className="MSC-Scroll-Indicator" src='Private PV2.png' alt='Scroll Inidicator'></img>
                </div> : null}
                {currentCVPage === 2 ? <div className='Mobile-Scrollpage-Content'><div className='MSC-Title'>
                    Project Manager at Loyds Banking Group
                </div>
                    <div className='MSC-Body'>
                        Sucesfully competing with over 3000 applicants to join the sought-after Lloyds Banking Group apprenticeship program, I studied my NVQ diploma in Project Management alongside managing my own small to medium complex projects and assisting large flagship projects in the Group Operations devision.
                        <br />
                        <br />
                        In 2017, after 2 consecutive years of top 5% strong performance reviews and a promotion offer, I took the decision to leave the company to book a one way flight to Bangkok.
                    </div></div> : null}
                {currentCVPage === 3 ? <div className='Mobile-Scrollpage-Content'><div className='MSC-Title'>
                    Moving to Australia
                </div>
                    <div className='MSC-Body'>
                        After spending 7 months travelling South East Asia, I moved to Australia on a 2 year working holiday visa. Initally living in Melbourne for half a year, I then moved in-land to start compulsary farm work before re-location to sydney for a year.
                        <br />
                        <br />
                        <ul className='MSC-UL'>
                            <li className='MSC-LI'>"Don't tell the others I pay you more" - One farm manager.</li>
                            <li className='MSC-LI'>"An absolut pleasure to work with" - Another farm manager.</li>
                            <li className='MSC-LI'>"Best tractor operator I've ever seen" - Trevor.</li>
                        </ul>
                    </div></div> : null}
                {currentCVPage === 4 ? <div className='Mobile-Scrollpage-Content'><div className='MSC-Title'>
                    Covid in Vietnam
                </div>
                    <div className='MSC-Body'>
                        After leaving Australia in 2019 I took some time to travel back through Southeast Asia with the intent of returning to the UK. While spending a couple of months in a small coastal town in the south of Vietnam, the world was put on hold.
                        <br />
                        <br />
                        Fortunately, Vietnam was incredibly proactive and gave me an opportunity to live in one of the most uneffected areas in the world.
                        <br />
                        <br />
                        I began workign as an English teacher and I still do it to this day.
                    </div></div> : null}
                {currentCVPage === 5 ? <div className='Mobile-Scrollpage-Content'><div className='MSC-Title'>
                    "Just learn to code"
                </div>
                    <div className='MSC-Body'>
                        Confident in my assessment as an exeptional teacher, I wanted to challange myself and study something. My admiration for tech and creativity lead me to learning full stack web developemnt and after centering my first Div I was hooked.
                        <br />
                        <br />
                        In 2023 I moved to Ho Chi Minh City and started working part time so I could focus on writing more code.
                    </div></div> : null}
            </div>

            <div className='scrollpage'>

            </div>

            <div className='scrollpage'>

            </div>

            <div className='scrollpage'>

            </div>

            <div className='scrollpage'>
            </div>

        </div>
    );
};
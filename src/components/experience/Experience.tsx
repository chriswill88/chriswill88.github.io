import svg from "../../assets/PlayStation_logo.svg"
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Experience = () => {
    const container = useRef(null);
    useGSAP(
        () => {
            gsap.from('.playstation-svg', {
                scrollTrigger: {
                    trigger: '.exp-container',
                    start: 'top top', // when the top of the trigger hits the top of the viewport
                    end: '+=1000', // end after scrolling 500px beyond the start
                    scrub: true,
                },
                
                x: 1000 }); // <-- automatically reverted
            gsap.from('.exp', {
                scrollTrigger: {
                    trigger: '.exp-container',
                    start: 'top top', // when the top of the trigger hits the top of the viewport
                    end: '+=900', // end after scrolling 500px beyond the start
                    scrub: true,
                },
                x: -1000 }); // <-- automatically reverted
        },
        { scope: container }
    );

    return <div ref={container} className="exp-container">
        <div className="exp">
            <div className="inner-info">
                <h3>Full Stack Software Engineer - Sony Interactive Entertainment</h3>
                <p>2021 - 2024</p>
                <div>
                    <p>
                        Developed, tested, and maintained the media app on the <a id="ps-link" href="https://www.playstation.com/en-us/ps4/">PS4↗</a> and <a id="ps-link" href="https://www.playstation.com/en-us/ps5/">PS5↗</a>. 
                        Worked closely with cross-functional teams, including other developers, designers, and project managers to impliment accessibility compliant and pixel perfect frontend features and backend features.
                    </p>
                    <a id="app-link" href="https://www.playstation.com/en-us/ps4/ps4-entertainment/">TV and Video app (PS4)↗</a>
                    <a id="app-link" href="https://www.playstation.com/en-us/ps5/ps5-entertainment/">Media Hub (PS5)↗</a>
                </div>
                <div className="tech-list">
                    <p>Javascript</p> <p>React</p> <p>Ember Js</p> <p>Java</p> <p>Spring Boot</p> <p>Node</p> <p>Jira</p> <p>Confluence</p> <p>AWS</p> <p>Chai</p> <p>Jest</p> <p>Mocha</p> <p>Junit</p>
                </div>
            </div>
        </div>
        <img className="playstation-svg" src={svg} />
    </div>
}

export default Experience;
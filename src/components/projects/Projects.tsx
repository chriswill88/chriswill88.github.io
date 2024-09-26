import { projectsData } from "../../fixture/data";
import Project from "../project/Project";
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Projects() {
    const container = useRef(null);

    useGSAP(
        () => {
            const scrollConfig = {
                trigger: ".projects-bin",
                // toggleActions: "restart none none none"
                start: "-=1000",
                end:  '+=500',
                scrub: true
            }

            gsap.from('.projects-bin', {
                scrollTrigger: scrollConfig,
                opacity: 0,
                x: 100 }); 
        },
        { scope: container }
    );

    return <div ref={container} className="projects-container">
        <div className="projects-bin">
            <p>PROJECTS</p>
            <div className="project-group hide-scrollbar">
                {projectsData.map((project, ind) => <Project key={ind} project={project}/>)}
            </div>
        </div>
    </div>
}
import { technologiesMap } from "../../fixture/data";
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const getSkills = (subject: string) => {
    return technologiesMap.filter(({type}) => type == subject)
}

const Skills = () => {
    const container = useRef(null);

    useGSAP(
        () => {
            const scrollConfig = {
                trigger: ".skills",
                // toggleActions: "restart none none none"
                start: "-=800",
                end:  '+=400',
                scrub: true,
            
            }

            gsap.from('.language, .tool', {
                scrollTrigger: scrollConfig,
                y: 100 }); 
            gsap.from('.subtitle, .framework, .creative', {
                scrollTrigger: scrollConfig,
                y: -100 });
            gsap.from('.language, .tool, .subtitle, .framework, .creative', {
                scrollTrigger: scrollConfig,
                opacity: 0 });
        },
        { scope: container }
    );

    return <div ref={container} className="skills-container">
        <div className="skills see-able">
            <div className="subtitle see-able">
                <p>SKILLS</p>
            </div>
            <div className="language">
                <p className="tech-title">LANGUAGES</p>
                {
                    getSkills("lang").map((obj, ind) => <p key={ind} className="tech-name">{obj.name}</p>)
                }
            </div>

            <div className="framework">
                <p className="tech-title">FRAMEWORKS</p>
                {
                    getSkills("framework").map((obj, ind) => <p key={ind} className="tech-name">{obj.name}</p>)
                }
            </div>
            <div className="tool">
                <p className="tech-title">TOOLS</p>
                {
                    getSkills("tool").map((obj, ind) => <p key={ind} className="tech-name">{obj.name}</p>)
                }
            </div>
            <div className="creative">
                <p className="tech-title">CREATIVE</p>
                {
                    getSkills("create").map((obj, ind) => <p key={ind} className="tech-name">{obj.name}</p>)
                }
            </div>
        </div>
    </div>
}

export default Skills;
import pdf from '../../assets/online-resume.pdf';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Footer = () => {
    const container = useRef(null);
    useGSAP(
        () => {
            const scrollConfig = {
                trigger: ".statement",
                start: "-=200",
                end:  '+=30',
                scrub: true
            }

            const scrollSurfConfig = {
                trigger: container.current,
                toggleActions: "restart none none none",
            }

            gsap.from('.statement, .links', {
                scrollTrigger: scrollConfig,
                duration: 3,
                opacity: 0, x: 100, ease: "power4.out" }); 
        
            gsap.from(".gnarly", {
                scrollTrigger: scrollSurfConfig,
                rotate: 20,
                yoyo: true,
                repeat: -1
            })
           
        },
        { scope: container }
    );

    return <div className='footer'>
        <p className='statement'>Designed & Developed by Christian Williams <span className='gnarly'>🤙</span> 2024</p>
        
        <div className="links">
            <a href="mailto::christian.willams77@outlook.com"><p>Email</p></a>
            <a href="https://www.linkedin.com/in/christian--williams/"><p>LinkedIn</p></a>
            {/* <a href="https://x.com/ChrisWill79"><p>X</p></a> */}
            <a href="https://github.com/chriswill88"><p>Github</p></a>
            <a href={pdf} target="_blank"><p>Resume</p></a>
        </div>
    </div>
}

export default Footer;
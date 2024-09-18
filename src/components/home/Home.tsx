import Projects from "../projects/Projects";
import Widget from "../widget/Widget";
import 'react-clock/dist/Clock.css';
import img from '../../assets/image.png'
import Skills from "../skills/Skills";
import { useAppContext } from "../../context/AppContext";

export default function Home() {
    const { appState } = useAppContext();
    return appState != "intro" && <div className="home-container">
        <div className="home">
            <div>
                {

                }
            </div>
            <div className="bio">
                <p>
                    Hey! I'm a full stack software engineer. 
                    I enjoy working on projects of all sorts, with a vast variety of coding languages and technologies.
                </p>
                <p>My latest role was at Sony Playstation as a full stack software engineer.</p>
                <p>I'm open for work!</p>
            </div>

            <img className="pro-image" src={img} alt="pro-image"/>
        </div>
        <Skills />
    </div>
}
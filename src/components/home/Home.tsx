import { useAppContext } from '../../context/AppContext';
import Stars from '../figures/Stars';

export default function Home() {
    const { appState } = useAppContext();

    return <div className="home">
            <div className="bio see-able">
                <p>Hello!  <span className='wave-emoji'>👋</span></p>
                <p>
                    I'm Christian Williams, I've been learning coding for about 5 years, with 3 years of full stack experience.
                    I enjoy working on projects of all sorts, with a variety of coding languages and technologies.
                </p>
                <p>
                    In my free time - you can find me working on the projects I keep forgetting to push to github, trying new board games with friends, trying out different foods, or finding something fun to get into.
                </p>

                <p>I'm open for work!</p>
                <p>Get in touch 🤝 <a className='mail' href='mailto:christian.williams77@outlook.com'>christian.williams77@outlook.com</a></p>
                
            </div>
            <div className={`title-container ${appState == 'main' && "main"} `}>
                <Stars />

            </div>      
        </div>
}
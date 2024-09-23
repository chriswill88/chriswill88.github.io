import pdf from '../../assets/online-resume.pdf'
import { useAppContext } from '../../context/AppContext';
import Hemisphere from '../figures/Hemisphere';
import Rays from '../figures/Rays';
import svg from '../../assets/pro-website-line.svg';
import circleSaying from '../../assets/enter.svg';
import Stars from '../figures/Stars';

const Sidebar = () => {
    const { appState, setAppState } = useAppContext();

    return <div className={`${appState == 'intro' ? 'intro' : 'sidebar-container'} `}>
        <div className={`inner-container`}>
            <div className={`title-container ${appState == 'main' && "main"} `}>
                {appState == 'intro' && <Rays />}
                <Stars />
                {appState == 'intro' && <img className="circle-tag" src={svg} />}
                <Hemisphere>
                    <div className="title">
                        <h1>Christian Williams</h1>
                        <p>Full Stack Software Engineer</p>
                    </div>
                </Hemisphere>
                {appState == 'intro' && <div className='enter' onClick={() => setAppState('main')}>↵<img src={circleSaying} /></div>}
            </div>
            { appState != "intro" && <hr></hr>}
            {
            appState != "intro" && <div>
                <h3>Home</h3>
                <h3>About</h3>
                <h3>Resume</h3>
                <hr></hr>
                <div className="links">
                    <a className="" href="mailto::christian.willams77@outlook.com"><h3>Email</h3></a>
                    <a className="" href="https://www.linkedin.com/in/christian--williams/"><h3>LinkedIn</h3></a>
                    <a className="" href="https://x.com/ChrisWill79"><h3>X</h3></a>
                    <a className="" href="https://github.com/chriswill88"><h3>Github</h3></a>
                    <a className="" href={pdf} target="_blank"><h3>Resume</h3></a>
                </div>
                <div className='enter' onClick={() => setAppState('intro')}>↵</div>
            </div>}
        </div>
    </div>
}

const SideBarPlaceHolder = () => {
    const { appState } = useAppContext();

    return appState != 'intro' && <div className='sidebar-placeholder'>
    </div>
}

export default Sidebar;
export {SideBarPlaceHolder};

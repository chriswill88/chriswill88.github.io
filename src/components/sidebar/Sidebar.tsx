import pdf from '../../assets/online-resume.pdf'
import { useAppContext } from '../../context/AppContext';
import Hemisphere from '../figures/Hemisphere';
import Svg from '../../assets/pro-website-line.svg';
import Rays from '../figures/rays';
import svg from '../../assets/pro-website-line.svg';




const Sidebar = () => {
    const { appState } = useAppContext();

    return <div className={`${appState == 'intro' ? 'intro' : 'sidebar-container'} `}>
        <div className="inner-container">
        <Rays />
        <img className="circle-tag" src={svg} />

            <div className="title-container">
                <Hemisphere>
                    <div className="title">
                        <h1>Christian Williams</h1>
                        <p>Full Stack Software Engineer</p>
                    </div>
                </Hemisphere>
            </div>
                
            <div>
            </div>
            {/* <hr></hr> */}

            {appState != "intro" && <div>
                <h3>Home</h3>
                <h3>About</h3>
                <h3>Resume</h3>
                <hr></hr>


                <h3>Lets Connect!</h3>
                <div className="">
                    <a className="" href="mailto::christian.willams77@outlook.com"><div>Email</div></a>
                    <a className="" href="https://www.linkedin.com/in/christian--williams/"><div>LinkedIn</div></a>
                    <a className="" href="https://x.com/ChrisWill79"><div>X</div></a>
                    <a className="" href="https://github.com/chriswill88"><div>Github</div></a>
                    <a className="" href={pdf} target="_blank"><div>Resume</div></a>
                </div>
            </div>}
        </div>
    </div>
}


export default Sidebar;
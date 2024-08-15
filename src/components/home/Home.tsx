import Widget from "../widget/Widget";
import 'react-clock/dist/Clock.css';



export default function Home() {
    return <div className="home">
        <div className="head">
            <div className="bio">
                <h1 className="name">Christian Williams</h1>
                <p>
                    Hey! I'm a full stack software engineer. 
                    I enjoy working on projects of all sorts.
                </p>
                <p>I'm open for work!</p>

            </div>

            <Widget />
        </div>

        

        {/* <div className="body">
            <div className="left container">
                <h3>Projects</h3>

                Coming soon!
            </div>

            <div className="right container">
            </div>
        </div> */}

        <div className="connect">
            <h3>Lets Connect!</h3>
            <div className="socials">
                <a className="social-card" href="mailto::christian.willams77@outlook.com"><div>Email</div></a>
                <a className="social-card" href="https://www.linkedin.com/in/christian--williams/"><div>LinkedIn</div></a>
                <a className="social-card" href="https://x.com/ChrisWill79"><div>X</div></a>
                <a className="social-card" href="https://github.com/chriswill88"><div>Github</div></a>
            </div>
        </div>
    </div>
}
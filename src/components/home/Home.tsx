import img from '../../assets/image.png';

export default function Home() {
    return <div className="home">
            <div className="bio see-able">
                <p>Hello!</p>
                <p>
                    I'm Christian Williams, I have about 3 years of full stack experience.
                    I enjoy working on projects of all sorts, with a vast variety of coding languages and technologies.
                </p>
                <p>
                    In my free time - I could be working on projects I keep forgetting to push to github, trying board games with friends, trying out new foods, or finding something fun to do.
                </p>

                <p>Get in touch <a href='mailto:christian.williams77@outlook.com'>christian.williams77@outlook.com</a></p>
                {/* <p>My latest role was at Sony Playstation as a full stack software engineer.</p>
                <p>I'm open for work!</p> */}
            </div>
            {/* <img className="pro-image see-able" src={img} alt="pro-image"/> */}
        </div>
}
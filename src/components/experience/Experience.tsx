import MemoryCard from "./MemoryCards";

const Experience = () => {
    return <div className="exp-container">
        <div className="exp">
            <p>2021 - 2024</p>
            <div className="inner-info">
                <h3>Full Stack Software Engineer - Sony Interactive Entertainment</h3>
                <div>
                    <p>Developed, tested, and maintained the media app on the <a href="https://www.playstation.com/en-us/ps4/">PS4</a> and <a href="https://www.playstation.com/en-us/ps5/">PS5</a>. Worked closely with crossfunctional teams, 
                    including other developers, designers, and project managers. </p>
                    <a id="app-link" href="https://www.playstation.com/en-us/ps4/ps4-entertainment/">Tv and Video app (PS4)</a>
                    <a id="app-link" href="https://www.playstation.com/en-us/ps5/ps5-entertainment/">Media Hub (PS5)</a>
                </div>
                <div className="tech-list">
                    <p>Javascript</p> <p>React</p> <p>Ember Js</p> <p>Java</p> <p>Spring Boot</p> <p>Node</p> <p>Jira</p> <p>Confluence</p>
                </div>

            </div>
            {/* <img src="https://gmedia.playstation.com/is/image/SIEPDC/ps5-entertainment-tv-image-block-01-en-08nov23?$1600px--t$" />
            <img src="https://gmedia.playstation.com/is/image/SIEPDC/ps4-entertainment-image-block-01-ps4-12jul22$en?$1600px--t$" /> */}
        </div>
        {/* <MemoryCard /> */}
    </div>
}

export default Experience;
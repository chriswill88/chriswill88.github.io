import { technologiesMap } from "../../fixture/data";

const getSkills = (subject: string) => {
    return technologiesMap.filter(({type}) => type == subject)
}

const Skills = () => {
    return <div className="skills-container">


        <div className="skills see-able">
            <div className="subtitle see-able">
                <p>SKILLS</p>
            </div>
            <div>
                <p className="tech-title">LANGUAGES</p>
                {
                    getSkills("lang").map((obj, ind) => <p key={ind} className="tech-name">{obj.name}</p>)
                }
            </div>

            <div><p className="tech-title">FRAMEWORKS</p>
                {
                    getSkills("framework").map((obj, ind) => <p key={ind} className="tech-name">{obj.name}</p>)
                }
            </div>
            <div>
                <p className="tech-title">TOOLS</p>
                {
                    getSkills("tool").map((obj, ind) => <p key={ind} className="tech-name">{obj.name}</p>)
                }
            </div>
            <div>
                <p className="tech-title">CREATIVE</p>
                {
                    getSkills("create").map((obj, ind) => <p key={ind} className="tech-name">{obj.name}</p>)
                }
            </div>
        </div>

    </div>
}

export default Skills;
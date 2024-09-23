

const Skills = () => {
    return <div className="skills-container">
        <div className="subtitle see-able">
            <h2>Skills</h2>
        </div>

        <div className="skills see-able">
            <div id="general" className="column">
                <div ><p className="tech-title">General</p></div>
            </div>
            <div className="column">
                <div><p className="tech-title">Frontend</p></div>
                <div><p className="tech-title">Backend</p></div>
            </div>
            <div className="column">
                <div><p className="tech-title">AI/ML</p></div>
                <div><p className="tech-title">Creative/Design</p></div>
            </div>
        </div>

    </div>
}

export default Skills;
import { projectsData } from "../../fixture/data";
import Project from "../project/Project";

export default function Projects() {
    return <div className="projects-container">
        <div>
            <p>PROJECTS</p>
            <div className="project-group hide-scrollbar">
                {projectsData.map((project, ind) => <Project key={ind} project={project}/>)}
            </div>
        </div>
    </div>
}
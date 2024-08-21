import { projectsData } from "../../fixture/data";
import Project from "../project/Project";

export default function Projects() {
    return <>
        <div>
            <h3>Projects</h3>
            <div className="projects-container hide-scrollbar">
                {projectsData.map((project, ind) => <Project key={ind} project={project}/>)}
            </div>
        </div>
    </>
}
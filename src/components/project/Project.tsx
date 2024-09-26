import { useState } from "react";
import Tech from "../tech/Tech";

export default function Project({project}: any) {
    const [showMore, setShowMore] = useState(false)
    return <div className="project-card">
        <h3 id="name">{project?.name}</h3>
        <p id="desc">{project?.description}</p>
        <div className="link-container">
            {project?.github ? <a href={project?.github}>Github Link</a> : <p>Github not available!</p>}

            {project?.url ? <a href={project?.url}>Visit {project?.name}</a> : <p>Project not live yet!</p>}
        </div>
        
        <p>Technologies:</p>
        <div className="tech-container">
            {
                project.techNames.map((techName: any, ind: number) => (ind < 7) ? <Tech key={ind} techName={techName} /> : showMore ? <Tech key={ind} techName={techName} /> : null)
            }
        </div>
        <div onClick={() => setShowMore((value) => !value)}>{!showMore ? "See All" : "show less"}</div>

    </div>
}
import Tech from "../Tech/Tech";

export default function Project({project}: any) {
    return <div className="project-card">
        <p>{project?.name}</p>
        <p>{project?.description}</p>
        <div className="link-container">
            <a href={project?.github}>Github Link</a>
            {project?.url ? <a href={project?.url}>Visit {project?.name}</a> : <p>Project not live yet!</p>}
        </div>
        <p>Technologies:</p>
        <div className="tech-container">
            {
                project.techNames.map((techName: any, ind: Number) => <Tech key={ind} techName={techName} />)
            }
        </div>
    </div>
}
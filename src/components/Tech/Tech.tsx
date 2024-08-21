import { useEffect, useRef, useState } from "react"
import { technologiesMap } from "../../fixture/data"

const getTechUrl = (name: string) => {
    const techObj = technologiesMap.find((tech) => tech.name == name)
    console.log("techObj", techObj)
    return techObj?.url
}

export default function Tech({ techName }: any) {
    const [focus, setFocus] = useState(false);   
    
    return <div className="tech-img-container" onMouseEnter={() => setFocus(true)} onMouseLeave={() => setFocus(false)}>
        {focus && <div className="tech-name">{techName}</div>}
        <img className="tech-img" src={`${getTechUrl(techName)}`}/>
    </div>
}
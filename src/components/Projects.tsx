import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionalComponent } from "preact"
import Fade from "react-reveal/Fade";
import { projects } from "../data/projects.json";
import { scrollEv } from "../scrolling";

export default function Projects() {
    return <div id="projects" class="page">
        <Fade>
            <div class="updown up">
                <a href="#about" onClick={scrollEv('about')}>
                    <FontAwesomeIcon icon={faChevronUp} /> About <FontAwesomeIcon icon={faChevronUp} />
                </a>
            </div>
        </Fade>

        <div class="page-content">
            <Fade>
                <h1>Projects</h1>
                
                <h2>2021</h2>
                <ul>
                    {projects[2021].map(p => <Project {...p} />)}
                </ul>

                <h2>2022</h2>
                <h3>Soon&#8482;</h3>
                {/* <ul>
                    {projects[2022].map(p => <Project {...p} />)}
                </ul> */}
            </Fade>
        </div>
    </div>
}

interface ProjectProps {
    title: string
    link: string
    description: string
}

const Project: FunctionalComponent<ProjectProps> = (props) => {
    return <li>
        <h3>
            <a href={props.link}>
                {props.title}
            </a>
        </h3>
        <p>
            {props.description}
        </p>
    </li>
};

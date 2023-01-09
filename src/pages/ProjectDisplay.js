import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ProjectList } from '../helpers/ProjectList';
import GitHubIcon from '@material-ui/icons/GitHub';
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
    const { id } = useParams();
    const project = ProjectList[id];
    const nav = useNavigate();
    const goBack = () => {
        nav(-1);
    }
    return (
        <div className='project'>
            <h1>{project.name}</h1>
            <img src={project.image} />
            <p>
                <b>Skills:</b> {project.skills}
            </p>

            <a href={project.link} target="_blank" rel="noopener noreferrer">
                <GitHubIcon />
            </a>
            <h4>Description:</h4> {project.desc}
            {/* <br /> */}
            <button onClick={goBack}>Go back</button>
        </div>
    )
}

export default ProjectDisplay;
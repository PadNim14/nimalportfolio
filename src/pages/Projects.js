import React from 'react'
import ProjectItem from '../components/ProjectItem'
import '../styles/Projects.css';
import Video from '../helpers/Video';
import { ProjectList } from '../helpers/ProjectList';

function Projects() {
  return (
    <div className='projects'>
      <h1>Some Projects I've Worked On...</h1>
      <div className='projectList'>
        {ProjectList.map((project, idx) => {
          return <ProjectItem id={idx} name={project.name} image={project.image} />
        })}
      </div>
      {/* <Video /> */}
    </div>
  )
}

export default Projects
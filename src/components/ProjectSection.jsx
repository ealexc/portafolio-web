import React from 'react';
import ProjectsItems from '../assets/ProjectsItems';
import ProjectCard from './ProjectCard';

const ProjectSection = () => {
  return (
    <div className='py-5' id='projects'>
      <div className='container'>
        <h3 className='font-weight-light'>
          Mis <span style={{ fontWeight: 'bold' }}>Proyectos</span>
        </h3>

        {/* Contenedor principal con estilos de Flexbox */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {ProjectsItems.map((project) => (
            <div key={project.id} style={{ margin: '10px' }}>
              <ProjectCard
                projectImage={project.projectImage}
                projectName={project.projectTitle}
                projectDesc={project.projectDescription}
                projectLink={project.projectLink}
                projectGit={project.projectGit}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;

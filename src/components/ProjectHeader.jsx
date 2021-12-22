import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProjectHeader = ({ selectedProject, projects }) => {
  const { title, image, description } = selectedProject;
  const projectsThatIsNotSelect = projects.filter(
    (project) => project.id !== selectedProject.id,
  );
  const [prevProject, setPrevProject] = useState(null);
  const [nextProject, setNextProject] = useState(null);

  useEffect(() => {
    setPrevProject();
    console.log(projectsThatIsNotSelect);
  }, []);
  return (
    <>
      <div className="justify-center mb-20 flex py-24 px-20 gap-[35rem]">
        <h1 className="text-4xl">{title}</h1>
        <p className="font-light tracking-widest max-w-3xl leading-relaxed">
          {description}
        </p>
      </div>
      <div>
        <img className="w-full h-screen" src={image} alt={title} />
      </div>
      <div className="flex justify-between">
        <Link to="/"></Link>
        <Link to="/"></Link>
      </div>
    </>
  );
};

export default ProjectHeader;

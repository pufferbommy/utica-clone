import React from 'react';

const ProjectHeader = ({ selectedProject }) => {
  const { title, image, description } = selectedProject;
  return (
    <>
      <div className="flex py-24 px-20 gap-[35rem]">
        <div>
          <h1 className="text-5xl">{title}</h1>
        </div>
        <div>
          <p className="font-light tracking-wider leading-relaxed">{description}</p>
        </div>
      </div>
      <div>
        <div>
          <img src={image} alt="" />
        </div>
      </div>
    </>
  );
};

export default ProjectHeader;

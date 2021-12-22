import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from 'react-icons/md';
import { useScrollToTop } from '../hooks/useScrollToTop';

const ProjectHeader = ({ selectedProject, prevProject, nextProject }) => {
  const { title, image, description } = selectedProject;

  return (
    <>
      <div className="justify-center mb-20 flex py-24 px-20 gap-[35rem]">
        <h1 className="text-4xl">{title}</h1>
        <p className="font-light tracking-widest max-w-3xl leading-relaxed">
          {description}
        </p>
      </div>
      <div>
        <img className="w-full opacity-[0.85] h-screen" src={image} alt={title} />
      </div>
      <div className="flex my-12 mx-20 text-4xl justify-between">
        <Link
          onClick={useScrollToTop}
          className="flex gap-8"
          to={prevProject.destination}
        >
          {prevProject.title && <MdOutlineArrowBackIos />}
          {prevProject.title}
        </Link>
        <Link
          onClick={useScrollToTop}
          className="flex gap-8"
          to={nextProject.destination}
        >
          {nextProject.title}
          {nextProject.title && <MdOutlineArrowForwardIos />}
        </Link>
      </div>
    </>
  );
};

export default ProjectHeader;

import React from 'react';

import { Link } from 'react-router-dom';

const ProjectCard = ({ image, title, destination }) => {
  const scrollToTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };
  return (
    <>
      <Link className="group" onClick={scrollToTop} to={destination}>
        <div className="relative">
          <div className="group-hover:bg-white group-hover:opacity-40 duration-200 absolute w-full opacity-0 h-[40rem]" />
          <img className="object-cover w-full h-[40rem]" src={image} alt={title} />
        </div>
        <h1 className="mt-6 text-2xl pb-4">{title}</h1>
      </Link>
    </>
  );
};

export default ProjectCard;

import React from 'react';

import { Link } from 'react-router-dom';

const ProjectCard = ({ image, title, destination }) => {
  return (
    <>
      <Link className="group" to={destination}>
        <img
          className="group-hover:brightness-110 duration-300 transition"
          src={image}
          alt={title}
        />
        <h1 className="mt-4 text-3xl pb-4">{title}</h1>
      </Link>
    </>
  );
};

export default ProjectCard;

import React from 'react';
import { useScrollToTop } from '../hooks/useScrollToTop';
import { Link } from 'react-router-dom';

const Button = ({ title, destination }) => {
  return (
    <>
      <Link
        onClick={useScrollToTop}
        className="inline-block tracking-wide font-medium py-5 px-10 text-lg text-black bg-white hover:bg-gray-300 transition duration-300"
        to={destination}
      >
        {title}
      </Link>
    </>
  );
};

export default Button;

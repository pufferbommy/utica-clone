import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center p-20 pt-10">
        <div>
          <Link className="text-4xl" to="/">
            Utica
          </Link>
        </div>
        <div className="flex gap-6 font-light">
          <NavLink to="/">Work</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/our-team">Our Team</NavLink>
          <NavLink to="/press">Press</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;

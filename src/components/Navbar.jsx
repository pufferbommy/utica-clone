import React, { useEffect, useState } from 'react';
import { Link, NavLink, useMatch } from 'react-router-dom';

const Navbar = () => {
  const [isProjectPage, setIsProjectPage] = useState(false);
  let match = useMatch('/work-1/:id');

  useEffect(() => {
    if (match) {
      setIsProjectPage(true);
    } else {
      setIsProjectPage(false);
    }
  }, [match]);

  return (
    <>
      <div className="flex justify-between items-center p-20 pt-10">
        <div>
          <Link className="text-4xl" to="/">
            Utica
          </Link>
        </div>
        <div className="flex gap-6 font-light">
          <NavLink className={`${isProjectPage && 'active'}`} to="/">
            Work
          </NavLink>
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

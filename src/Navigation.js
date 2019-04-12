import React from "react";
import { NavLink } from 'react-router-dom'; 

const Navigation = () => {
  return (
    <div>
      <NavLink to="/">Student</NavLink>
      <NavLink to="/odsjek">Odsjek</NavLink>
    </div>
  );
};

export default Navigation;
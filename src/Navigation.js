import React from "react";
import { NavLink } from 'react-router-dom'; 


const Navigation = () => {
  return (
    <nav className="navbar navbar-dark bg-primary">
    <div className="col-sm-2">
      <NavLink to="/" className="col-sm-2">Student</NavLink>
      <NavLink to="/odsjek" className="col-sm-2">Odsjek</NavLink>
      <NavLink to="/profesor" className="col-sm-2">Profesor</NavLink>
    </div>
    </nav>
  );
};

export default Navigation;
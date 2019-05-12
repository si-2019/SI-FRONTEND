import React from "react";
import { NavLink } from 'react-router-dom'; 


const Navigation = () => {
  return (
    <nav className="navbar navbar-dark bg-primary">
    <div className="col-sm-2">
      <NavLink to="/Alpha" className="col-sm-2">Student</NavLink>
      <NavLink to="/Alpha/odsjek" className="col-sm-2">Odsjek</NavLink>
      <NavLink to="/Alpha/profesor" className="col-sm-2">Profesor</NavLink>
      <NavLink to="/Alpha/asistent" className="col-sm-2">Asistent</NavLink>
    </div>
    </nav>
  );
};

export default Navigation;
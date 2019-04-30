import React from "react";
import { NavLink } from 'react-router-dom'; 


const Navigation = () => {
  return (
    <nav className="navbar navbar-dark bg-primary">
    <div className="col-sm-2">
      <NavLink to="/student" className="col-sm-2" style={{color: "#ecf0f1"}}>Student</NavLink>
      <NavLink to="/odsjek" className="col-sm-2" style={{color: "#ecf0f1"}}>Odsjek</NavLink>
      <NavLink to="/profesor" className="col-sm-2" style={{color: "#ecf0f1"}}>Profesor</NavLink>
      <NavLink to="/asistent" className="col-sm-2" style={{color: "#ecf0f1"}}>Asistent</NavLink>
    </div>
    </nav>
  );
};

export default Navigation;


/*<a class="navbar-brand" href="#">Administrativni modul</a>*/
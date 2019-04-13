import React from "react";
import { NavLink } from 'react-router-dom'; 


const Navigation = () => {
  return (
    <nav className="navbar navbar-dark bg-primary">
    <div className="col-sm-2">

    {/*ovdje dodajete svoj dio u navigation bar (prof, predmet)
       pogledati App.js*/}

      <NavLink to="/" className="col-sm-2">Student</NavLink>
      <NavLink to="/odsjek" className="col-sm-2">Odsjek</NavLink>
    </div>
    </nav>
  );
};

export default Navigation;
import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import PredmetZavrsniRad from "../Predmet/PredmetZavrsniRad";

class ListaPredmeta extends Component {
  render() {
    return (
      <div class="list-group" style={{margin:-5}}>
      <NavLink to='/Delta/SI' class="list-group-item list-group-item-action active">
        Softver Inženjering
      </NavLink>
      <NavLink class="list-group-item list-group-item-action">
        Vještačka Inteligencija
      </NavLink>
      <NavLink class="list-group-item list-group-item-action">
        Projektovanje Informacionih sistema
      </NavLink>
      <NavLink class="list-group-item list-group-item-action">
        Administracija Računarskih Mreža
      </NavLink>
      <NavLink to='/Delta/ZavrsniRad' class="list-group-item list-group-item-action" exact='true'>
        Završni Rad
      </NavLink>
    </div>
    );
  }
}

export default ListaPredmeta;

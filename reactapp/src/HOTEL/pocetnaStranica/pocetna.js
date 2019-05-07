import React, { Component } from 'react';
import './pocetna.css';
import {Link} from 'react-router-dom';
import color from '@material-ui/core/colors/deepPurple';
class AnketePocetna extends Component {
  render() {
    return (
      <div className="App">
        <nav class="NavPadding" >
          <h2>ANKETE</h2>
            <div class="collapse navbar-collapse" id="navbarColor01"> </div>
        </nav>

        <div class="btn-group-vertical" data-toggle="buttons">
          <br></br>
          <Link to ="/HOTEL/kreiranje">
          <button type="button" class="ButtonPadding" id="kreiranje" >Kreiraj anketu</button>
          <br></br>
          </Link>
          <Link to="/HOTEL/popunjavanje">
          <button type="button" class="ButtonPadding" id="popunjavanje">Popuni anketu</button>
          <br></br>
          </Link>
          <Link to="/HOTEL/liste/mojeAnkete">
          <button type="button" class="ButtonPadding" id="mojeAnkete">Moje ankete</button>
          <br></br>
          </Link>
          <Link to="HOTEL/liste/javneAnkete">
          <button type="button" class="ButtonPadding" id="javneAnkete">Javne ankete</button>
          <br></br>
          </Link>
          <Link to="/HOTEL/rezultati">
          <button type="button" class="ButtonPadding" id="rezultati">Rezultati anketa</button>
          <br></br>
          </Link>
        </div>
      </div>

      
    );
  }
}
export default AnketePocetna;
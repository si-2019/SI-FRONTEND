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
          <button type="button" class="btn btn-primary btn-lg" id="kreiranje" >KREIRAJ ANKETU</button>
          <br></br>
          </Link>
          <Link to="/HOTEL/popunjavanje">
          <button type="button" class="btn btn-primary btn-lg" id="popunjavanje">POPUNI ANKETU</button>
          <br></br>
          </Link>
          <Link to="/HOTEL/liste/mojeAnkete">
          <button type="button" class="btn btn-primary btn-lg" id="mojeAnkete">MOJE ANKETE</button>
          <br></br>
          </Link>
          <Link to="HOTEL/liste/javneAnkete">
          <button type="button" class="btn btn-primary btn-lg" id="javneAnkete">JAVNE ANKETE</button>
          <br></br>
          </Link>
          <Link to="/HOTEL/rezultati">
          <button type="button" class="btn btn-primary btn-lg" id="rezultati">REZULTATI ANKETA</button>
          <br></br>
          </Link>
        </div>
      </div>

      
    );
  }
}
export default AnketePocetna;
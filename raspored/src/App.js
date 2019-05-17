import {BrowserRouter, Route} from 'react-router-dom';
import React, { Component } from 'react';
import RasporedStudent from './components/Raspored/rasporedStudenta/raspored.js';
import RasporedProfesor from './components/Raspored/rasporedProfesora/raspored.js';
import RasporedSalaStudent from './components/Raspored/rasporedSaleZaStudenta/raspored.js';
import RasporedSalaProfesor from './components/Raspored/rasporedSaleZaProfesora/raspored.js';
import GrupeStudent from './components/Grupe/grupeStudent/grupeStudent.js';
import GrupeProfesor from './components/Grupe/grupeProfesor/grupeProfesor.js';
export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/rasporedStudent" component={RasporedStudent}/>
          <Route exact path="/rasporedProfesor" component={RasporedProfesor}/>
          <Route exact path="/rasporedSaleZaStudenta" component={RasporedSalaStudent}/>
          <Route exact path="/rasporedSaleZaProfesora" component={RasporedSalaProfesor}/>
          <Route exact path="/grupeStudent" component={GrupeStudent}/>
          <Route exact path="/grupeProfesor" component={GrupeProfesor}/>         
        </div>
      </BrowserRouter>
    )
  }
}

export default App





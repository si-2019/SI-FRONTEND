import {BrowserRouter, Route} from 'react-router-dom';
import React, { Component } from 'react';
import RasporedStudent from './components/rasporedStudenta/raspored.js';
import RasporedProfesor from './components/rasporedProfesora/raspored.js';
import RasporedSalaStudent from './components/rasporedSaleZaStudenta/raspored.js';
import RasporedSalaProfesor from './components/rasporedSaleZaProfesora/raspored.js';

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/rasporedStudent" component={RasporedStudent}/>
          <Route path="/rasporedProfesor" component={RasporedProfesor}/>
          <Route path="/rasporedSaleZaStudenta" component={RasporedSalaStudent}/>
          <Route path="/rasporedSaleZaProfesora" component={RasporedSalaProfesor}/>
        
        </div>
      </BrowserRouter>
    )
  }
}

export default App





import {BrowserRouter, Route} from 'react-router-dom';
import React, { Component } from 'react';
import RasporedStudent from './components/Raspored/rasporedStudenta/raspored.js';
import RasporedProfesor from './components/Raspored/rasporedProfesora/raspored.js';
import RasporedSalaStudent from './components/Raspored/rasporedSaleZaStudenta/raspored.js';
import RasporedSalaProfesor from './components/Raspored/rasporedSaleZaProfesora/raspored.js';
import GrupeStudent from './components/Grupe/grupeStudent/grupeStudent.js';
import GrupeProfesor from './components/Grupe/grupeProfesor/grupeProfesor.js';
import UniformHome from './components/Home/home.js';
export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/UNIFORM" component={UniformHome}/>
          <Route path="/UNIFORM/rasporedStudent" component={RasporedStudent}/>
          <Route path="/UNIFORM/rasporedProfesor" component={RasporedProfesor}/>
          <Route path="/UNIFORM/rasporedSaleZaStudenta" component={RasporedSalaStudent}/>
          <Route path="/UNIFORM/rasporedSaleZaProfesora" component={RasporedSalaProfesor}/>
          <Route path="/UNIFORM/grupeStudent" component={GrupeStudent}/>
          <Route path="/UNIFORM/grupeProfesor" component={GrupeProfesor}/>         
        </div>
      </BrowserRouter>
    )
  }
}

export default App





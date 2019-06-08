import {BrowserRouter, Route} from 'react-router-dom';
import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import './App.css';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import RasporedStudent from './components/Raspored/rasporedStudenta/raspored.js';
import RasporedProfesor from './components/Raspored/rasporedProfesora/raspored.js';
import RasporedSalaStudent from './components/Raspored/rasporedSaleZaStudenta/raspored.js';
import RasporedSalaProfesor from './components/Raspored/rasporedSaleZaProfesora/raspored.js';
import GrupeStudent from './components/Grupe/grupeStudent/grupeStudent.js';
import GrupeProfesor from './components/Grupe/grupeProfesor/grupeProfesor.js';
import UniformHome from './components/Home/home.js';
import LeftMenuStudent from './components/Home/LeftMenuStudent.js';
export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,  //open pokazuje da li formu treba prikazati ili ne
      activeContentId: 1
    };
  }

  //Funkcija kojom se otvara forma
  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    window.confirm('Prekinuti pisanje issuea?') && this.setState({ open: false });
  };

  onCloseModalAndSaveAsDraft = () => {
    window.confirm('Save issue as draft and close?') && this.setState({ open: false });
  };

  onChangeActiveId = (id) => {
    this.setState({
      activeContentId: id,
    })
  };

  onChangeActiveIdS = () => {
    this.setState({
      activeContentId: 1,
    })
  };

  render() {
    const { open } = this.state;
    return (
      <div>
        <h2>Raspored</h2>
        <div className="App">
          <div className="row" >
            <div id = "head">
              <button type="button" className="btn btn-primary left-buttons" id="startButton" onClick={this.onChangeActiveIdS} >
                Raspored studenta
              </button>
              <div id = "search-issue-tab">Ovdje ce biti search filter
              </div>

            </div>

            <div id = "main">
              <div id = "left">
                <LeftMenuStudent triggerChangeActiveId = {this.onChangeActiveId}/>
              </div>
              <div id = "right">
                <div 
                    id = "RasporedStudenta" 
                    style={{display : this.state.activeContentId == 1 ? 'inherit' : 'none'}}
                ><RasporedStudent/>
                </div>
                <div 
                    id = "RasporedProfesora" 
                    style={{display : this.state.activeContentId == 2 ? 'inherit' : 'none'}}
                ><RasporedProfesor/>
                </div>
                <div 
                    id = "RasporedSaleZaStudenta" 
                    style={{display : this.state.activeContentId == 3 ? 'inherit' : 'none'}}
                > <RasporedSalaStudent/>
                </div>

                <div 
                    id = "RasporedSaleZaProfesora" 
                    style={{display : this.state.activeContentId == 4 ? 'inherit' : 'none'}}
                ><RasporedSalaProfesor/>
                </div>
                <div 
                    id = "GrupeStudenta" 
                    style={{display : this.state.activeContentId == 5 ? 'inherit' : 'none'}}
                ><GrupeStudent/>
                </div>
                <div 
                    id = "GrupeProfesora" 
                    style={{display : this.state.activeContentId == 6 ? 'inherit' : 'none'}}
                > <GrupeProfesor/>
                </div>
                                               
                
              </div>
            </div>

          </div>             
          
        </div>
      </div>
    );
  }  
}

export default App





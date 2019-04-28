import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';


import NovaTema from './components/NovaTema';
import Lista from './components/ListaTema'
import "bootstrap/dist/css/bootstrap.css";
//moj stil za listu tema Treba se promjeniti
import './components/ListaTema/style.css';

class App extends Component {
  render() {
    return (
      <div className='container'>
        Tango
        <BrowserRouter>
          <Route path='/Teme' exact component={Lista}/>
          <Route path='/NovaTema' exact component={NovaTema}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

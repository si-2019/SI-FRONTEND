import React, { Component } from 'react';
import {BrowserRouter, Route, Router} from 'react-router-dom';


import NovaTema from './components/NovaTema/novaTema';
import Lista from './components/ListaTema'
import Komentar from './components/Komentar'
import "bootstrap/dist/css/bootstrap.css";
//moj stil za listu tema Treba se promjeniti
import './components/ListaTema/style.css';

class App extends Component {
  render() {
    return (
    
      <div className='container'>
        Tango
        <BrowserRouter>
          <Route path='/Tango/Teme' exact component={Lista}/>
          <Route path='/Tango/NovaTema' exact component={NovaTema}/>
          <Route path='/Tango/Komentar' exact component={Komentar}/>
        </BrowserRouter>
      </div>
   
    );
  }
}

export default App;

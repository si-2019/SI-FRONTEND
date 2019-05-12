import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap.css';
import './bootstrap.min.css';
import ReactDOM from 'react-dom';

import {kreirajNoviIssue} from './MainPage.js';
import NoviIssueForma from './komponente/NoviIssueForma.js';

class App extends Component {
  
  render() {
    return (
      
        <div className="App">

             <div class="row">
             <button type="button" className="btn btn-primary" id="kreirajNoviIssue" onClick={kreirajNoviIssue}>Kreiraj novi issue</button>
             </div>         
          
           
          
           <div id="overlay">
             <NoviIssueForma></NoviIssueForma>
           </div>

        </div>

       
      
    );
  }
}

export default App;

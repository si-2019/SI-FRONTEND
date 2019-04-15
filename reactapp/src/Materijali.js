import React, { Component } from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import MojiPredmeti from './mojiPredmeti.js'

import './bootstrap.css'

class Materijali extends Component {

    
      render() {
        return (
            <Router>
                <div class='row'>
                    <div class='col-3'>
                        <ul class="list-group">
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                <a href='/mojiPredmeti'>Moji predmeti</a>
                            </li>
                        </ul>
                    </div>
                    <div class='col-9'>
                        <Route exact path="/" component={MojiPredmeti} />
                        <Route path="/mojiPredmeti" component={MojiPredmeti}/>
                    </div>
                </div>
            </Router>
        );
     
    
      }
    }
    
    export default Materijali;
    


import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import MojiPredmeti from './mojiPredmeti.js'
import Ciklusi from './ciklusi.js'

class App extends Component {

  render() {
    
    return (
      <div>
        <h1>GOLF</h1>
        <div>
        <Router>
    
                <div class='row'>
                    <div class='col-3'>
                        <ul class="list-group">
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                <a href='/Golf/mojiPredmeti'>Moji predmeti</a>
                            </li>
                        </ul>
                     <Route path="/Golf" component={Ciklusi} />
                     
                    </div>
                    <div class='col-9'>
                        <Route exact path="/Golf" component={MojiPredmeti} />
                        <Route path="/Golf/mojiPredmeti" component={MojiPredmeti}/>
                    </div>
                </div>
            </Router>
        </div>
      </div>
    );
  }
}

export default App;

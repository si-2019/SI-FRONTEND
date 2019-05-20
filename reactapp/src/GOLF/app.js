import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import MojiPredmeti from './mojiPredmeti.js'
import Ciklusi from './ciklusi.js'
import proba from './proba.js'
import semestarPredmeti from './semestarPredmeti.js'
import StranicaPredmetaStudent from './stranicaPredmetaStudent'
import StranicaPredmetaProfesor from './stranicaPredmetaProfesor.js'

class App extends Component {

  render() {
    
    return (
      <div>
        <div>
        <Router>
    
                <div class='row' id='glavni'>
                    <div class='col-3' id='side'>
                        <ul class="list-group">
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                <a id='mpl' href='/Golf/mojiPredmeti'>Moji predmeti</a>
                            </li>
                        </ul>
                     <Ciklusi />
                     
                    </div>
                    <div class='col-9'>
                        <Route exact path="/Golf" component={proba} />
                        <Route path="/Golf/mojiPredmeti" component={MojiPredmeti}/>
                        <Route path="/Golf/semestarPredmeti/:ciklus/:odsjek/:semestar" component={semestarPredmeti}/>  
                        <Route path="/Golf/stranicaPredmetaStudent/:idPredmeta/:idKorisnika" component={StranicaPredmetaStudent}/>
                        <Route path="/Golf/stranicaPredmetaProfesor/:idPredmeta/:idKorisnika" component={StranicaPredmetaProfesor}/>
                 
				              </div>
                </div>
            </Router>
        </div>
      </div>
    );
  }
}

export default App;

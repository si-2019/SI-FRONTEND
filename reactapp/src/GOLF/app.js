import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import MojiPredmeti from './components/mojiPredmeti.js'
import Ciklusi from './components/ciklusi.js'
import proba from './components/proba.js'
import semestarPredmeti from './components/semestarPredmeti.js'
import StranicaPredmetaStudent from './components/stranicaPredmetaStudent'
import StranicaPredmetaProfesor from './components/stranicaPredmetaProfesor.js'

class App extends Component {

  render() {
    
    return (
      <div>
        <div>
        <Router>
                <div class='row' id='glavni'>
                    <div class='col-3'>
                        <ul class="list-group">
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                <Link id='mpl' to='/Golf/mojiPredmeti/1'>Moji predmeti</Link>
                            </li>
                        </ul>
                     <Ciklusi />
                     
                    </div>
                    <div class='col-9'>
                        <Route exact path="/Golf" component={proba} />
                        <Route path="/Golf/mojiPredmeti/:idKorisnika" component={MojiPredmeti}/>
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

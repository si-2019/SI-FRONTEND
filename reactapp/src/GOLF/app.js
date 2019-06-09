import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import MojiPredmeti from './components/mojiPredmeti.js'
import Ciklusi from './components/ciklusi.js'
import proba from './components/proba.js'
import semestarPredmeti from './components/semestarPredmeti.js'
import StranicaPredmetaStudent from './components/stranicaPredmetaStudent'
import StranicaPredmetaProfesor from './components/stranicaPredmetaProfesor.js'
import PrethodnaAkademskaGodina from './components/prethodnaAkademskaGodina.js'

class App extends Component {

  render() {
    
    return (
      <div>
        <div>
        <Router>
                <div class='row' id='glavni'>
                    <div class='col-3' id="meni" style={{
                      backgroundColor: "#2C3E50",
                      minHeight: "100%",
                      padding: "0px",
                       margin: "0px"
                    }}>
                      <Link to='/Golf/mojiPredmeti/1' class="dugmeLink">
                          <button type="button" class="btn btn-primary" id="mpl">Moji predmeti</button>
                      </Link>
                     <Ciklusi />
                     
                    </div>
                    <div class='col-9'>
                        <Route exact path="/Golf" component={proba} />
                        <Route path="/Golf/mojiPredmeti/:idKorisnika" component={MojiPredmeti}/>
                        <Route path="/Golf/semestarPredmeti/:ciklus/:odsjek/:semestar" component={semestarPredmeti}/>  
                        <Route path="/Golf/stranicaPredmetaStudent/:idPredmeta/:idKorisnika" component={StranicaPredmetaStudent}/>
                        <Route path="/Golf/stranicaPredmetaProfesor/:idPredmeta/:idKorisnika" component={StranicaPredmetaProfesor}/>
                        <Route path="/Golf/materijali/:idPredmeta/:idKorisnika/:naziv" component={PrethodnaAkademskaGodina}/>
				              </div>
                </div>
            </Router>
        </div>
      </div>
    );
  }
}

export default App;

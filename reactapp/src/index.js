import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import StranicaPredmeta from './StranicaPredmeta';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import student001 from './NavBarStranice/student001';
import unos_podataka001 from './NavBarStranice/unos_podataka001';
import ispiti001 from './NavBarStranice/ispiti001';
import obavijesti001 from './NavBarStranice/obavijesti001';
import zadace001 from './NavBarStranice/zadace001';
import ankete001 from './NavBarStranice/ankete001';


//import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
const routing = (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/predmet" component={StranicaPredmeta} />
        <Route path="/student" component={student001} />
        <Route path="/unos_podataka" component={unos_podataka001} />
        <Route path="/ispiti" component={ispiti001} />  
        <Route path="/obavijesti" component={obavijesti001} /> 
        <Route path="/zadace" component={zadace001} />  
        <Route path="/ankete" component={ankete001} />  
        <Route path="/statistika" component={StranicaPredmeta} />  
        <Route path="/raspored" component={StranicaPredmeta} /> 
        <Route path="/chat" component={StranicaPredmeta} /> 
        <Route path="/forum" component={StranicaPredmeta} /> 
        <Route path="/materijali" component={StranicaPredmeta} />      
      </div>
    </Router>
  )

  
ReactDOM.render(routing, document.getElementById('root'))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();

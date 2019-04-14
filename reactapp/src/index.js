import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import StranicaPredmeta from './StranicaPredmeta';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import student001 from './NavBarStranice/student001';

//import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
const routing = (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/predmet" component={StranicaPredmeta} />
        <Route path="/student" component={student001} />
        <Route path="/unos_podataka" component={StranicaPredmeta} />
        <Route path="/ispiti" component={StranicaPredmeta} />  
        <Route path="/obavijesti" component={StranicaPredmeta} /> 
        <Route path="/zadace" component={StranicaPredmeta} />  
        <Route path="/ankete" component={StranicaPredmeta} />  
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

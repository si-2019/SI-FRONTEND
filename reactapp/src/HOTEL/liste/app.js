import React, { Component } from 'react';
import './stil.css';
import MojeAnkete from './mojeAnkete'
import PopunjeneAnkete from './popunjeneAnkete'
import JavneAnkete from './javneAnkete'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App" style={{padding: '25px'}}>
      <h1 id="naslov">Ankete</h1>
      <Router>
        <div>
          <Route exact path ="/hotel/liste" component={MojeAnkete} />
          <Route path="/hotel/liste/mojeAnkete" component={MojeAnkete}/>
          <Route path="/hotel/liste/popunjeneAnkete" component={PopunjeneAnkete}/>
          <Route path="/hotel/liste/javneAnkete" component={JavneAnkete}/>
          </div>
        </Router>

        
      </div>
    );
  }
}

export default App;
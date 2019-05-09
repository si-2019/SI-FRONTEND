import React, { Component } from 'react';
import './stil.css';
import MojeAnkete from './mojeAnkete'
import PopunjeneAnkete from './popunjeneAnkete'
import JavneAnkete from './javneAnkete'
import AnketePoPredmetima from './anketePoPredmetima'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <div>
          <Route exact path ="/hotel/liste" component={MojeAnkete} />
          <Route path="/hotel/liste/mojeAnkete" component={MojeAnkete}/>
          <Route path="/hotel/liste/popunjeneAnkete" component={PopunjeneAnkete}/>
          <Route path="/hotel/liste/javneAnkete" component={JavneAnkete}/>
          <Route path="/hotel/liste/anketePoPredmetima" component={AnketePoPredmetima}/>
          </div>
        </Router>

        
      </div>
    );
  }
}

export default App;
import React, { Component } from 'react';

import {BrowserRouter, Route} from 'react-router-dom'


//US
import US_23 from './US_23';


class App extends Component {
  render() {
    return (
      <div>
        <h1>LIMA</h1>

      <div className = "containter">
        <h1>LIMA</h1>
        <BrowserRouter>
          <Route path='/Lima/US_23' exact component={US_23}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

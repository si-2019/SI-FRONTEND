import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import KontaktPod from  './components/kontaktPod';
import Stranice from './components/stranice';
import Fotografija from './components/fotografija';
import LicniPod from './components/licniPod';
import axios from 'axios';




class App extends Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <Fotografija/>
            <KontaktPod/>
            <Stranice/>
          </div>
          <div class="col-sm">
          <LicniPod></LicniPod>
          </div>
        </div>
      </div>
    );
  }
}

export default App;


import React, {Component} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import InformacijeOIspitu from './components/InformacijeOIspitu';
import KreirajIspit from './components/KreirajIspit';
import KreirajIspitDetalji from './components/KreirajIspitDetalji'
import KreiraniIspiti from './components/KreiraniIspiti';
import PregledStudenata from './components/PregledStudenata';
import PrijavaIspita from './components/PrijavaIspita';
import PrijavljeniIspiti from './components/PrijavljeniIspiti';
import UrediIspit from './components/UrediIspit'


class App extends Component {
  render() {
    return (
      <div className='container'>
        CHARLIE
        <BrowserRouter>
          <Route path='/charlie/info-o-ispitu' exact component={InformacijeOIspitu}/>
          <Route path='/charlie' exact component={KreirajIspit}/>
          <Route path='/charlie/kreiraj-ispit-detalji' exact component={KreirajIspitDetalji}/>
          <Route path='/charlie/kreirani-ispiti' exact component={KreiraniIspiti}/>
          <Route path='/charlie/pregled-studenata' exact component={PregledStudenata}/>
          <Route path='/charlie/prijava-ispita' exact component={PrijavaIspita}/>
          <Route path='/charlie/prijavljeni-ispiti' exact component={PrijavljeniIspiti}/>
          <Route path='/charlie/uredi-ispit' exact component={UrediIspit}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

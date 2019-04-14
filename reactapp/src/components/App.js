import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import InformacijeOIspitu from './InformacijeOIspitu';
import KreirajIspit from './KreirajIspit';
import KreirajIspitDetalji from './KreirajIspitDetalji'
import KreiraniIspiti from './KreiraniIspiti';
import PregledStudenata from './PregledStudenata';
import PrijavaIspita from './PrijavaIspita';
import PrijavljeniIspiti from './PrijavljeniIspiti';
import UrediIspit from './UrediIspit'

class App extends React.Component{

  render(){
    return(
      <div className='container'>
        <BrowserRouter>
          <Route path='/info-o-ispitu' exact component={InformacijeOIspitu}/>
          <Route path='/kreiraj-ispit' exact component={KreirajIspit}/>
          <Route path='/kreiraj-ispit-detalji' exact component={KreirajIspitDetalji}/>
          <Route path='/kreirani-ispiti' exact component={KreiraniIspiti}/>
          <Route path='/pregled-studenata' exact component={PregledStudenata}/>
          <Route path='/prijava-ispita' exact component={PrijavaIspita}/>
          <Route path='/prijavljeni-ispiti' exact component={PrijavljeniIspiti}/>
          <Route path='/uredi-ispit' exact component={UrediIspit}/>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
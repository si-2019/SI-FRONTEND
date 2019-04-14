import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

<<<<<<< HEAD
import KreirajIspitForma from './KreirajIspitForma'
import InformacijeOIspituForma from './InformacijeOIspituForma/InformacijeOIspituForma';
import PocetnaForma from './PocetnaForma/PocetnaForma';
=======
import InformacijeOIspitu from './InformacijeOIspitu';
import KreirajIspit from './KreirajIspit';
import KreirajIspitDetalji from './KreirajIspitDetalji'
import KreiraniIspiti from './KreiraniIspiti';
import PregledStudenata from './PregledStudenata';
import PrijavaIspita from './PrijavaIspita';
import PrijavljeniIspiti from './PrijavljeniIspiti';
import UrediIspit from './UrediIspit'
>>>>>>> CHARLIE

class App extends React.Component{

  render(){
    return(
      <div className='container'>
<<<<<<< HEAD
        
        {/* <KreirajIspitForma/> */}
        <PocetnaForma />
=======
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
>>>>>>> CHARLIE
      </div>
    )
  }
}

export default App
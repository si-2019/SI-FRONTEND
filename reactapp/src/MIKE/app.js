import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import './App.css';
import PregledListeProjekata from './components/Pregled projekata studenta/PregledListeProjekata';
import Lista  from './components/Kreiranje projektne grupe/prikazListe';
import PregledZadatakaProjekta from './components/PregledZadatakaProjekta/PregledZadatakaProjekta';
import KreiranjeProjekta from './components/Kreiranje projekta na nivou predmeta/FormaZaKreiranjeProjektaNaNivouPredmeta';
import UnosInformacija from './components/Kreiranje projektne grupe/UnosInformacija';
import ListaPredmetaAsistenta from './components/Pregled projekata asistenta/prikazListePredmetaAsistenta';
import GenerisanjeGrupa from './components/GenerisanjeGrupa/GenerisanjeGrupa';
import GenerisiProjektnuGrupu from './components/GenerisanjeProjektnihGrupa/FormaZaGenerisanje';
import PocetniEkran from './components/HomePage/PocetniEkran';

class Mike extends Component {

  render() {   
    return (
        <div>
            <Route exact path="/Mike" component={PocetniEkran} />
            <Route path="/Mike/kreiranje-grupe" component={Lista} />
            <Route path="/Mike/pregled-projekata-studenta" component= {PregledListeProjekata} />
            <Route path="/Mike/pregled-projekata-asistenta" component= {ListaPredmetaAsistenta} />
            <Route path="/Mike/kreiranje-projekata-na-nivou-predmeta" component= {KreiranjeProjekta} />
            <Route path="/Mike/generisanje-projektne-grupe" component= {GenerisanjeGrupa} />
        </div>
    );
  }
}
export default Mike;

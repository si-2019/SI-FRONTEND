import React, { Component } from 'react';
import { Link, BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
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

export default class Mike extends Component {

  state = {
    token: null,
    username: localStorage.getItem('username')
  }

  render() {
    
    const { token, username } = this.state;

    return (
      <Router>
        <Switch>
         <Route path='/Mike' exact render={(props) => <PocetniEkran {...props} token={token} username={username} /> } />     

           { token ? <Route path='/Mike/kreiranje-grupe' component={Lista}/> : <Redirect to='/Mike' />  }
            <Route path="/Mike/pregled-projekata-studenta" component= {PregledListeProjekata} /> {/*student*/}

           { token && username ==='asistent' ? <Route path='/Mike/pregled-projekata-asistenta' component={ListaPredmetaAsistenta}/> : <Redirect to='/Mike' />  }
            <Route path="/Mike/pregled-projekata-asistenta" component= {ListaPredmetaAsistenta} /> {/*asistent*/}
            <Route path="/Mike/kreiranje-projekata-na-nivou-predmeta" component= {KreiranjeProjekta} /> {/*asistent*/} 
            <Route path="/Mike/generisanje-projektne-grupe" component= {GenerisanjeGrupa} /> {/*student*/}
            <Route component={PocetniEkran}/>   
        </Switch>
      </Router>
    );
  }
}

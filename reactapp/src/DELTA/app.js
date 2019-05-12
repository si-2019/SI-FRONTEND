import React, { Component } from 'react';
import BodoviNaIspitima from './Komponente/BodoviNaIspitima/BodoviNaIspitima'
import Labele from './Komponente/Labele/Labele'
import Ocjena from './Komponente/Ocjena/Ocjena';

class App extends Component {

  state = {
    //Izbrisati hardkodirano kad se dobiju podaci sa servera

    //Rezultati ispita iz ovog predmeta
    rezIspita:[
        {
            tip: "I parcijalni",
            datum: new Date().getDay() + '.' + new Date().getMonth() + '.' + new Date().getFullYear() + '.',
            bodovi: 12,
            polozen: true
        },
        {
            tip: "II parcijalni",
            datum: new Date().getDay() + '.' + new Date().getMonth() + '.' + new Date().getFullYear() + '.',
            bodovi: 9,
            polozen: false
        },
        {
            tip: "II parcijalni",
            datum: new Date().getDay() + '.' + new Date().getMonth() + '.' + new Date().getFullYear() + '.',
            bodovi: 13,
            polozen: true
        }
    ],
    
    //Bodovi na zadace
    zadace:[
      {
        naziv: "Zadaca 1",
        bodovi: 19
      },
      {
        naziv: "Zadaca 2",
        bodovi: 11
      }
    ],

    //Bodovi na prisustvo
    prisustvo:10
}

//Uzimanje podataka sa servisa kad budu napravljeni
componentDidMount(){
  var urlModula = 'ovdje pasteat url modula koji vraca podatke o ispitima';
  //kad se dobiju rezultati uzeti samo one za ovaj predmet
  //axios.get(urlModula).then(res=>this.setState({todos:res.data}))
}

  render() {
    return (
      <div>
        <h1>DELTA</h1>
        <Labele/>
        <BodoviNaIspitima/>
        <Ocjena ispiti = {this.state.rezIspita} zadace = {this.state.zadace} prisustvo = {this.state.prisustvo}/>
      </div>
    );
  }
}

export default App;

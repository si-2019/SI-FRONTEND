import React, { Component } from 'react';
import Table_body_row from './components/table_body_cell.js';
import Table_head_row from './components/table_head_row.js';
import uuid from 'uuid';
import axios from 'axios';
import './App.css';

class App extends Component {
  state=
  {    
    raspored:[

    ]
  }
  
  sortCriteria = (a,b) =>
  {    
      if ((a.datum<b.datum) || (a.datum===b.datum && a.vrijeme <b.vrijeme))
        return -1;
      if (a.datum===b.datum && a.vrijeme ===b.vrijeme)
        return 0;
      return 1;    
  }

  createRaspored = () =>
  {

     
let ispiti = [
  {
    id:  uuid.v4(),
    title:'Usmeni ispit',
    predmet:'Administracija racunarskih mreza',
    datum:'2019/04/11', 
    vrijeme:'14:30',
    sala:'S10'
  },
  {
    id:  uuid.v4(),
    title:'Prvi parcijalni ispit',
    predmet:'Softver Inzinjering',
    datum:'2019/04/11', 
    vrijeme:'13:00',
    sala:'MA'
  }
];
var termini = [
  {
    id:  uuid.v4(),
    title:'Predavanje',
    predmet:'Vjestacka inteligencija',
    datum:'2019/04/12', 
    vrijeme:'17:00',
    sala:'S1'
  },
  {
    id:  uuid.v4(),
    title:'Tutorijal',
    predmet:'Vjestacka inteligencija',
    datum:'2019/04/12', 
    vrijeme:'12:00',
    sala:'S5'
  }
];

    
    ispiti.forEach((val, index) => {
      this.state.raspored.push(val);
    });
    termini.forEach((val, index) => {
      this.state.raspored.push(val);
    });
    this.state.raspored.sort(this.sortCriteria);

  
  }

  
  render() {
    this.createRaspored();


    return (
      <div className="App">
      <table>
        <tbody>
      <tr>
        <th style={pocetnaKolonaStyle}>Vrijeme</th>
        <Table_head_row days={days}/>
      </tr>
      <tr>
        <td style={pocetnaKolonaStyle}>17:30</td>
        <td>Softver Inzinjering - Predavanje Sala S1 17:30</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td style={pocetnaKolonaStyle}>18:30</td>
        <td></td>
        <td></td>
        <td>Vjestacka inteligencija - Predavanje Sala S1 18:30</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td style={pocetnaKolonaStyle}>19:30</td>
        <td></td>
        <td></td>        
        <td></td>
        <td></td>
        <td>Administracija racunarskih mreza - Predavanje Sala S5 19:30</td>
        <td></td>
        <td></td>
      </tr>
      </tbody>
      </table>
      </div>
       
    ) 
  }
}

const pocetnaKolonaStyle = {
  width: '5vw',
  backgroundColor: 'rgb(208, 214, 298)',
  textAlign: 'center'
  
}

const days =[
  {
    id: uuid.v4(),
    title:'Ponedjeljak'
  },
  {
    id: uuid.v4(),
    title:'Utorak'
  },
  {
    id: uuid.v4(),
    title:'Srijeda'
  },
  {
    id: uuid.v4(),
    title:'Četvrtak'
  },
  {
    id: uuid.v4(),
    title:'Petak'
  },
  {
    id: uuid.v4(),
    title:'Subota'
  },
  {
    id: uuid.v4(),
    title:'Nedjelja'
  }
]; 



export default App;

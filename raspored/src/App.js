import React, { Component } from 'react';
import logo from './logo.svg';
import Table_body_row from './components/table_body_cell.js';
import Table_head_row from './components/table_head_row.js';
import uuid from 'uuid';
import './App.css';

class App extends Component {
  state=
  {
    days:[
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
    ],
    ispiti:[
      {
        id:  uuid.v4(),
        title:'Usmeni ispit',
        predmet:'Administracija racunarskih mreza',
        datum:'09.04.2019', 
        vrijeme:'17:30',
        sala:'S10'
      },
      {
        id:  uuid.v4(),
        title:'Prvi parcijalni ispit',
        predmet:'Softver Inzinjering',
        datum:'11.04.2019', 
        vrijeme:'13:00',
        sala:'MA'
      }
    ],
    termini:[
      {
        id:  uuid.v4(),
        title:'Predavanje',
        predmet:'Vjestacka inteligencija',
        datum:'12.04.2019', 
        vrijeme:'15:00',
        sala:'S1'
      },
      {
        id:  uuid.v4(),
        title:'Tutorijal',
        predmet:'Vjestacka inteligencija',
        datum:'12.04.2019', 
        vrijeme:'17:00',
        sala:'S5'
      }
    ]  

  }
  render() {
    return (
      <div className="App">
      <table>
      <tr>
        <th>Vrijeme</th>
        <Table_head_row days={this.state.days}/>
      </tr>
      <tr>
        <td>17:30</td>
        <td>Softver Inzinjering - Predavanje Sala S1 17:30</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>18:30</td>
        <td></td>
        <td></td>
        <td>Vjestacka inteligencija - Predavanje Sala S1 18:30</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>19:30</td>
        <td></td>
        <td></td>        
        <td></td>
        <td></td>
        <td>Administracija racunarskih mreza - Predavanje Sala S5 19:30</td>
        <td></td>
        <td></td>
      </tr>
      </table>
      </div>
       
    ) 
  }
}

export default App;

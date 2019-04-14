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
    var spisakIspita;
    var spisakTermina;
    axios.get("http://localhost:3001/getIspiti").then(function (response) {
      // handle success
      let odzivIspiti = response.request.response;
      spisakIspita=JSON.parse(odzivIspiti); 
      spisakIspita.forEach((val, index) => {
        this.state.raspored.push(val);
       });
       
      axios.get("http://localhost:3001/getTermini").then(function (response) {
       // handle success
       let odzivTermini = response.request.response;
       spisakTermina=JSON.parse(odzivTermini);   
       spisakTermina.forEach((val, index) => {
        this.state.raspored.push(val);
        this.state.raspored.sort(this.sortCriteria);

       //Ovo se desava nakon getanja ispita i termina
       
       
      
      });     
    }.bind(this)) 
    }.bind(this))  
  }

  
render() {
    this.createRaspored(); 
    console.log(this.state.raspored);
    

    
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

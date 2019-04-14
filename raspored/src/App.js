import React, { Component } from 'react';
import Cell from './components/cell.js';
import uuid from 'uuid';
import axios from 'axios';
import Table_head_cell from './components/table_head_cell.js';
import './App.css';

class App extends Component {
  state=
  {    
    raspored:[

    ],
    vremenaRasporeda:[
      
    ],
    rendering:[]
  }

  
  
  sortCriteria = (a,b) =>
  {  
    // sortiramo hronoloski  
      if ((a.datum<b.datum) || (a.datum===b.datum && a.vrijeme <b.vrijeme))
        return -1;
      if (a.datum===b.datum && a.vrijeme ===b.vrijeme)
        return 0;
      return 1;    
  }

 povecajVrijemePolaSata(vrijeme)
  {
    // vrijeme je string
    // pretpostavljamo da je vrijeme polusatno npr. 09:30 ili 17:00
    // pretpostavljamo da je u validnom formatu

    if(vrijeme[0]==='2' && vrijeme[1]==='3')
    {
      if(vrijeme[3]==='3')
      vrijeme='00:00';
      else
      vrijeme='23:30';   
    }
    else
    {
      if(vrijeme[1]==='9')
      {
        if(vrijeme[3]==='3')
        vrijeme=(parseInt(vrijeme[0])+1).toString()+'0:00';
        else
        vrijeme=vrijeme[0]+'9:30';
      }
      else
      {
        if(vrijeme[3]==='3')
        vrijeme=vrijeme[0]+(parseInt(vrijeme[1])+1).toString()+':00';
        else
        vrijeme=vrijeme[0]+vrijeme[1]+':30';
      }
    }
    return vrijeme; 
  }


  createRaspored = () =>
  {
    var spisakTermina=[
      {
          id:  1,
          title:'Predavanje',
          predmet:'Razvoj programskih rjesenja',
          datum:'2019/04/13', 
          vrijeme:'09:00',
          sala:'S10',
          trajanje:'120'
      },
      {
          id:  2,
          title:'Tutorijal',
          predmet:'Softver Inzinjering',
          datum:'2019/04/13', 
          vrijeme:'15:00',
          sala:'MA',
          trajanje:'90'
      },
      {
          id:  3,
          title:'Predavanje',
          predmet:'Tehnike programiranja',
          datum:'2019/04/14', 
          vrijeme:'12:30',
          sala:'S10',
          trajanje:'30'
      },
      {
      id:  4,
      title:'Vjezbe',
      predmet:'Linearna algebra i geometrija',
      datum:'2019/04/14', 
      vrijeme:'15:00',
      sala:'S10',
      trajanje:'60'
      }
  ]
  var spisakIspita=[
    {
        id:  1,
        title:'Usmeni ispit',
        predmet:'Administracija racunarskih mreza',
        datum:'2019/04/11', 
        vrijeme:'14:30',
        sala:'S10',
        trajanje:'120'
    },
    {
        id:  2,
        title:'Prvi parcijalni ispit',
        predmet:'Softver Inzinjering',
        datum:'2019/04/11', 
        vrijeme:'13:00',
        sala:'MA',
        trajanje:'90'
    },
    {
        id:  3,
        title:'Usmeni ispit',
        predmet:'Tehnike programiranja',
        datum:'2019/04/11', 
        vrijeme:'14:30',
        sala:'S9',
        trajanje:'30'
    },
    {
        id:  4,
        title:'Prvi parcijalni ispit',
        predmet:'Linearna algebra i geometrija',
        datum:'2019/04/11', 
        vrijeme:'14:30',
        sala:'VA',
        trajanje:'180'
    },
    {
        id:  5,
        title:'Drugi parcijalni ispit',
        predmet:'Objektno orijentisana analiza i dizajn',
        datum:'2019/04/11', 
        vrijeme:'14:30',
        sala:'S8',
        trajanje:'120'
    }
]
spisakIspita.forEach((val, index) => {
  this.state.raspored.push(val);
 });
 spisakTermina.forEach((val, index) => {
  this.state.raspored.push(val);  
});

  /*  var spisakIspita;
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
      });  */   
       this.state.raspored.sort(this.sortCriteria);

       //Ovo dalje se desava nakon getanja ispita i termina
       var vrijemeObaveze='09:00';
       while(vrijemeObaveze!='21:00')
        {
          this.state.vremenaRasporeda.push(vrijemeObaveze);                   
          vrijemeObaveze=this.povecajVrijemePolaSata(vrijemeObaveze);
          vrijemeObaveze=this.povecajVrijemePolaSata(vrijemeObaveze);
        }

       this.state.raspored.forEach((val,index) => {

        vrijemeObaveze = val.vrijeme;
        let trajanjeObaveze = parseInt(val.trajanje);
        while(trajanjeObaveze!=0)
        {
          if(!this.state.vremenaRasporeda.includes(vrijemeObaveze))
          {
            this.state.vremenaRasporeda.push(vrijemeObaveze);            
          }          
          trajanjeObaveze-=30;          
          vrijemeObaveze=this.povecajVrijemePolaSata(vrijemeObaveze);
          
        }
       });
       
       this.state.vremenaRasporeda.sort();       
       console.log(this.state.vremenaRasporeda);

       var headerRow = days.map((day) => (
        <Table_head_cell key={day.id} day={day.title}/>
      ));
      for (var i=0; i < this.state.vremenaRasporeda.length; i++) {
          this.state.rendering.push(
            <tr>
              <td style={pocetnaKolonaStyle}>{this.state.vremenaRasporeda[i]}</td>
              <Cell dan='1' redniBroj={i} raspored={this.state.raspored}></Cell>
              <Cell dan='2' redniBroj={i} raspored={this.state.raspored}></Cell>
              <Cell dan='3' redniBroj={i} raspored={this.state.raspored}></Cell>
              <Cell dan='4' redniBroj={i} raspored={this.state.raspored}></Cell>
              <Cell dan='5' redniBroj={i} raspored={this.state.raspored}></Cell>
              <Cell dan='6' redniBroj={i} raspored={this.state.raspored}></Cell>
              <Cell dan='7' redniBroj={i} raspored={this.state.raspored}></Cell>            
            </tr>
          );
      }
    /*}.bind(this)) 
    }.bind(this))  */
  }

  
render() {
    this.createRaspored(); 
    console.log(this.state.raspored);
    var headerRow = days.map((day) => (
      <Table_head_cell key={day.id} day={day.title}/>
    ));
    
    console.log(this.state.rendering);
    
    return (
              
                <table>
                <tbody>  
                  <tr>
                    <th style={pocetnaKolonaStyle}>Vrijeme</th>            
                    {headerRow}
                    </tr>  
                    
                    {this.state.rendering}
                  </tbody>
                </table>             
        
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

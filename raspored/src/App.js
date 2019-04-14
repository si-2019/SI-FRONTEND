import React, { Component } from 'react';
import Cell from './components/cell.js';
import uuid from 'uuid';
import axios from 'axios';
import Table_head_cell from './components/table_head_cell.js';
import './App.css';
import { runInThisContext } from 'vm';

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

  sljedeciDan(datum) // funkcija vraca datum sljedeceg dana
  {
    var today = new Date(datum);
    var tomorrow = new Date();
    tomorrow.setDate(today.getDate()+1);
    
    var dd = String(tomorrow.getDate()).padStart(2, '0');
    var mm = String(tomorrow.getMonth() + 1).padStart(2, '0'); //Januar je 0!
    var yyyy = tomorrow.getFullYear();

    datum = yyyy + '/' + mm + '/' + dd;
    
    return datum;

    
  }
  prethodniDan(datum) // funkcija vraca datum prethodnog dana
  {
    var today = new Date(datum);
    var yesterday = new Date();
    yesterday.setDate(today.getDate()-1);
    
    var dd = String(yesterday.getDate()).padStart(2, '0');
    var mm = String(yesterday.getMonth() + 1).padStart(2, '0'); //Januar je 0!
    var yyyy = yesterday.getFullYear();

    datum = yyyy + '/' + mm + '/' + dd;
    
    return datum;
    
  }

  prviDanuSedmici(datum) //funkcija vraca prvi dan u sedmici u kojoj je taj datum
  {
    let datumNovi = new Date(datum);
    let brojIteracija = datumNovi.getDay()-1;    
    while(brojIteracija!=0)
    {
      datum=this.prethodniDan(datum);
      brojIteracija--;
    }
    return datum;
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
          vrijeme:'18:00',
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
        vrijeme:'17:30',
        sala:'S9',
        trajanje:'30'
    },
    {
        id:  4,
        title:'Prvi parcijalni ispit',
        predmet:'Linearna algebra i geometrija',
        datum:'2019/04/11', 
        vrijeme:'09:30',
        sala:'VA',
        trajanje:'180'
    },
    {
        id:  5,
        title:'Drugi parcijalni ispit',
        predmet:'Objektno orijentisana analiza i dizajn',
        datum:'2019/04/12', 
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

       var vrijemeObaveze='08:00';
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


       let danas= new Date();
       var dd = String(danas.getDate()).padStart(2, '0');
       var mm = String(danas.getMonth() + 1).padStart(2, '0'); //Januar je 0!
       var yyyy = danas.getFullYear();   
       let datum = yyyy + '/' + mm + '/' + dd;
       datum = this.prviDanuSedmici(datum);

       let matricaTermina =new Array(this.state.vremenaRasporeda.length);
       for (var i = 0; i < matricaTermina.length; i++) {
          matricaTermina[i] = new Array(7);
          for(var j=0;j<matricaTermina[i].length;j++)
            matricaTermina[i][j]=-1;
       }
       let datumFix = datum;

       this.state.raspored.forEach((val,index) => {
         datum=datumFix;
         for(let dan=0;dan<7;dan++)
         {
          if(val.datum==datum)
          {
            
            let lokalnoTrajanje = val.trajanje;
            let indeksVremena=-1;
            for(let j=0;j<this.state.vremenaRasporeda.length;j++)
            {
              if(val.vrijeme==this.state.vremenaRasporeda[++indeksVremena])
              {
                break;
              }  
            }
            while(lokalnoTrajanje!=0)
            {    
              console.log(val.datum);
              console.log(indeksVremena); 
              console.log(dan);         
              matricaTermina[indeksVremena][dan]=index;
              let razdaljinaMinute = 0;
              if(indeksVremena==this.state.vremenaRasporeda.length-1)
              break;

              if(this.state.vremenaRasporeda[indeksVremena][3]!=this.state.vremenaRasporeda[indeksVremena+1][3])
              razdaljinaMinute=30;
              else
              razdaljinaMinute=60;

              lokalnoTrajanje-=razdaljinaMinute;
              indeksVremena++;
            }
            break; 
          }
          datum=this.sljedeciDan(datum);
         }
         

        
       });



       
       
      for (var i=0; i < this.state.vremenaRasporeda.length; i++) {
        let cells=[];
        for(let u=0;u<7;u++)
        {
          if(matricaTermina[i][u]==-1)
          {
            // ako celija nije ispunjena
            cells.push(<Cell key={(u+1)*10+i} dan={(u+1).toString()} redniBroj={i} termin={undefined} ></Cell>);
          }
          else
          {
            cells.push(<Cell key={(u+1)*10+i} dan={(u+1).toString()} redniBroj={i} termin={this.state.raspored[matricaTermina[i][u]]} ></Cell>);
          }
        }

        this.state.rendering.push(
            <tr>
              <td style={pocetnaKolonaStyle}>{this.state.vremenaRasporeda[i]}</td>
              {cells}            
            </tr>
          );
      }
    /*}.bind(this)) 
    }.bind(this))  */
  }

  
render() {
    this.createRaspored(); 
    console.log(this.state.raspored);

    let danas= new Date();
       var dd = String(danas.getDate()).padStart(2, '0');
       var mm = String(danas.getMonth() + 1).padStart(2, '0'); //Januar je 0!
       var yyyy = danas.getFullYear();   
    let datum = yyyy + '/' + mm + '/' + dd;
    datum = this.prviDanuSedmici(datum);
    var headerRow = [];
       days.forEach((day,index) => {

         headerRow.push(
          <Table_head_cell key={day.id} day={day.title} datum={datum}/>
         );
         datum = this.sljedeciDan(datum);

       });
    
    console.log(this.state.rendering);
    console.log(this.prviDanuSedmici('2019/04/10'));
    
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

import React, { Suspense, Fragment, memo , Component} from "react";
import uuid from 'uuid';
import axios from 'axios';
import Body_Cell from './body_cell.js';
import Head_cell from './head_cell.js';
import './raspored.css';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';


export class Raspored extends Component {

  state={
    isLoaded:true,
    raspored:[]
  }

  componentDidMount = () => {  
    fetch("http://localhost:31920/getTerminiSala/1/9")
      .then(resTermini => resTermini.json())
      .then(jsonTermini => {
        fetch("http://localhost:31920/getIspitiSala/1/9")
          .then(resIspiti => resIspiti.json())
          .then(jsonIspiti => {
            var raspored=[];

            jsonIspiti.forEach((val, index) => {
    
              raspored.push(val);
             });
             jsonTermini.forEach((val, index) => {
              
              raspored.push(val);  
            });
          
            raspored.sort(sortCriteria);
            this.setState({
              isLoaded:true,
              raspored:raspored
            })
          });
        });
  }

  render() {

  //sljedeca forEach petlja popunjava matricu termina
  raspored.forEach((val,index) => {
    datum=datumFix;
    for(let dan=0;dan<7;dan++)
    {
     if(val.datum==datum)
     {
       
       let lokalnoTrajanje = val.trajanje;
       let indeksVremena=-1;
       for(let j=0;j<vremenaRasporeda.length;j++)
       {
         if(val.vrijeme==vremenaRasporeda[++indeksVremena])
         {
           break;
         }  
       }
       while(lokalnoTrajanje>=0)
       {    
             
         matricaTermina[indeksVremena][dan]=index;
         let razdaljinaMinute = 0;
         if(indeksVremena==vremenaRasporeda.length-1)
         break;
         if(vremenaRasporeda[indeksVremena][3]!=vremenaRasporeda[indeksVremena+1][3])
         razdaljinaMinute=30;
         else
         razdaljinaMinute=60;
         lokalnoTrajanje-=razdaljinaMinute;
         indeksVremena++;
       }
       break; 
     }
     datum=sljedeciDan(datum);
    }
  });

  // Sada imamo matricu termina i kreiramo gradivne elemente koje ima sama tabela
       
  for (var i=0; i < vremenaRasporeda.length; i++) {
    let cells=[];
    for(let u=0;u<7;u++)
    {
      if(matricaTermina[i][u]==-1)
      {
        // ako celija nije ispunjena
        // u celiji cemo dalje testirati da li je termin undefined ili ne
        cells.push(<Body_Cell key={(u+1)*10+i} idStudenta="1" dan={(u+1).toString()} redniBroj={i} termin={undefined} ></Body_Cell>);
      }
      else
      {
        cells.push(<Body_Cell key={(u+1)*10+i} idStudenta="1" dan={(u+1).toString()} redniBroj={i} termin={raspored[matricaTermina[i][u]]} ></Body_Cell>);
      }
    }
  rendering.push(
        <tr>
          <td style={pocetnaKolonaStyle}>{vremenaRasporeda[i]}</td>
          {cells}            
        </tr>
      );
  }

  //ovdje prebacujemo datum u nas format i popunjavamo celije zaglavlja

  danas= new Date();
  var dd = String(danas.getDate()).padStart(2, '0');
  var mm = String(danas.getMonth() + 1).padStart(2, '0'); //Januar je 0!
  var yyyy = danas.getFullYear();   
  datum = yyyy + '/' + mm + '/' + dd;  
  datum = prviDanuSedmici(datum);
  
  var headerRow = [];
  days.forEach((day,index) => {
  headerRow.push(
       <Head_cell key={day.id} day={day.title} datum={datum}/>
      );
      datum = sljedeciDan(datum);
  });

  return ( 
    <div>    
      <table>
      <tbody>  
        <tr>
          <th style={pocetnaKolonaStyle}>Vrijeme</th>            
          {headerRow}
        </tr>
        {rendering}
        </tbody>
      </table> 
    </div>
  );  

   
  }
}

const pocetnaKolonaStyle = {
  width: '5vw',
  backgroundColor: 'rgb(208, 214, 298)',
  textAlign: 'center'  
}

const sortCriteria = (a,b) =>
  {  
    // sortiramo hronoloski  
      if ((a.datum<b.datum) || (a.datum===b.datum && a.vrijeme <b.vrijeme))
        return -1;
      if (a.datum===b.datum && a.vrijeme ===b.vrijeme)
        return 0;
      return 1;    
  }

const povecajVrijemePolaSata = (vrijeme) =>
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

  const sljedeciDan = (datum) =>// funkcija vraca datum sljedeceg dana
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
  const prethodniDan = (datum) =>// funkcija vraca datum prethodnog dana
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

  const prviDanuSedmici = (datum) => //funkcija vraca prvi dan u sedmici u kojoj je taj datum
  {
    let datumNovi = new Date(datum);
    let brojIteracija = datumNovi.getDay()-1;
    if(brojIteracija == -1)
      brojIteracija = 6;    
    while(brojIteracija!=0)
    {
      datum=prethodniDan(datum);
      brojIteracija--;
    }
    return datum;
  }

// uuid nije obavezan al kreira unique id kad ga god pozoves
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


export default Raspored;

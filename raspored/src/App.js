import React, { Suspense, Fragment, memo , Component} from "react";
import Cell from './components/cell.js';
import uuid from 'uuid';
import axios from 'axios';
import Table_head_cell from './components/table_head_cell.js';
import './App.css';
import { runInThisContext } from 'vm';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import { unstable_createResource } from "react-cache";

const FetcherTermini = unstable_createResource(() =>
  fetch("http://localhost:3001/getTermini").then(r => r.json())
);

const FetcherIspiti = unstable_createResource(() =>
  fetch("http://localhost:3001/getIspiti").then(r => r.json())
);

const getDataTermini = () => FetcherTermini.read();
const getDataIspiti = () => FetcherIspiti.read();
const Helper = () => {
  var spisakTermina=getDataTermini();
  var spisakIspita = getDataIspiti();

  var raspored=[];

  spisakIspita.forEach((val, index) => {
    raspored.push(val);
   });
   spisakTermina.forEach((val, index) => {
    raspored.push(val);  
  });

  raspored.sort(sortCriteria);
  var vremenaRasporeda=[];
  var rendering=[];



       //Ovo dalje se desava nakon getanja ispita i termina

       var vrijemeObaveze='08:00';
       while(vrijemeObaveze!='21:00')
        {
          vremenaRasporeda.push(vrijemeObaveze);                   
          vrijemeObaveze=povecajVrijemePolaSata(vrijemeObaveze);
          vrijemeObaveze=povecajVrijemePolaSata(vrijemeObaveze);
        }

       raspored.forEach((val,index) => {

        vrijemeObaveze = val.vrijeme;
        let trajanjeObaveze = parseInt(val.trajanje);
        while(trajanjeObaveze!=0)
        {
          if(!vremenaRasporeda.includes(vrijemeObaveze) && vrijemeObaveze==val.vrijeme)
          {
            vremenaRasporeda.push(vrijemeObaveze);            
          }          
          trajanjeObaveze-=30;          
          vrijemeObaveze=povecajVrijemePolaSata(vrijemeObaveze);
          
        }
       });
       
       vremenaRasporeda.sort();


       let danas= new Date();
       var dd = String(danas.getDate()).padStart(2, '0');
       var mm = String(danas.getMonth() + 1).padStart(2, '0'); //Januar je 0!
       var yyyy = danas.getFullYear();   
       let datum = yyyy + '/' + mm + '/' + dd;
       datum = prviDanuSedmici(datum);

       let matricaTermina =new Array(vremenaRasporeda.length);
       for (var i = 0; i < matricaTermina.length; i++) {
          matricaTermina[i] = new Array(7);
          for(var j=0;j<matricaTermina[i].length;j++)
            matricaTermina[i][j]=-1;
       }
       let datumFix = datum;

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
            while(lokalnoTrajanje!=0)
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



       
       
      for (var i=0; i < vremenaRasporeda.length; i++) {
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
            cells.push(<Cell key={(u+1)*10+i} dan={(u+1).toString()} redniBroj={i} termin={raspored[matricaTermina[i][u]]} ></Cell>);
          }
        }

        rendering.push(
            <tr>
              <td style={pocetnaKolonaStyle}>{vremenaRasporeda[i]}</td>
              {cells}            
            </tr>
          );
      }

      danas= new Date();
       var dd = String(danas.getDate()).padStart(2, '0');
       var mm = String(danas.getMonth() + 1).padStart(2, '0'); //Januar je 0!
       var yyyy = danas.getFullYear();   
    datum = yyyy + '/' + mm + '/' + dd;
    datum = prviDanuSedmici(datum);
    var headerRow = [];
       days.forEach((day,index) => {

         headerRow.push(
          <Table_head_cell key={day.id} day={day.title} datum={datum}/>
         );
         datum = sljedeciDan(datum);

       });
    
    console.log(rendering);

    return (
      
     
 
      <table>
      <tbody>  
        <tr>

          <th style={pocetnaKolonaStyle}>Vrijeme</th>            
          {headerRow}
          </tr>  
          
          {rendering}
        </tbody>
      </table>             

);



    
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
    while(brojIteracija!=0)
    {
      datum=prethodniDan(datum);
      brojIteracija--;
    }
    return datum;
  }



  

class App extends Component {
  state=
  {    
    
  }
  
render = () =>{    
    
    return (
      <Fragment>    
    <Suspense fallback={<div>Loading...</div>}>
    <Helper/>
    
    </Suspense>
  </Fragment>          
        
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



export default React.memo(App);



import React, { Suspense, Fragment, memo , Component} from "react";
import uuid from 'uuid';
import axios from 'axios';
import './grupeProfesor.css';
import { runInThisContext } from 'vm';
import { unstable_createResource } from "react-cache";
import { Combobox } from 'react-widgets'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

import TabelaGrupa from './tabelaGrupa.js';
import TabelaNesvrstani from './tabelaNesvrstani.js';





//Fetcheri i metode za citanje pomocu njih


const FetcherGrupe = unstable_createResource(() =>
  fetch("http://localhost:3001/getGrupe/4").then(r => r.json())
);
const FetcherPredmet = unstable_createResource(() =>
  fetch("http://localhost:3001/getPredmet/4").then(r => r.json())
);

const FetcherStudentiNaPredmetu = unstable_createResource(() =>
  fetch("http://localhost:3001/getNesvrstaniStudentiNaPredmetu/4").then(r => r.json())
);

const getDataGrupe = () => FetcherGrupe.read();
const getDataPredmet = () => FetcherPredmet.read();
const getDataStudentiNaPredmetu = () => FetcherStudentiNaPredmetu.read();

const StudentiNaPredmetuHelper = () => {
    var spisakGrupe=getDataGrupe();
    var danas = new Date();
    
    var dd = String(danas.getDate()).padStart(2, '0');
    var mm = String(danas.getMonth() + 1).padStart(2, '0'); //Januar je 0!
    var yyyy = danas.getFullYear();
    danas = yyyy + '-' + mm + '-' + dd;
    var datum="";
    if(spisakGrupe.length>0)
    {
        var datum=spisakGrupe[0].rokPrijave.toString();        
    }
    var lockState=false;
    if(datum && datum<danas)
    lockState=true;


    var dataStudenti = getDataStudentiNaPredmetu();   
    return (
        <div style={naslovStyle}>
            <TabelaNesvrstani lockState={lockState} studenti={dataStudenti}/>                    
        </div>
    );
} 


// helper sadrzi svu logiku
const TabeleGrupaHelper = () => {

   
    
   
    var spisakGrupe=getDataGrupe();
    var idStudent=1;

    var indexGrupeLogovanogStudenta=-1;      
    var nadjenStudent=false;

    var maxKapacitet=0;
    var rendering=[];

    for(var i=0;i<spisakGrupe.length;i++)
    {
        if(!nadjenStudent)
        {
            for(var j=0;j<spisakGrupe[i].studenti.length;j++)
            {
                if(spisakGrupe[i].studenti[j].idStudent==idStudent.toString())
                {
                    indexGrupeLogovanogStudenta = i;
                    nadjenStudent=true;
                    break;    
                }
            }
        }
    }

    
    datum="";
    if(spisakGrupe.length>0)
    {
        var datum=spisakGrupe[0].rokPrijave.toString();        
    }
    

    
    var danas = new Date();
    
    var dd = String(danas.getDate()).padStart(2, '0');
    var mm = String(danas.getMonth() + 1).padStart(2, '0'); //Januar je 0!
    var yyyy = danas.getFullYear();
    danas = yyyy + '-' + mm + '-' + dd;

    var podnaslov="";
    if(datum && datum<danas)
       podnaslov = (<h3 style={podnaslovStyle}>Rok za prijavu grupe je istekao</h3>)
    else
       podnaslov = (<h3 style={podnaslovStyle}>Rok za prijavu grupe je: {datum}</h3>)

       var lockState=false;
        if(datum && datum<danas)
        lockState=true;
  
    for(var i=0;i<spisakGrupe.length;i++)
    {
        

        if(spisakGrupe[i].kapacitet>maxKapacitet)
        maxKapacitet=spisakGrupe[i].kapacitet;
        
        var headTitle="Grupa G"+(i+1)
        + " - " + dani[parseInt(spisakGrupe[i].danUSedmici)-1].title 
        + " "   + spisakGrupe[i].vrijeme 
        + " "   + spisakGrupe[i].kabinet;

        rendering.push(
            <TabelaGrupa lockState={lockState} redniBroj = {i} kapacitet={maxKapacitet} naziv={headTitle} grupa={spisakGrupe[i]} />
        );
    }
    


    return (
        <div>
            {podnaslov}
           <div style={divStyle}>
             {rendering}               
           </div>
        </div>
    );
      
}


const NaslovHelper = () => {

    var dataPredmet = getDataPredmet();    
    return (
        <div style={naslovStyle}>
            <h1>{dataPredmet.naziv}</h1>             
        </div>
    );
} 



class Grupe extends Component {


state = {
  }

render = () =>{ 
    
    
    return(
    <div>
        
        <Fragment>
            <Suspense fallback={<div>Loading...</div>}>
                <NaslovHelper/>                
            </Suspense>
        </Fragment>  


        

        <Fragment>    
            <Suspense fallback={<div>Loading...</div>}>
                <TabeleGrupaHelper/>
            </Suspense>
        </Fragment> 

        <Fragment>    
            <Suspense fallback={<div>Loading...</div>}>
                <StudentiNaPredmetuHelper/>
            </Suspense>
        </Fragment>
    </div>     
    )
  }
}

export default React.memo(Grupe);

const divStyle=
{
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
}

const datetimeStyle=
{
    justifyContent: "center"
}


const naslovStyle=
{
    textAlign: 'center'
}

const podnaslovStyle=
{
    textAlign: 'center',
    color:'gray'
}

const dani =[
    {
      title:'Ponedjeljak'
    },
    {
      title:'Utorak'
    },
    {
      title:'Srijeda'
    },
    {
      title:'Četvrtak'
    },
    {
      title:'Petak'
    },
    {
      title:'Subota'
    },
    {
      title:'Nedjelja'
    }
  ];


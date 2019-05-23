import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import TabelaPregledaZadaca from "./tabelaPregledaZadaca";
import { taggedTemplateExpression } from "@babel/types";
import PrviPutSlanjeZadatka from "./prviPutSlanjeZadatka";
import ZadatakVecPoslan from "./zadatakVecPoslan";
import { async } from "q";


//user story 68 i user story 66 pushani skupa
class Student extends Component {
  constructor(props) {
    super(props);

    this.state = {
      zadacaState:{
      listaZadaca: ["Zadaća 1", "Zadaća 2", "Zadaća 3", "Zadaća 4"],
      listaZadataka: ["Zadatak 1", "Zadatak 2", "Zadatak 3"],
      maxBodoviPoZadacimaPoZadacama: [
        [2, 3, 4],
        [1, 2, 3],
        [1, 2, 3],
        [1, 1, 3]
      ],
      
      bodoviPoZadacimaZadaca: [
        [2, 3, 4],
        [1, 0, 3], 
        [1, 2, 3], 
        [0, 0, 3]
      ],
     
      stanjeZadacaPoZadacima: [
        [0, 0, 0], 
        [2, 2, 2], 
        [3, 4, 0], 
        [1, 1, 1]
      ], 
      /* 0 "nije poslano", 
      1 "nije pregledano", 
      2 "pregledano", 
      3 "prepisano", 
      4 "komentar"*/ 
       postavka: [],
      rokZaPredaju: [
        "2020-12-01 23:59",
        "2020-12-01 23:59",
        "2020-12-01 23:59",
        "2020-12-01 23:59"
      ]},
 potrebno: [
        [], 
        [], 
        [], 
        []
      ],  
      ukupnoBodova: [],
      moguceBodova: [],
    
    
      brojZadace: 0,
      brojZadatka: 0,
      listaTipova: [
        ".pdf", 
        ".rar", 
        ".doc",
        ".jpeg",
        ".png",
        ".txt"
      ],
      datumSlanja: "25.05.19",
      vrijemeSlanja: "23:23",
      nazivFajla: "Zadatak1",
      velicinaFajla: "1MB",
      komentar:
        "zadaca je ok zadaca je ok zadaca je ok",
      indeksStudenta: 9999
      };
     
  }

  obracunBodova =async (bodoviPoZadacimaZadaca, maxBodoviPoZadacimaPoZadacama) => {
    
    var arr = new Array(bodoviPoZadacimaZadaca.length);

    for (var i = 0; i < bodoviPoZadacimaZadaca.length; i++) {
      arr[i] = new Array(bodoviPoZadacimaZadaca[i].length);
    }

    var pomocniUkupno = [];
    var pomocniMoguce = [];

    for (var i = 0; i < bodoviPoZadacimaZadaca.length; i++) {
      var zbirUkupno = 0;
      var zbirMoguce = 0;
      for (var j = 0; j < bodoviPoZadacimaZadaca[i].length; j++) {
        arr[i][j] =
          bodoviPoZadacimaZadaca[i][j] +
          "/" +
         maxBodoviPoZadacimaPoZadacama[i][j];
        zbirUkupno = zbirUkupno + bodoviPoZadacimaZadaca[i][j];
        zbirMoguce =
          zbirMoguce + maxBodoviPoZadacimaPoZadacama[i][j];
      }
      pomocniUkupno.push(zbirUkupno);
      pomocniMoguce.push(zbirMoguce);
    }
    
    
      this.setState({
        potrebno:arr,
      ukupnoBodova: pomocniUkupno,
      moguceBodova: pomocniMoguce
    });
  };

 


  componentDidMount = async() => {
     //na osnovu indeksa studenta, prikupiti podatke o zadacama
    //2. parametar axiosa, je sta ce tamo biti u backendu req.body
     await axios.get("http://localhost:31911/dajZadaceZaStudenta/"+this.state.indeksStudenta).then(res => { 
   
   this.setState({zadacaState:res.data});
   this.obracunBodova(res.data.bodoviPoZadacimaZadaca, res.data.maxBodoviPoZadacimaPoZadacama);
  });
    
  

    document.getElementById("tabelaPregledaZadaca").style.display = "block";
    document.getElementById("prviPutSlanjeZadatka").style.display = "none";
    document.getElementById("zadatakVecPoslan").style.display = "none";
  };

  klikNaPoslati = (r, k) => {
    document.getElementById("tabelaPregledaZadaca").style.display = "none";
    document.getElementById("prviPutSlanjeZadatka").style.display = "block";
    document.getElementById("zadatakVecPoslan").style.display = "none";

    axios.get("http://localhost:31911/dozvoljeniTipoviZadatka").then(res => { 
//console.log(res.data);
    this.setState({listaTipova:res.data});
  });
    this.setState({
      brojZadace: r+1,
      brojZadatka: k+1
    });
  };

  

  klikNaVecPoslano = (r, k) => {
    document.getElementById("tabelaPregledaZadaca").style.display = "none";
    document.getElementById("prviPutSlanjeZadatka").style.display = "none";
    document.getElementById("zadatakVecPoslan").style.display = "block";

    axios.get("http://localhost:31911/dozvoljeniTipoviZadatka").then(res => { 
//console.log(res.data);
    this.setState({listaTipova:res.data});
  });

  axios.get("http://localhost:31911/popuniZadatakVecPoslan").then(res => { 
    //console.log(res.data);
    //console.log(res.data);
        this.setState({datumSlanja:res.data.datumSlanja,
        vrijemeSlanja:res.data.vrijemeSlanja,
      nazivFajla:res.data.nazivFajla,
    velicinaFajla:res.data.velicinaFajla,
  komentar:res.data.komentar});
      });

    this.setState({
      brojZadace: r+1,
      brojZadatka: k+1
    });
  };

  handleClick =  async event => {
    var ime = event.target.name; //name uzmem
    
    switch (ime) {
      //ako je rok prosao, blokirati upload

      case "posaljiZadatak": {
       //if( document.getElementById("prviPutSlanjeZadatka").style.display.value == "block")     
        var nazivUploada = document.getElementById("uploadButton").value;
        if(nazivUploada==="") 
          nazivUploada = document.getElementById("uploadButton2").value;
      if(nazivUploada===""){/*console.log("ne radi nista");*/}
        else{
       // console.log("Posalji zadatak dugme aktivirano "+nazivUploada);
        var ekstenzija='.'+nazivUploada.split('.').pop();
        //validacija tipa ucitanog fajla
        
        if(this.state.listaTipova.includes(ekstenzija)){
          this.setState({nazivFajla:nazivUploada});
          //console.log('ekstenzija je '+ekstenzija); 
          //poslati backendu fajl
          //kod post, drugi parametar je body!!! postttt
           await axios.post("http://localhost:31911/slanjeZadatka",nazivUploada).then(res => { 
   //console.log('odgovor ');
   console.log(res.data);
  });
}
        }
          
           
        break;
      }
      case "ponisti": {
        var temp=document.getElementById("uploadButton").value;
        if(temp==="") document.getElementById("uploadButton2").value="";
        else document.getElementById("uploadButton").value="";
        //imala 2 elementa sa istim id-em, pa je to pravilo probleme
        break;
      }

      
      case "preuzmi": {
        //salji na rutu u backendu
        await axios.get("http://localhost:31911/getDatoteku").then(res => { 
   //console.log('odgovor ');
   //console.log(res.data);
  });
        
        break;
      }

      case "pregled": {
        //salji na rutu u backendu

         await axios.get("http://localhost:31911/getPregledDatoteke").then(res => { 
          //console.log('odgovor ');
          //console.log(res.data);
         });
        break;
      }
      default: {
      }
    }
  };
  
 handleBack=()=>{
  document.getElementById("tabelaPregledaZadaca").style.display = "block";
  document.getElementById("prviPutSlanjeZadatka").style.display = "none";
  document.getElementById("zadatakVecPoslan").style.display = "none";
  
 }

 


  render() {
   
    //console.log('medi: '+this.state.zadacaState);
   // console.log('potrebno: '+this.state);
    return (
      <div>
        <div id="tabelaPregledaZadaca">
          <TabelaPregledaZadaca podaci={this} />
        </div>
        <div id="prviPutSlanjeZadatka">
          <PrviPutSlanjeZadatka podaci={this} />
        </div>
        <div id="zadatakVecPoslan">
          <ZadatakVecPoslan podaci={this} />
        </div>
      </div>
    );
  }
}

export default Student;

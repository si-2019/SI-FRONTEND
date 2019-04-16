import React from 'react'
import OsnovniPodaci from "./osnovniPodaci";
import DodavanjeTipovaFileova from "./dodavanjeTipovaFileova";
import BodoviZadaca from "./bodoviZadaca";


class KreiranjeZadace extends React.Component {
    /*
    constructor(props) {
        super(props);
        this.state = {
            idPredmeta: "",
            radnja: "Kreiranje",
            naziv: "",
            datum: "",
            vrijeme: "23:59",
            postavka: "",
            brojZadataka: 1,
            sviTipoviIsti: false,
            listaTipova: [],
            sviBodoviIsti: false,
            listaBodova: [],
            ukupnoBodova: 0,
        }
    }*/

    state = {
        idPredmeta: "",
        radnja: "Kreiranje",
        naziv: "",
        datum: "",
        vrijeme: "23:59",
        postavka: "",
        brojZadataka: 1,
        sviTipoviIsti: false,
        listaTipova: [],
        sviBodoviIsti: false,
        listaBodova: [],
        ukupnoBodova: 0,
        trenutnaEkstenzija:"pdf"
    }

    /*
    setAllState = () => {
        if(this.props === null) { // u pitanju je kreiranje i state su defaultni
            this.setState = () => {
                this.state.idPredmeta = 1;
            }
        }
        else { // u pitanju je azuriranje i state treba popuniti podacima iz propsa koji sadrzi sve podatke

        }

    }
*/
    //Ovim se postavlja naziv iz state na onaj iz inputa i ovaj dio pozivam na onChange tog inputa
  onChangeNaziv = event => {
    
    this.setState({
      naziv: event.target.value,
      
    });
  };
  
 //Ovim se postavlja broj zadataka iz state na onaj iz inputa  i ovaj dio pozivam na onChange tog inputa
 onChangeBrojZadataka = event => {
   // event.preventDefault();
    this.setState({
      brojZadataka: event.target.value
    });
  };

  onChangeDatum = event => {
    
    
    this.setState({
      datum:event.target.value
    });
  };
  

    // funkcija za prikupljannja vremena
    onChangeVrijeme = event => {
       
        
        this.setState({
            vrijeme :event.target.value
        });
      };




      klik_isti_br_bod = () => {
        //citam unesenu vrijednost
       
        var isti_br_bod = parseInt(document.getElementById("brbod").value);
   
        //provjeravamo da li je toggle on, ako jeste, onda popunimo textbox-ove iz tabele sa vrijednoscu koju unese u tekstualno polje
        //ako toggle nije on, dzabe sto unosi
        var daLi = document.getElementById("customSwitch1").checked === true;
        this.setState({ sviBodoviIsti: daLi });
    var noviNiz = [];
        if (daLi) {
          var suma = 0;
    
          
          suma = this.state.brojZadataka * isti_br_bod;
          for (let i = 1; i <= this.state.brojZadataka; i++) {
            if(document.getElementById(i)!==null){
                document.getElementById(i).value = isti_br_bod;
                noviNiz.push(isti_br_bod);
        }
          }
        
          
          //this.props.setListaBodova(noviNiz);
         // this.setListaBodova(noviNiz);
        // console.log(noviNiz);
          this.setState({ listaBodova: noviNiz });
          //console.log(this.state.listaBodova);
          document.getElementById("ukupnoStanje").innerHTML = suma;
          this.setState({ ukupnoBodova: suma });
        }
        
      };
    
      //moram ovo na onChange, jer kad klikne na button, tek se nakon fje obavi setState
      onChangeSviBodoviIsti = () => {
        var daLi = document.getElementById("customSwitch1").checked === true;
        this.setState({ sviBodoviIsti: daLi });
      };
    
      unioBodove = () => {
        //mijenja ukupno stanje na badge-u, mijenja atribut listaBodova
        var suma = 0;
    
        var noviNiz = [];
        for (let i = 1; i <= this.state.brojZadataka; i++) {
           if(document.getElementById(i)!==null){
          if (document.getElementById(i).value !== "") {
            //inace bude NaN
            let temp = document.getElementById(i).value;
            suma += parseInt(temp);
            noviNiz.push(temp);
          } 
          else noviNiz.push(0);
        }
        }
       // this.setListaBodova(noviNiz);
       
        this.setState({ listaBodova: noviNiz });
        this.setState({ ukupnoBodova:suma });
        //console.log(this.state.listaBodova);
        document.getElementById("ukupnoStanje").innerHTML = suma;
        
      };


      istiTipoviFileova = () => {
        //Da li je označen onaj element na DA (Da li želite da svi zadaci imaju isti broj bodova)
        var jeLoznaceno = document.getElementById("switchTip");
    
        if (jeLoznaceno.checked === true) {
          this.setState({ sviTipoviIsti: true });
    
          var niz = ["pdf", "doc", "m", "zip", "txt"];
    
          //Ukoliko se izvršila promjena sa NE na DA, prođem kroz sve i označim da nisu čekirani jer mi je tako imalo smisla
          //ID-evi ovih checkboxova su Zadatak + broj zadatka + koja im je ekstenzija primjer "Zadatak 1pdf" - sa odvojenim zadatak i ostalo :D
          for (var j = 0; j < niz.length; j++) {
            var s = document.getElementById("Zadatak 1" + niz[j]);
            s.checked = false;
          }
    
          //Ovdje na promjenu disableam sve osim prvog i odznačim ih sve
          for (var i = 1; i < this.state.brojZadataka; i++) {
            var k = i + 1;
    
            for (j = 0; j < niz.length; j++) {
              s = document.getElementById("Zadatak " + k + niz[j]);
              s.disabled = true;
              s.checked = false;
            }
          }
        } else {
          this.setState({ sviTipoviIsti: false });
    
          niz = ["pdf", "doc", "m", "zip", "txt"];
    
          //Ovdje kad je na NE, ali radim slične stvari, haman iste :D
          for (j = 0; j < niz.length; j++) {
            s = document.getElementById("Zadatak 1" + niz[j]);
            s.checked = false;
          }
    
          for (i = 1; i <  this.state.brojZadataka; i++) {
            k = i + 1;
    
            for (j = 0; j < niz.length; j++) {
              s = document.getElementById("Zadatak " + k + niz[j]);
              s.disabled = false;
              s.checked = false;
            }
          }
        }
      };
    
      //Ova funkcija služi kada se klikne na prvu da se označe i svi sa tom ekstenzijom, ako je na DA
    
      oznaciStaTreba = e => {
        if (this.state.sviTipoviIsti === true) {
          var p = document.getElementById("Zadatak 1" + this.state.trenutnaEkstenzija);
    
          if (p.checked === true) {
            //Preskoči prvi, ostale checkiraj
            for (var i = 1; i <  this.state.brojZadataka; i++) {
              var k = i + 1;
              var s = document.getElementById("Zadatak " + k + this.state.trenutnaEkstenzija);
              s.checked = true;
            }
          } else {
            //Ako se promijeni da nije označen, i ostalim se skida da su označeni :D
            for (i = 1; i <  this.state.brojZadataka; i++) {
              k = i + 1;
              s = document.getElementById("Zadatak " + k + this.state.trenutnaEkstenzija);
              s.checked = false;
            }
            this.state.listaTipova = [];
          }
        }
        var temp = this.state.listaTipova;
        temp[e.target.id[8] - 1] = "." + this.state.trenutnaEkstenzija;
        this.setState({
          listaTipova: temp
        });
        //this.props.setListaTipova(this.state.listaTipova);
      };


    render() {
        
        console.log(this.state);
        return(
        <div>
            <OsnovniPodaci podaci={this}></OsnovniPodaci>
            <DodavanjeTipovaFileova podaci={this}></DodavanjeTipovaFileova>
            <BodoviZadaca podaci={this}></BodoviZadaca>
        </div>);
    }
}

export default KreiranjeZadace
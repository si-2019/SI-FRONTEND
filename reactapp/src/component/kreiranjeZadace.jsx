import React from 'react'
import OsnovniPodaci from "./osnovniPodaci";
import DodavanjeTipovaFileova from "./dodavanjeTipovaFileova";
import BodoviZadaca from "./bodoviZadaca";


class KreiranjeZadace extends React.Component {
    
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
            listaTipova: [[false,false,false,false,false]],
            sviBodoviIsti: false,
            listaBodova: [],
            ukupnoBodova: 0,
        }
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
  onChangeNaziv = event => {
    this.setState({
      naziv: event.target.value,
      
    });
  };

  onChangeDatum = event => {
    this.setState({
      datum:event.target.value
    });
  };
    
  onChangeVrijeme = event => {
    this.setState({
        vrijeme :event.target.value
    });
   };

  onChangeSviBodoviIsti = () => {
    var daLi = document.getElementById("customSwitch1").checked === true;
    this.setState({ sviBodoviIsti: daLi });
  };

  onChangeBrojZadataka = event => {

    var novaListaTipova = [];

    for(var i = 0; i<event.target.value; i++) {
      novaListaTipova.push([false,false,false,false,false]);
    }

    this.setState({
      brojZadataka: event.target.value,
      listaTipova: novaListaTipova,
      sviTipoviIsti: false
    });
  };

  onChangeListaTipova = (i,j) =>{

    var noviNiz = this.state.listaTipova;
    if(this.state.sviTipoviIsti === false){
      noviNiz[i][j] = !this.state.listaTipova[i][j];
    }
    else{
      noviNiz[0][j] = !noviNiz[0][j]
      for(var k=1;k<this.state.brojZadataka;k++){
        noviNiz[k][j] = noviNiz[0][j];
      }

    }

    this.setState({
      listaTipova:noviNiz
    })

  }

  onChangeSviTipoviIsti = () => {

    var oznaceno = document.getElementById("switchTip");
    this.setState({sviTipoviIsti: oznaceno.checked})

  }
  


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
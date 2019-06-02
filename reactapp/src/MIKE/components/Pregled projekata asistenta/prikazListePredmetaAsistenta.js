import React, { Component } from 'react';
import PregledDetaljaPredmeta from './PregledDetaljaPredmeta';
import ListaGrupa from './PrikazListeProjektnihGrupa';

class ListaPredmetaAsistenta extends Component {
  constructor(props){
    super(props);
    this.state = {
      idAsistent:this.props.idAsistent,
      predmeti:this.props.predmeti,
      detalji:false
    };
    this.azuriraj=this.azuriraj.bind(this);
  }
   render(){
    if(this.state.detalji) return (
      <body>
        <h3>Pregled projekata</h3>
				<div className="col-md-auto" align="center">
          <div className="col-6" align="left">
            <select id="selectListe" className="form-control" onChange={()=>(
              this.azuriraj(document.getElementById("selectListe").selectedIndex)
            )}>
              <option className="list-group-item">Odaberite predmet</option>
              {
                this.state.predmeti.map(predmet=>{
                  return <option className="list-group-item">{predmet.naziv}</option>
                })
              }
              <option className="list-group-item" value="Softverski inzenjering">Softverski inzenjering</option>
              <option className="list-group-item" value="Vjestacka inteligencija">Vjestacka inteligencija</option>
              <option className="list-group-item" value="Dizajn i arhitektura softverskih sistema">Dizajn i arhitektura softverskih sistema</option>
            </select>
            <PregledDetaljaPredmeta naziv={"Zamger 2.0"} opis={"Kreiranje informacionog sistema za fakultet"} bodovi={30} brojGrupa={20}/>
            <ListaGrupa/>
          </div>
        </div>
      </body>
    )
    else return(
      <body>
        <h3>Pregled projekata</h3>
				<div className="col-md-auto" align="center">
          <div className="col-6" align="left">
            <select id="selectListe" className="form-control" onChange={()=>(
              this.azuriraj(document.getElementById("selectListe").selectedIndex)
            )}>
              <option className="list-group-item">Odaberite predmet</option>
              {
                this.state.predmeti.map(predmet=>{
                  return <option className="list-group-item">{predmet.naziv}</option>
                })
              }
              <option className="list-group-item" value="Softverski inzenjering">Softverski inzenjering</option>
              <option className="list-group-item" value="Vjestacka inteligencija">Vjestacka inteligencija</option>
              <option className="list-group-item" value="Dizajn i arhitektura softverskih sistema">Dizajn i arhitektura softverskih sistema</option>
            </select>
          </div>
        </div>
      </body>
    )
  }
  azuriraj(indeks){
    this.setState(state=>({
      idAsistent:state.idAsistent,
      predmeti:state.predmeti,
      detalji:true
    }))
  }
}

  export default ListaPredmetaAsistenta;
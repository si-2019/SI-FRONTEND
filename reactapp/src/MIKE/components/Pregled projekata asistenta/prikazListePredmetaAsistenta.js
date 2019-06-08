import React, { Component } from 'react';
import PregledDetaljaPredmeta from './PregledDetaljaPredmeta';
import ListaGrupa from './PrikazListeProjektnihGrupa';

class ListaPredmetaAsistenta extends Component {
  constructor(props){
    super(props);
    this.state = {
      idAsistent:this.props.idAsistent,
      predmeti:this.props.predmeti,
      detalji:false,
      detaljiJSON:{naziv:"Zamger 2.0",opis:"Kreiranje informacionog sistema za fakultet",bodovi:30}
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
            <PregledDetaljaPredmeta naziv={this.state.detaljiJSON.naziv} opis={this.state.detaljiJSON.opis} bodovi={this.state.detaljiJSON.bodovi} brojGrupa={20}/>
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
    var ajax=new XMLHttpRequest();
    var komponenta=this;
    ajax.onreadystatechange=function(){
        if(ajax.readyState==4 && ajax.status=="200"){
					var tekst=ajax.responseText;
					if(tekst.length==0) return;
					var json=JSON.parse(tekst);
					komponenta.setState(state=>({
            idAsistent:state.idAsistent,
            predmeti:state.predmeti,
            detalji:true,
            detaljiJSON:json
          }))
				}
				else if(ajax.status!="200"){
					komponenta.setState(state=>({
            idAsistent:state.idAsistent,
            predmeti:state.predmeti,
            detalji:true,
            detaljiJSON:state.detaljiJSON
          }))
				}
		}
		ajax.open("POST","http://localhost:31913/services/viewA/getProject",true);
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    ajax.send("idPredmet=4");
  }
}

  export default ListaPredmetaAsistenta;
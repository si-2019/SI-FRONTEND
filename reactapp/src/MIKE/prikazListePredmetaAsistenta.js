import React, { Component } from 'react';
import PregledDetaljaPredmeta from './components/PregledDetaljaPredmeta/PregledDetaljaPredmeta';
import ListaGrupa from './components/PregledProjektnihGrupa/PrikazListeProjektnihGrupa';

  class ListaPredmetaAsistenta extends Component {
    constructor(props){
      super();
    }
    render(){
      return (
        <form>
          <fieldset>
            <div>
              <Select />        
            </div>
          </fieldset>
         </form>
      )
    }
  }
  
  class Select extends Component {
    constructor(props){
      super();
      this.state = {
        tech: 'Lista predmeta asistenta: ',
        detalji:false
      };
    }
    handleChange(e){
      this.setState({
        tech: e.target.value,
        detalji:true
      })
    }
    render(){
      if(this.state.detalji) return(
        <div>
         <h2>{this.state.tech}</h2>
          <select id="selectListe" onChange={this.handleChange.bind(this)} value={this.state.tech}>
            <option value="Lista predmeta">Odaberite predmet</option>
            <option value="Softverski inzenjering">Softverski inzenjering</option>
            <option value="Vjestacka inteligencija">Vjestacka inteligencija</option>
            <option value="Projektovanje informacionih sistema">Projektovanje informacionih sistema</option>
            <option value="Dizajn i arhitektura softverskih sistema">Dizajn i arhitektura softverskih sistema</option>
          </select>
          <PregledDetaljaPredmeta/>
          <ListaGrupa/>
        </div>
      )
      else return (
        <div>
         <h2>{this.state.tech}</h2>
          <select id="selectListe" onChange={this.handleChange.bind(this)} value={this.state.tech}>
            <option value="Lista predmeta">Odaberite predmet</option>
            <option value="Softverski inzenjering">Softverski inzenjering</option>
            <option value="Vjestacka inteligencija">Vjestacka inteligencija</option>
            <option value="Projektovanje informacionih sistema">Projektovanje informacionih sistema</option>
            <option value="Dizajn i arhitektura softverskih sistema">Dizajn i arhitektura softverskih sistema</option>
          </select>
         
        </div>
      )
    }
  }

  export default ListaPredmetaAsistenta;
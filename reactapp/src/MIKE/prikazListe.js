import React, { Component } from 'react';
import PrikazPredmeta from './PrikazPredmeta'

  class Lista extends Component {
    constructor(props){
      super();
    }
    render(){
      return (
        <form>
          <fieldset>
            <div>
              <Select submit={this.props.submit}/>        
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
        tech: 'Lista predmeta: '
      };
    }
    handleChange(e){
      this.setState({
        tech: e.target.value
      })
    }
    render(){
      return (
        <div>
         <h2>{this.state.tech}</h2>
          <select id="selectListe" onChange={this.handleChange.bind(this)} value={this.state.tech}>
            <option value="Lista predmeta">Odaberite predmet</option>
            <option value="Softverski inzenjering">Softverski inzenjering</option>
            <option value="Vjestacka inteligencija">Vjestacka inteligencija</option>
            <option value="Projektovanje informacionih sistema">Projektovanje informacionih sistema</option>
            <option value="Dizajn i arhitektura softverskih sistema">Dizajn i arhitektura softverskih sistema</option>
          </select>
        <PrikazPredmeta opisProjekta={"Ovo je opis projekta koji je potrebno uraditi na odabranom predmetu"} brojMogucihBodova={20}/>
        <button onClick={this.props.submit}>Dalje</button>
        </div>
      )
    }
  }

  export default Lista;

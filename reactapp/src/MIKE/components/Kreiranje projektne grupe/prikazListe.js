import React, { Component } from 'react';
import PrikazPredmeta from './PrikazPredmeta'
import './bootstrapflatly.css'

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
        

        
        <div className="bs-component">
         <h3>{this.state.tech}</h3>
          <select style={{width: '400px'}} className="form-control" id="selectListe" onChange={this.handleChange.bind(this)} value={this.state.tech}>
            <option className="list-group-item" value="Lista predmeta">Odaberite predmet</option>
            <option className="list-group-item" value="Softverski inzenjering">Softverski inzenjering</option>
            <option className="list-group-item" value="Vjestacka inteligencija">Vjestacka inteligencija</option>
            <option className="list-group-item" value="Projektovanje informacionih sistema">Projektovanje informacionih sistema</option>
            <option className="list-group-item" value="Dizajn i arhitektura softverskih sistema">Dizajn i arhitektura softverskih sistema</option>
          </select>
         
      <PrikazPredmeta opisProjekta={"Ovo je opis projekta koji je potrebno uraditi na odabranom predmetu"} brojMogucihBodova={20}/>
        
        
        <button className="btn btn-primary" onClick={this.props.submit}>Dalje</button>
        </div>
       
      )

    }
  }

  export default Lista;

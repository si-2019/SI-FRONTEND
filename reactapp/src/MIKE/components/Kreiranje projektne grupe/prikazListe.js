import React, { Component } from 'react';
import PrikazPredmeta from './PrikazPredmeta'
import './bootstrapflatly.css'

  class Lista extends Component {
    constructor(props){
      super(props);
    }
    render(){
      return (
        <form>
          <fieldset>
            <div>
              <Select submit={this.props.submit} predmeti={this.props.predmeti}/>        
            </div>
          </fieldset>
         </form>
      )
    }
  }
  
  class Select extends Component {
    constructor(props){
      super(props);
      this.state = {
        tech: 'Lista predmeta: ',
        predmeti:props.predmeti,
        trenutniPredmet:0
      };
    }
    handleChange(e){
      var selekt=document.getElementById("selectListe").selectedIndex;
      this.setState({
        tech: e.target.value,
        trenutniPredmet:selekt-1
      })
    }
    render(){
      return (
        <div className="bs-component">
         <h3>{this.state.tech}</h3>
          <select style={{width: '400px'}} className="form-control" id="selectListe" onChange={this.handleChange.bind(this)} value={this.state.tech}>
            <option className="list-group-item" value="Lista predmeta">Odaberite predmet</option>
            {
              this.state.predmeti.map(predmet=>{
                return <option className="list-group-item" value={predmet.naziv}>{predmet.naziv}</option>
              })
            }
          </select>
         
      <PrikazPredmeta opisProjekta={this.state.predmeti[this.state.trenutniPredmet].opis} brojMogucihBodova={this.state.predmeti[this.state.trenutniPredmet].bodovi}/>
        
        <button className="btn btn-primary" onClick={this.props.submit}>Dalje</button>
        </div>
       
      )

    }
  }

  export default Lista;

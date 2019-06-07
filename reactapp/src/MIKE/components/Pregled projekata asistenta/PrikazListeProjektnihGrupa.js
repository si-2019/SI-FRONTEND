import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import DetaljiProjektneGrupe from './PrikazDetaljaProjektneGrupe';

  class ListaGrupa  extends Component {
    constructor(props){
      super();
      this.state = {
        tech: 'Grupe: ',
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
         <h3>{this.state.tech}</h3>
          <select className="form-control" id="dropdown" onChange={this.handleChange.bind(this)} value={this.state.tech}>
            <option className="list-group-item" value="Lista grupa">Odaberite grupu</option>
            <option className="list-group-item" value="Grupa 1">Grupa 1</option>
            <option className="list-group-item" value="Grupa 2">Grupa 2</option>
            <option className="list-group-item" value="Grupa 3">Grupa 3</option>
            <option className="list-group-item" value="Grupa 3">Grupa 4</option>
          </select>
          {/*
          <button id="dugme" style={{ "margin": "2%", "height":"20px" , "width": "80px"}}  onClick={this.setRedirect}> OK</button>
          */}
          <DetaljiProjektneGrupe/>
        </div>
      )
      else return (
        <div>
         <h3>{this.state.tech}</h3>
          <select className="form-control" id="dropdown" onChange={this.handleChange.bind(this)} value={this.state.tech}>
            <option className="list-group-item" value="Lista grupa">Odaberite grupu</option>
            <option className="list-group-item" value="Grupa 1">Grupa 1</option>
            <option className="list-group-item" value="Grupa 2">Grupa 2</option>
            <option className="list-group-item" value="Grupa 3">Grupa 3</option>
            <option className="list-group-item" value="Grupa 3">Grupa 4</option>
          </select>
          {/*
          <button id="dugme" style={{ "margin": "2%", "height":"20px" , "width": "80px"}}  onClick={this.setRedirect}> OK</button>
          */}
        </div>
      )
    }
  }

  export default ListaGrupa;

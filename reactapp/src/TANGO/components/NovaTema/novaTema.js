import React, { Suspense, Fragment, memo, Component } from "react";
import { unstable_createResource } from "react-cache";
import {
  withRouter
} from 'react-router-dom'
import Lista from '../ListaTema/listaTema'

class NovaTema extends Component {
  constructor() {
    super();
    this.state = {
      naziv: "",
      opis: "",
      povratak:false
    };

  }
  povratak = false;
  handleSubmit = evt => {
 
    this.setState({povratak:true});
  }

  handleNazivTemeChange = evt => {
    this.setState({ naziv: evt.target.value });
  };

  handleOpisTemeChange = evt => {
    this.setState({ opis: evt.target.value });
  };

  handleUnesi = evt => {
    if (!this.MozeBitiUneseno()) {
      evt.preventDefault();
      return;
    }
    const { naziv, opis } = this.state;
   
 evt.preventDefault()
 fetch("http://localhost:31919/addTheme", {
method: 'POST',  
body: JSON.stringify({
  IdPredmeta: '4',
  IdUser:'1',
  title:  naziv,
  description: opis,
  timeCreated: Date.now()

}),  
headers:{
  'Content-Type': 'application/json'
 }
  }).then(res => res.json())
  .then(response => console.log('Success:', JSON.stringify(response)))
  .catch(error => console.error('Error:', error));
 
    alert(`Unos teme sa nazivom: ${naziv} i opisom: ${opis}`);
    return false;
  };

  MozeBitiUneseno() {
    const { naziv, opis } = this.state;
    return (
      naziv.length > 0 &&
      opis.length > 0 &&
      naziv.length < 200 &&
      opis.length < 200
    );
  }

  render() {
    if(this.state.povratak==true)
      return (<Lista/>);
    else{
      const isEnabled = this.MozeBitiUneseno();

    
    return (
      <div className="row justify-content-center mt-5 ">
        <div className="col-sm-auto">      
        </div>
        <div className="form-group bg-light col-md-4 p-4 ">
          <form onSubmit = {this.handleUnesi}>
            <p className="lead mb-1">Naziv Teme</p>
            <input
              className="form-control form-control-lg"
              type="text"
              id="nazivTeme"
              value={this.state.naziv}
              onChange={this.handleNazivTemeChange}
            />
            <p className="lead mb-1">Tekst</p>
            <textarea
              className="form-control"
              id="opisTeme"
              rows="4"
              value={this.state.opis}
              onChange={this.handleOpisTemeChange}
            />
            <p v-html="desc" />

            <button
              className="btn btn-primary btn-xs form-control"
              disabled={!isEnabled}
              onClick={this.handleUnesi}
            >
              Unesi
            </button>
          </form>
          <hr></hr>
          <button color="primary" className="btn btn-primary my-1 btn-sm"
          onClick={this.handleSubmit}> Povratak </button>
        </div>
      </div>
    );
  }}
}

export default NovaTema;


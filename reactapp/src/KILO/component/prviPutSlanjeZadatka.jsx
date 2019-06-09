import React, { Component } from "react";
import "../bootstrap.css";
import { Icon } from "@opuscapita/react-icons";

class PrviPutSlanjeZadatka extends Component {
  

  render() {
    var listOfTypes = this.props.podaci.state.listaTipova;
    return (
      <div>
        <div className="card-header bg-primary text-light">
          <h4>
            <b>Zadaća {this.props.podaci.state.brojZadace}. </b>
            <Icon
              type="indicator"
              name="arrowLeft"
              className="mr-2 bg-light float-right"
              onClick={this.props.podaci.handleBack}
            />
          </h4>
          <h5>Zadatak broj {this.props.podaci.state.brojZadatka}</h5>
        </div>
        <br />
        <div className="form-group">
          <label className="ml-3">Lista dozvoljenih tipova: </label>
          <select
            multiple=""
            className="custom-form-control ml-4 btn btn-outline-primary"
          >
            {(!this.props.podaci.state.blokirajSelect)&&listOfTypes.map(clan => (
              <option key={clan+2000}>{clan}</option>
            ))}
          </select>
        </div>
        <hr />
        <h5 className="card-title ml-3 text-primary">Učitavanje datoteke</h5>
        <input
          id="uploadButton"
          name="uploadFajla"
          type="file"
          className="btn-outline-secondary ml-3"
          onChange={this.props.podaci.handleClick}
        />
        <button
          name="ponisti"
          id="ponisti"
          type="button"
          className="btn btn-danger ml-5 text-body"
          disabled = {this.props.podaci.state.uploadZadatka[0] === null}
          onClick={this.props.podaci.handleClick}
        >
        {/*
          <Icon 
            type="indicator" 
            name="remove" 
            className="mr-2" 
            onClick={this.props.podaci.handleClick}
            />
        */}  
          Poništi
        </button>
        <button
          name="posaljiZadatak"
          id="posalji1"
          type="button"
          className="btn btn-primary ml-5"
          disabled = {this.props.podaci.state.uploadZadatka[0] === null}
          onClick={this.props.podaci.handleClick}
        >
          Pošalji zadatak
        </button>
        <hr />
      </div>
    );
  }
}

export default PrviPutSlanjeZadatka;
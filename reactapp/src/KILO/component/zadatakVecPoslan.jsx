import React, { Component } from "react";
import "../bootstrap.css";
import { Icon } from "@opuscapita/react-icons";

class ZadatakVecPoslan extends Component {


  

  render() {
    var listOfTypes = this.props.podaci.state.listaTipova;

    return (
      <div>
        <div className="card-header bg-primary text-light">
          <h4>
            <b>Zadaća {this.props.podaci.state.brojZadace}. </b>
            <div name="idiNazad" onClick={this.props.podaci.handleClick}>
            <Icon
              type="indicator"
              name="arrowLeft"
              className="mr-2 bg-light float-right"
              onClick={this.props.podaci.handleBack}
            /></div>
          </h4>
          <h5>Zadatak broj {this.props.podaci.state.brojZadatka}</h5>
        </div>
        <br />
        <div className="card border-primary bg-primary text-light mb-3">
          <div className="card-header">
            <b>Podaci o poslanom zadatku</b>
          </div>
        </div>
        <div className="form-group">
          <div className="row mr-3">
            <div className="col">
              <fieldset>
                <label className="control-label ml-3">
                  Datum slanja zadatka:
                </label>
                <input
                  className="form-control ml-3"
                  type="text"
                  placeholder={this.props.podaci.state.datumSlanja}
                  readOnly=""
                />
              </fieldset>
            </div>
            <div className="col">
              <fieldset>
                <label className="control-label ml-3">
                  Vrijeme slanja zadatka:
                </label>
                <input
                  className="form-control ml-3"
                  type="text"
                  placeholder={this.props.podaci.state.vrijemeSlanja}
                  readOnly=""
                />
              </fieldset>
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="row mr-3">
            <div className="col">
              <fieldset>
                <label className="control-label ml-3">Naziv datoteke:</label>
                <input
                  className="form-control ml-3"
                  type="text"
                  placeholder={this.props.podaci.state.nazivFajla}
                  readOnly=""
                />
              </fieldset>
            </div>
            <div className="col">
              <fieldset>
                <label className="control-label ml-3 mr-3">
                  Veličina datoteke:
                </label>
                <input
                  className="form-control ml-3"
                  type="text"
                  placeholder={this.props.podaci.state.velicinaFajla}
                  readOnly=""
                />
              </fieldset>{" "}
            </div>
          </div>
        </div>
        <label className="control-label ml-3">Komentar:</label>
        <div className="card border-secondary ml-3 mr-3">
          <div className="card-body">
            <p className="card-text">{this.props.podaci.state.komentar}</p>
          </div>
        </div>
        <br />
        <button
          name="preuzmi"
          type="button"
          className="btn btn-primary ml-3"
          onClick={this.props.podaci.handleClick}
        >
          <Icon type="indicator" name="sortDesc" className="mr-2" />
          Preuzmi datoteku
        </button>
        <button
          name="pregled"
          type="button"
          className="btn btn-primary ml-5"
          onClick={this.props.podaci.handleClick}
        >
          <Icon type="indicator" name="search" className="mr-2" />
          Pregled datoteke
        </button>
        <hr />
        <br />
        <div className="card border-primary bg-primary text-light mb-3">
          <div className="card-header">
            <b>Ponovno učitavanje datoteke</b>
          </div>
        </div>
        <div className="form-group">
          <label className="ml-3">Lista dozvoljenih tipova: </label>
          <select
            multiple=""
            className="custom-form-control ml-4 btn btn-outline-primary"
          >
            {(!this.props.podaci.state.blokirajSelect2)&&listOfTypes.map(clan => (
              <option key={clan}>{clan}</option>
            ))}
          </select>
        </div>
        <input
          id="uploadButton2"
          name="uploadFajla"
          type="file"
          className="btn-outline-secondary ml-3"
          onChange={this.props.podaci.handleClick}
        />
        <button
          id="ponisti"
          name="ponisti"
          type="button"
          className="btn btn-danger ml-5 text-body"
          onClick={this.props.podaci.handleClick}
          disabled = {this.props.podaci.state.uploadZadatka[0] === null}
        >
          {/*
          <Icon 
            type="indicator" 
            name="remove" 
            className="mr-2" 
          /> 
          */}
          Poništi
        </button>
        <button
          name="posaljiZadatak"
          id="posalji2"
          type="button"
          className="btn btn-primary ml-2"
          onClick={this.props.podaci.handleClick}
          disabled = {this.props.podaci.state.uploadZadatka[0] === null}
        >
          Pošalji zadatak
        </button>
        <hr />
      </div>
    );
  }
}

export default ZadatakVecPoslan;

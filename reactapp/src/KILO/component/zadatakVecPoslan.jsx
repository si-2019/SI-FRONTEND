import React, { Component } from "react";
import "../bootstrap.css";
import { Icon } from "@opuscapita/react-icons";

class ZadatakVecPoslan extends Component {


  

  render() {
    var listOfTypes = this.props.podaci.state.listaTipova;

    return (
      <div class="px-4 py-4">
        <div className="card-title">
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
        <div className="card" id="formaPodaci">
          <div className="card-title px-4 py-2">
            <b>Podaci o poslanom zadatku</b>
          </div>
        
       
          
            <div>
              <fieldset>
                <label className="control-label"  id="stLabdat">
                  Datum slanja zadatka:
                </label>
                <input
                  className="form-control w-75 ml-4"
                  type="text"
                  placeholder={this.props.podaci.state.datumSlanja}
                  readOnly=""
                />
              </fieldset>
            </div>
            <div>
              <fieldset>
                <label className="control-label" id="stLabvr">
                  Vrijeme slanja zadatka:
                </label>
                <input
                  className="form-control w-75 ml-4"
                  type="text"
                  placeholder={this.props.podaci.state.vrijemeSlanja}
                  readOnly=""
                />
              </fieldset>
            </div>
          
        
        
          <div>
            
              <fieldset>
                <label className="control-label " id="stLabnaz">Naziv datoteke:</label>
                <input
                  className="form-control w-75 ml-4"
                  type="text"
                  placeholder={this.props.podaci.state.nazivFajla}
                  readOnly=""
                />
              </fieldset>
            
              <fieldset>
                <label className="control-label" id="stLabvel">
                  Veličina datoteke:
                </label>
                <input
                  className="form-control w-75 ml-4"
                  type="text"
                  placeholder={this.props.podaci.state.velicinaFajla}
                  readOnly=""
                />
              </fieldset>{" "}
            
          </div>
      
        <label className="control-label" id="stLabkom">Komentar:</label>
        <div className="card border-secondary w-75 ml-4" id="kom">
          <div className="card-body w-25 ml-4">
            <p className="card-text w-25 ml-4" >{this.props.podaci.state.komentar}</p>
          </div>
        </div>
        <br />
        <div class="row">
          <div class="col ml-4">
        <button
          name="preuzmi"
          type="button"
          className="btn btn-primary"
          id="preuzmiB"
          onClick={this.props.podaci.handleClick}
        >
          <Icon type="indicator" name="sortDesc" className="mr-2" />
          Preuzmi datoteku
        </button>
        </div>
        <div class="col">
        <button
          name="pregled"
          type="button"
          className="btn btn-primary"
          id="pregledB"
          onClick={this.props.podaci.handleClick}
        >
          <Icon type="indicator" name="search" className="mr-2" />
          Pregled datoteke
        </button>
        </div>
        </div>
        <hr />
        </div>
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
          type="file"
          className="btn-outline-secondary ml-3"
        />
        <button
          name="ponisti"
          type="button"
          className="btn btn-danger ml-5 text-body"
          onClick={this.props.podaci.handleClick}
        >
          <Icon type="indicator" name="remove" className="mr-2" />
          Poništi
        </button>
        <button
          name="posaljiZadatak"
          id="posalji2"
          type="button"
          className="btn btn-primary ml-2"
          onClick={this.props.podaci.handleClick}
        >
          Pošalji zadatak
        </button>
        <hr />
      </div>
    );
  }
}

export default ZadatakVecPoslan;

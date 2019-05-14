import React, { Component } from "react";
import { Icon } from "@opuscapita/react-icons";


class OcjenjivanjeJedanZadatak extends Component {
  render() {
    return (
      <div>
        <div className="card-header bg-primary text-light">
          <h4>
            <b>Zadaća {this.props.podaci.state.brojZadace}. </b>
            <Icon
              type="indicator"
              name="arrowLeft"
              className="mr-2 bg-light float-right"
              onClick={this.props.podaci.handleBackNaJednaZadaca}
            />{" "}
          </h4>
          <h5>Zadatak broj {this.props.podaci.state.brojZadatka}</h5>
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
        <br />
        <hr />
        <h5 className="control-label ml-3">Osvojeni bodovi:</h5>
        <div className=" d-flex justify-content-center">
          <input
            className="form-control ml-3 mr-3  text-body text-center col-2"
            type="number"
            id="osvojeniBodovi"
            name="osvojeniBodovi"
            value={this.props.podaci.state.osvojeniBodovi}
            min={0}
            max={this.props.podaci.state.maxBrojBodovaZadatka}
            step={0.1}
            onChange={this.props.podaci.handleClick}
          />
        </div>
        <br />
        <div className="form-group mr-4">
          <h5 className="ml-3">Komentar:</h5>
          <textarea
            className="form-control  ml-3 mr-3"
            placeholder="Ovdje napišite Vaš komentar."
            id="exampleTextarea"
            rows="4"
          />
          <small id="emailHelp" className="form-text text-muted ml-3">
            Ova mogućnost je opcionalna.
          </small>
        </div>
        <div>
          <hr className="bg-danger ml-3 mr-3" />
          <div class="custom-control custom-switch">
            <input
              type="checkbox"
              class="custom-control-input"
              id="customSwitch1"
            />
            <label
              className="custom-control-label ml-3"
              htmlFor="customSwitch1"
            >
              <h5>
                Zadatak je <b className="text-danger">prepisan.</b>
              </h5>
            </label>
          </div>{" "}
          <hr className="bg-danger ml-3 mr-3" />
        </div>
        <button type="button" name="ok" onClick={this.props.podaci.handleClick}  class="btn btn-primary ml-3">
          OK
        </button>
        <button type="button" name="otkazi" onClick={this.props.podaci.handleClick} class="btn btn-outline-primary ml-3 ">
          Otkaži
        </button>
      </div>
    );
  }
}

export default OcjenjivanjeJedanZadatak;

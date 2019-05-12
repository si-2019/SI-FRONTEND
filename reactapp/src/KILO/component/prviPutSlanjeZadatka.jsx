import React, { Component } from "react";
import "../bootstrap.css";
import { Icon } from "@opuscapita/react-icons";

class PrviPutSlanjeZadatka extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brojZadace: 4,
      brojZadatka: 3,
      listaTipova: [".pdf", ".rar"]
    };
  }

  handleClick = event => {
    var ime = event.target.name; //name uzmem
    if (ime === undefined) ime = "arrowLeft"; //ne znam sto nece da iscita name ikone
    //console.log('ime je '+ime);
    switch (ime) {
       //ako je rok prosao, blokirati upload


      case "posaljiZadatak": {
        //poslati backendu fajl
        var nazivUploada = document.getElementById("uploadButton").value;
        console.log(nazivUploada);
        break;
      }
      case "ponisti": {
        document.getElementById("uploadButton").value = "";
        break;
      }

      case "arrowLeft": {
        //ide na Edininu tabelu, back dugme
        console.log("back Dugme aktivirano");
        break;
      }
      default:{
        
      }
    }
  };

  render() {
    var listOfTypes = this.state.listaTipova;

    return (
      <div>
        <div className="card-header bg-primary text-light">
          <h4>
            <b>Zadaća {this.state.brojZadace}. </b>
            <Icon
              type="indicator"
              name="arrowLeft"
              className="mr-2 bg-light float-right"
              onClick={this.handleClick}
            />
          </h4>
          <h5>Zadatak broj {this.state.brojZadatka}</h5>
        </div>
        <br />
        <div className="form-group">
          <label className="ml-3">Lista dozvoljenih tipova: </label>
          <select
            multiple=""
            className="custom-form-control ml-4 btn btn-outline-primary"
          >
            {listOfTypes.map(clan => (
              <option key={clan}>{clan}</option>
            ))}
          </select>
        </div>
        <hr />
        <h5 className="card-title ml-3 text-primary">Učitavanje datoteke</h5>
        <input
          id="uploadButton"
          type="file"
          className="btn-outline-secondary ml-3"
        />
        <button
          name="ponisti"
          type="button"
          className="btn btn-danger ml-5 text-body"
          onClick={this.handleClick}
        >
          <Icon type="indicator" name="remove" className="mr-2" />
          Poništi
        </button>
        <button
          name="posaljiZadatak"
          type="button"
          className="btn btn-primary ml-5"
          onClick={this.handleClick}
        >
          Pošalji zadatak
        </button>
        <hr />
      </div>
    );
  }
}

export default PrviPutSlanjeZadatka;
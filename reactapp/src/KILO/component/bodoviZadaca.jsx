import React, { Component } from "react";
import { Button , FormGroup} from "reactstrap";
import "../bootstrap.css";

class BodoviZadaca extends Component {

  render() {
    var kolone = [];
    for (var i = 1; i <= this.props.podaci.state.brojZadataka; i++) {
      kolone.push(i);
    }

    if(this.props.podaci.state.listaBodova===[]){
      var bod=[];
      for(let j=1; j<=this.props.podaci.brojZadataka; j++)
      bod.push(" ");
    }
    else{
      bod=this.props.podaci.state.listaBodova;
    }
    

    return (
      <div class="card ml-2 h-100"  style={{width: "30rem"}}>
        <div id="bodoviT" className="card-title p-2">
          <h4>
            <b>Bodovi zadaće</b>
          </h4>
        </div>
        <div className="card-body">
          <div>
          <div class="row" id="prviR">
          <div id="bodoviLab" sm={10}>
          <label>
            Želim da svi zadaci imaju jednak maksimalan broj bodova:
          </label>
          </div>
          <div className="form-group" class="col" sm={2}>
            <div id="divsw" className="custom-control-static custom-switch">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customSwitch1"
                name="sviBodoviIsti"
                onChange={this.props.onChange}
              />
              <label className="custom-control-label" htmlFor="customSwitch1">
                DA
              </label>
              </div>
            </div>
            </div>
            <div id="brbodLab">
            <label>Broj bodova:</label>
            </div>
            <div id="Ok" class="row">
              <div class="col">
            <input 
                id="brbodKILO" 
                type="text" 
                className="form-control-static" 
                disabled = {this.props.podaci.state.radnja=="Azuriranje"}/>
                </div>
                <div class="col">
            <Button
              id="sviBodoviIstiButton"
              color="primary"
              className="btn bg-primary "
              disabled={this.props.podaci.state.radnja=="Azuriranje" || !this.props.podaci.state.sviBodoviIsti}
              onClick={this.props.podaci.klik_isti_br_bod}
            >
              OK
            </Button>
            </div>
            <hr />
            </div>
          </div>
        </div>
       
        <div id="tabela" className=" mx-2">
          <table className="table table-bordered text-center border-solid">
            <thead>
              <tr  className="text-dark">
                {kolone.map(jedno => (
                  <th class="tabtip" scope="col" key={jedno + 200}>
                    {jedno}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="text-dark">
                {kolone.map((jedno, index) => (
                  <th class="tabtip1" scope="col" key={jedno}>
                    <input
                      type="text"
                      className="form-control bg-primary text-light text-bold"
                      id={jedno}
                      data-index={index}
                      name="bodovi"
                      onChange={this.props.onChange}
                      value={bod[jedno-1]}
                      disabled = {this.props.podaci.state.radnja=="Azuriranje"}
                    />
                  </th>
                ))}
              </tr>
            </tbody>
          </table>
         
          <br />
          <FormGroup row>
          <div id="ukupnoKILO">
          <label>Ukupno:</label>
          </div>
          <span class="col ml-1" id="ukKILO" className="badge badge-primary ml-3">
            <h5 id="ukupnoStanje">{this.props.podaci.state.ukupnoBodova}</h5>
          </span>
          </FormGroup>
         
        </div>
      </div>
      
    );
  }
}

export default BodoviZadaca;

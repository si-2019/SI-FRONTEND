import React, { Component } from "react";
import { Button } from "reactstrap";
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
      <div id="bodovi" >
        <div id="naslovB"className="card-header text-black">
          <h4>
            <b>Bodovi zadaće</b>
          </h4>
        </div>
        <div className="card-body">
          <h4 className="card-title">
            Želim da svi zadaci imaju jednak maksimalan broj bodova.
          </h4>
          <div className="form-group">
            <div className="custom-control-static custom-switch">
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
              <br />
              <br />
            </div>
            <h5 className="card-title">Broj bodova:</h5>
            <input
                id="brbod" 
                type="text" 
                class="form-control"
                style={{margin:"0 auto"}}
                disabled = {this.props.podaci.state.radnja=="Azuriranje"}/>
                <div style={{ visibility: !(this.props.podaci.state.porukeGreske[3]=="" || this.props.podaci.state.porukeGreske[3]== undefined) ? "visible" : "hidden"}}><p class="text-danger">{this.props.podaci.state.porukeGreske[3]}</p></div>
            <Button
              id="sviBodoviIstiButton"
              color="primary"
              className="btn bg-primary ml-3 "
              disabled={this.props.podaci.state.radnja=="Azuriranje" || !this.props.podaci.state.sviBodoviIsti}
              onClick={this.props.podaci.klik_isti_br_bod}
            >
              OK
            </Button>
            <hr />
          </div>
        </div>
        <div id="tabela">
          <table className="table table-bordered text-center border-solid">
            <thead>
              <tr  className="text-dark">
                {kolone.map(jedno => (
                  <th scope="col" key={jedno + 200}>
                    {jedno}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="text-dark">
                {kolone.map((jedno, index) => (
                  <th scope="col" key={jedno}>
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
          <div style={{ visibility: !(this.props.podaci.state.porukeGreske[5]=="" || this.props.podaci.state.porukeGreske[5]== undefined) ? "visible" : "hidden"}}><p class="text-danger">{this.props.podaci.state.porukeGreske[5]}</p></div>
          <br />
          <label className="ml-3">Ukupno:</label>
          <span className="badge badge-primary ml-3">
            <h5 id="ukupnoStanje">{this.props.podaci.state.ukupnoBodova}</h5>
          </span>
          <hr />
        </div>
      </div>
    );
  }
}

export default BodoviZadaca;

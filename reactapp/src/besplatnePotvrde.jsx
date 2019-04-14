import React, { Component } from "react";
class BesplatnePotvrde extends Component {
  state = {
    broj: 5
  };
  componentDidMount() {
    // ajax na broj poslanih zahtjeva za potvrdu
    /* fetch("https://br_potvrda/index='").then(res => res.json()).then(
      (result)=>{
        this.setState({broj: 5-result.broj})
      });*/
  }
  render() {
    return (
      <div className="row">
        <div className="col">
          <p>Broj bespaltnih potvrda: </p>
        </div>
        <div className="col">
          <span id="broj_potvrda" className="badge-pill badge-primary">
            {this.state.broj}
          </span>
        </div>
      </div>
    );
  }
}

export default BesplatnePotvrde;

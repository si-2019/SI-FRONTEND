import React, { Component } from "react";
import axios from "axios";

class BesplatnePotvrde extends Component {
  state = {
    broj: 5
  };
  constructor() {
    super();
    this.state = { broj: 5 };
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  async componentDidMount() {
    console.log(this);
    var n;
    n = await axios
      .get("http://localhost:3001/brojPodnesenih/1")
      .then(function(response) {
        console.log(this);
        // console.log(response.data[0].brojPodnesenih);
        return response.data[0].brojPodnesenih;
        //this.setState({ broj: response.data[0].brojPodnesenih });
      });
    console.log(n);
    this.setState({ broj: 5 - n });
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

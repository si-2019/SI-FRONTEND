import React, { Component } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import axios from "axios";
class SvrhaPotvrde extends Component {
  state = {
    svrha: "Izaberi svrhu",
    spisak: [
      { id: 1, svrha: "svrha1" },
      { id: 2, svrha: "svrha2" },
      { id: 3, svrha: "svrha3" }
    ]
  };
  handleSelect = event => {
    this.setState({ svrha: event.target.innerText });
  };
  async componentDidMount() {
    var p = await axios
      .get("http://localhost:3002/svrhe")
      .then(function(response) {
        return response.data;
      });
    var svrhNiz = [];
    for (let i = 0; i < p.length; i++) {
      let jsonObject = { id: i, naziv: p[i].naziv };
      svrhNiz.push(jsonObject);
    }
    this.setState({ spisak: svrhNiz });
  }
  render() {
    return (
      <div className="row">
        <div className="col">
          <p> Odaberite svrhu:</p>
        </div>
        <div className="col">
          <DropdownButton id="svrha_potvrde" title={this.state.svrha}>
            {this.state.spisak.map(stav => (
              <Dropdown.Item
                id={"svrha" + stav.id}
                key={stav.id}
                onClick={this.handleSelect}
              >
                {stav.naziv}
              </Dropdown.Item>
            ))}
          </DropdownButton>
        </div>
      </div>
    );
  }
}

export default SvrhaPotvrde;

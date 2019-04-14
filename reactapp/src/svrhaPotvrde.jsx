import React, { Component } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";

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
    //console.log(event.target.innerText);
    this.setState({ svrha: event.target.innerText });
  };
  componentDidMount() {
    /*fetch("http://localhost/svrhe").then(res => res.json()).then(
      (result)=>{
        this.setState({spisak: result.svrhe})
      });*/
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
                {stav.svrha}
              </Dropdown.Item>
            ))}
          </DropdownButton>
        </div>
      </div>
    );
  }
}

export default SvrhaPotvrde;

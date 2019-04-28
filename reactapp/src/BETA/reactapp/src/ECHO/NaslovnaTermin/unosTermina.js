import React, { Component } from "react";

class UnosTermina extends Component {
  constructor(props) {
    super(props);
    this.state = { dan: "Ponedjeljak", vrijeme: "08:00", brCasova: 1 };

    this.handleSelect = this.handleSelect.bind(this);
    this.handleVrijemeInput = this.handleVrijemeInput.bind(this);
    this.handleBrCasovaInput = this.handleBrCasovaInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSelect(event) {
    let x = event.target.value;
    x = x.substr(0, 3);
    this.setState({ dan: x });
  }

  handleVrijemeInput(event) {
    this.setState({ vrijeme: event.target.value });
  }

  handleBrCasovaInput(event) {
    this.setState({ brCasova: event.target.value });
  }

  handleSubmit(event) {
    this.postTermin();
    this.props.terminUpdate();
    event.preventDefault();
  }

  postTermin() {
    fetch("http://localhost:8080/si2019/echo/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        idPredavac: 1, //hardkodirano
        idKabinet: 3, //hardkodirano
        danUSedmici: this.state.dan,
        vrijeme: this.state.vrijeme,
        brCasova: this.state.brCasova
      })
    });
  }

  render() {
    return (
      <form>
        <div className="form-group">
          <h4 className="col">Dodaj termin</h4>
          <div className="col">
            <label>Dan u sedmici</label>
            <select
              className="form-control m-2"
              id="listaDana"
              value={this.state.dan}
              onChange={this.handleSelect}
            >
              <option>Ponedjeljak</option>
              <option>Utorak</option>
              <option>Srijeda</option>
              <option>Cetvrtak</option>
              <option>Petak</option>
            </select>
          </div>
          <div className="col">
            <label>Vrijeme</label>
            <input
              id="satnica"
              type="time"
              max="20:00"
              min="08:00"
              step="3600"
              className="form-control m-2"
              value={this.state.vrijeme}
              onChange={this.handleVrijemeInput}
            />
          </div>
          <div className="col">
            <label>Broj časova</label>
            <input
              id="brCasova"
              type="number"
              min="1"
              max="12"
              className="form-control m-2"
              value={this.state.brCasova}
              onChange={this.handleBrCasovaInput}
            />
          </div>
          <div className="col">
            <button
              id="dugme"
              type="button"
              className="btn btn-primary m-2"
              onClick={this.handleSubmit}
            >
              Unesi
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default UnosTermina;

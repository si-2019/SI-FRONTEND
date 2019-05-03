import React, { Component } from "react";

class UnosTermina extends Component {
  constructor(props) {
    super(props);
    this.state = { dan: "Pon", vrijeme: "08:00", brCasova: 1 };

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
    if (this.validiraj()) {
      this.postTermin();
      this.props.terminUpdate();
      event.preventDefault();
    }
  }

  validiraj() {
    let x = this.state.vrijeme.substr(0, 2);
    const t = Number(x);
    const br = this.state.brCasova;
    if (Number(br) + Number(t) > 20) {
      alert("Pogrešan unos. Nastava se održava do 20:00");
      return false;
    }
    return true;
  }
  postTermin(event) {
    fetch("http://localhost:8080/si2019/echo/unesiTermine", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        brCasova: this.state.brCasova,
        idPredavac: 1, //hardkodirano
        danUSedmici: this.state.dan,
        idKabinet: 3, //hardkodirano
        vrijeme: this.state.vrijeme
      })
    }).then(alert("Uspješno ste unijeli termin"));
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
              className="btn btn-dark m-2"
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

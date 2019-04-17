import React, { Suspense, Fragment, memo, Component } from "react";
/*import { runInThisContext } from "vm";
import { unstable_createResource } from "react-cache";


const FetcherAddTheme = unstable_createResource(() =>
    fetch("localhost:8000/addTheme", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        naziv: { this.state.naziv },
        opis: { this.state.opis }
      })
    }).then(r => r.json())
  );
  
  const addTheme = () => FetcherAddTheme.read();

addTheme(); //dodati poziv u handleUnesi 

*/
class NovaTema extends Component {
  constructor() {
    super();
    this.state = {
      naziv: "",
      opis: ""
    };
  }

  handleNazivTemeChange = evt => {
    this.setState({ naziv: evt.target.value });
  };

  handleOpisTemeChange = evt => {
    this.setState({ opis: evt.target.value });
  };

  handleUnesi = evt => {
    if (!this.MozeBitiUneseno()) {
      evt.preventDefault();
      return;
    }
    const { naziv, opis } = this.state;
    alert(`Unos teme sa nazivom: ${naziv} i opisom: ${opis}`);
  };

  MozeBitiUneseno() {
    const { naziv, opis } = this.state;
    return (
      naziv.length > 0 &&
      opis.length > 0 &&
      naziv.length < 200 &&
      opis.length < 200
    );
  }

  render() {
    const isEnabled = this.MozeBitiUneseno();

    return (
      <div className="row justify-content-center mt-5 ">
        <div className="form-group bg-light col-md-4">
          <form onSubmit={this.handleUnesi}>
            <p className="lead mb-1">Naziv Teme</p>
            <input
              className="form-control form-control-lg"
              type="text"
              id="nazivTeme"
              value={this.state.naziv}
              onChange={this.handleNazivTemeChange}
            />
            <p className="lead mb-1">Tekst</p>
            <textarea
              className="form-control"
              id="opisTeme"
              rows="4"
              value={this.state.opis}
              onChange={this.handleOpisTemeChange}
            />
            <p v-html="desc" />

            <button
              className="btn btn-primary btn-xs form-control"
              disabled={!isEnabled}
            >
              Unesi
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default NovaTema;

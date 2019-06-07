import React, { Component } from "react";
class Forma extends Component {
  state = {};
  styles = {
    marginTop: 6
  };
  render() {
    return (
      <React.Fragment>
        <h3 className="ml-3 mt-3">
          Izvještaj
          <small className="text-muted">
            {" "}
            o broju studenta koji su položili određeni predmet na tekucoj
            akademskoj godini
          </small>
        </h3>
        <div className="row">
          <div className="col-md-6 ml-5 mt-3">
            <div className="form-group">
              <label className="col-form-label mt-3" htmlFor="predmet">
                Izaberi predmet:
              </label>
              <select
                className="form-control"
                id="predmet"
                name="predmet"
                ref={p => (this.predmet = p)}
              >
                {this.props.predmeti.map(predmet => (
                  <option key={predmet.id}>{predmet.naziv}</option>
                ))}
              </select>
              <button
                onClick={() =>
                  this.props.uzmiPredmetGodinu(
                    this.predmet.value,
                    this.props.akademskaGodina.id
                  )
                }
                type="button"
                className="btn btn-info mt-3"
                style={this.styles}
              >
                Pronadji
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Forma;

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
          Pretrazivac
          <small className="text-muted"> zahtjeva za potvrdu</small>
        </h3>
        <div className="row">
          <div className="col-md-6 ml-5 mt-3">
            <div className="form-group">
              <label className="col-form-label" htmlFor="inputDefault">
                Unesi svoj broj indexa:
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="index"
                id="inputDefault"
                ref={c => (this.indeks = c)}
                name="indeks"
              />
            </div>
          </div>
          <div className="col-md-3 mt-5">
            <button
              onClick={() => this.props.uzmiIndex(this.indeks.value)}
              type="button"
              className="btn btn-info"
              style={this.styles}
            >
              Pronadji
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Forma;

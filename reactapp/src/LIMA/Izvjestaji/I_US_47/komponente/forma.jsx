import React, { Component } from "react";
class Forma extends Component {
  state = {};
  styles = {
    marginTop: 6
  };
  posalji = ind => {
    if (this.props.akademskaGodina === null) {
      this.props.uzmiIndexIgodinu(ind, 0);
    } else {
      this.props.uzmiIndexIgodinu(ind, this.props.akademskaGodina.id);
    }
  };
  render() {
    return (
      <React.Fragment>
        <h3 className="ml-3 mt-3">
          Izvještaj
          <small className="text-muted">
            {" "}
            o položenim predmetima za tekucu akademsku godinu
          </small>
        </h3>
        <div className="row">
          <div className="col-md-6 ml-5 mt-3">
            <div className="form-group">
              <label className="col-form-label" htmlFor="index">
                Unesi svoj broj indexa:
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="index"
                id="index"
                ref={c => (this.index = c)}
                name="index"
              />
              <button
                onClick={() => this.posalji(this.index.value)}
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

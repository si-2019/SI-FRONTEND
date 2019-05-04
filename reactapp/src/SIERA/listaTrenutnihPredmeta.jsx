import React, { Component } from "react";

class ListaPredmeta extends Component {
  state = {
    predmeti: ["Predmet1", "Predmet2", "Predmet3", "Predmet4", "Predmet5"]
  };

  prikazPredmeta() {
    if (this.state.predmeti.length === 0) return <p>Nema predmeta</p>;

    return (
      <div>
        {this.props.children}
        <ul>
          {this.state.predmeti.map(predmet => (
            <li
              className="list-group-item list-group-item-action mt-2"
              key={predmet}
            >
              {predmet}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="align-self-start">
            <h5 className="text-muted">Lista trenutnih predmeta</h5>
          </div>
        </div>
        <div className="row">
          <div className="align-self-start">
            {this.prikazPredmeta()}
          </div>
        </div>
      </div>
    );
  }
}

export default ListaPredmeta;

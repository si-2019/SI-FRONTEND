import React, { Component } from "react";
import axios from "axios";

class ListaPredmeta extends Component {
  state = {
    predmeti: ["Predmet1", "Predmet2", "Predmet3", "Predmet4", "Predmet5"],
    vidljiv: false,
    znak: "+",
    trenutnoLogovaniStudentID: 1
  };

  componentDidMount() {
    axios
      .get(
        `http://localhost:31918/predmeti/odslusani/` +
          this.state.trenutnoLogovaniStudentID
      )
      .then(res => {
        console.log(res);
        const predmeti = res.data.odslusaniPredmeti.map(obj => obj.naziv);
        this.setState({ predmeti });
      });
  }

  toggle() {
    this.setState({
      vidljiv: !this.state.vidljiv,
      znak: !this.state.vidljiv ? "-" : "+"
    });
  }

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
            <input
              type="button"
              className="btn btn-primary btn-sm"
              onClick={() => this.toggle()}
              value={this.state.znak}
            />
          </div>
          <h5 className="text-muted">Lista odslusanih predmeta</h5>
        </div>
        <div className="row">
          <div className="align-self-start">
            {this.state.vidljiv ? this.prikazPredmeta() : ""}
          </div>
        </div>
      </div>
    );
  }
}

export default ListaPredmeta;

import React, { Component } from "react";

class IspitCard extends Component {
  renderIspit = () =>
    this.props.ispiti
      .filter(ispit => ispit.tipIspita === this.props.tipIspita)
      .map(el => (
        <li key={el.idIspit}>
          {el.idPredmet}
          <button type="button" className="btn btn-primary">
            Prijava
          </button>
        </li>
      ));

  render() {
    return (
      <div
        className="card col"
        style={{ width: "33.3%", display: "inline-block" }}
      >
        <div className="card-body">
          <h5 className="card-title">{this.props.tipIspita}</h5>
          <ul style={{ listStyle: "none" }}>
            {this.renderIspit(this.props.tipIspita)}
          </ul>
        </div>
      </div>
    );
  }
}

export default IspitCard;

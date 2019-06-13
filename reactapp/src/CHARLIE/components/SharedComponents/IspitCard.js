import React, { Component } from "react";
import { Link } from "react-router-dom";
class IspitCard extends Component {
  renderIspit = () =>
    this.props.ispiti
      .filter(ispit => ispit.tipIspita === this.props.tipIspita)
      .map(el => (
        <li key={el.idIspit}>
          {el.idPredmet}
          <button type="button" class="btn btn-primary" style={{float:"right"}}>
                  Info o ispitu
            </button>
        </li>
      ));

  render() {
    return (
      <div
        className="card"
        style={{ width: "30%", marginRight: "10px" }}
      >
        <div className="card-body">
          <h4 className="card-title">{this.props.tipIspita}</h4>
          <h6 class="card-subtitle mb-2 text-muted">Otvorene prijave</h6>
          <ul style={{ listStyle: "none", textAlign: "left" }}>
            {this.renderIspit(this.props.tipIspita)}
          </ul>
        </div>
      </div>
    );
  }
}

export default IspitCard;

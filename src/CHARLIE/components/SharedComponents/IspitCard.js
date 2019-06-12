import React, { Component } from "react";
import { Link } from "react-router-dom";
class IspitCard extends Component {
  renderIspit = () =>
    this.props.ispiti
      .filter(ispit => ispit.tipIspita === this.props.tipIspita)
      .map(el => (
        <li key={el.idIspit}>
          {el.idPredmet}
          <Link to={`/charlie/informacije-o-ispitu/${el.idIspit}`} style={{float:"right"}}>
                  Info o ispitu
            </Link>
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

import React, { Component } from "react";
import history from "../utils/history";
class Header extends Component {
  render() {
    return (
      <div>
        <div className="card-header bg-primary text-light  mb-4">
          <h5>
            <a
              onClick={this.handleRedirectClick}
              href="/KILO/kreiranjeZadace/?idPredmeta=3"
            >
              Kreiranje zadaće
            </a>
          </h5>
          <h5>
            <a
              onClick={this.handleRedirectClick}
              href="/KILO/azuriranjeZadace/?idPredmeta=3"
            >
              Ažuriranje zadaće
            </a>
          </h5>
        </div>
      </div>
    );
  }
  handleRedirectClick = event => {
    event.preventDefault();
    history.push(event.target.href.split(window.location.origin)[1]);
  };
}

export default Header;

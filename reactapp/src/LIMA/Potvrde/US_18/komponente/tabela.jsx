import React, { Component } from "react";
import Red from "./red";
class Tabela extends Component {
  render() {
    return (
      <div className="m-5">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Ime i prezime</th>
              <th scope="col">Vrsta zahtjeva</th>
              <th scope="col">Zahtjev podnesen(datum)</th>
              <th scope="col">Stanje(obradjena/neobradjena)</th>
              <th scope="col">Zahtjev izdat(datum)</th>
              <th scope="col">Besplatna(da/ne)</th>
            </tr>
          </thead>
          <tbody>
            {this.props.redovi.map(red => (
              <Red key={red.id} red={red} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Tabela;

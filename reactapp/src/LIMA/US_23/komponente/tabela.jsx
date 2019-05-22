import React, { Component } from "react";
import Red from "./red";
class Tabela extends Component {
  render() {
    return (
      <div className="m-5">
        <h3>
          Lista potvrda
          <small className="text-muted"> za obradu</small>
        </h3>
        <table className="table table-hover">
          <thead //ovo je definisanje "glave" odnosno prvog reda tabele
          >
            <tr //ovo je definisanje kolona
            >
              <th scope="col">Izaberi</th>
              <th scope="col">Vrsta zahtjeva</th>
              <th scope="col">Zahtjev podnio(ime, prezime, index)</th>
              <th scope="col">Zahtjev podnesen(datum)</th>
            </tr>
          </thead>
          <tbody //ovo je definisanje izgledau unutar jednog reda.
          >
            {this.props.redovi.map(red => ( //ovo je ubacivanje komponente red 
                //ona ima id,             i ima označeno postojanje onCheck metode
              <Red key={red.id} red={red} onCheck={this.props.onCheck} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Tabela;

import React, { Component } from "react";
class Izvjestaj extends Component {
  state = {};
  imaBodova = () => {
    if (this.props.informacije.length !== 0) {
      if (this.props.informacije[0].postojiStudent === false) {
        alert("Student sa unesenim indexom ne postoji!");
        return (
          <React.Fragment>
            <div className="form-group w-50 mt-3">
              <label>
                Ostvareni bodovi prve parcijale za izabrani predmet:
              </label>
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Bodovi prvog parcijalnog ispita</th>
                    <th scope="col">Datum i vrijeme odrzavanja</th>
                  </tr>
                </thead>
                <tbody />
              </table>
            </div>
          </React.Fragment>
        );
      } else if (this.props.informacije[0].slusaPredmet === false) {
        alert("Ne slušaš odabrani predmet!");
        return (
          <React.Fragment>
            <div className="form-group w-50 mt-3">
              <label>
                Ostvareni bodovi prve parcijale za izabrani predmet:
              </label>
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Bodovi prvog parcijalnog ispita</th>
                    <th scope="col">Datum i vrijeme odrzavanja</th>
                  </tr>
                </thead>
                <tbody />
              </table>
            </div>
          </React.Fragment>
        );
      }
    }
    if (this.props.bodovi.length !== 0) {
      return (
        <React.Fragment>
          <div className="form-group w-50 mt-3">
            <label>Ostvareni bodovi prve parcijale za izabrani predmet:</label>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Bodovi prvog parcijalnog ispita</th>
                  <th scope="col">Datum i vrijeme odrzavanja</th>
                </tr>
              </thead>
              <tbody>
                {this.props.bodovi.map(bod => (
                  <tr key={bod.id} className="table-info">
                    <td>
                      {bod.prviParcijalni}/{bod.moguciBodPrve}
                    </td>
                    <td>
                      {"Datum: " + new Date(bod.datum).getDate() + "."}
                      {new Date(bod.datum).getMonth() + 1}
                      {"." +
                        new Date(bod.datum).getFullYear() +
                        " Vrijeme: " +
                        new Date(bod.datum).getUTCHours() +
                        "h " +
                        new Date(bod.datum).getUTCMinutes() +
                        "m"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </React.Fragment>
      );
    } else if (
      this.props.informacije.length !== 0 &&
      this.props.bodovi.length === 0
    ) {
      alert("Iz predmeta nije bilo ispita!");
      return (
        <React.Fragment>
          <div className="form-group w-50 mt-3">
            <label>Ostvareni bodovi prve parcijale za izabrani predmet:</label>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Bodovi prvog parcijalnog ispita</th>
                  <th scope="col">Datum i vrijeme odrzavanja</th>
                </tr>
              </thead>
              <tbody />
            </table>
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <div className="form-group w-50 mt-3">
            <label>Ostvareni bodovi prve parcijale za izabrani predmet:</label>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Bodovi prvog parcijalnog ispita</th>
                  <th scope="col">Datum i vrijeme odrzavanja</th>
                </tr>
              </thead>
              <tbody />
            </table>
          </div>
        </React.Fragment>
      );
    }
  };
  render() {
    return this.imaBodova();
  }
}

export default Izvjestaj;

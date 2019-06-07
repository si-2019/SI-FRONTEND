import React, { Component } from "react";
class Izvjestaj extends Component {
  state = {};
  imaPredmeta = () => {
    if (this.props.studenti.length !== 0) {
      if (this.props.studenti[0].predmetNaGodini === false) {
        alert("Predmet nije na tekucoj godini!");
        return (
          <React.Fragment>
            <div className="form-group w-50 mt-3">
              <label>
                Rezultati prve parcijale za akademsku{" "}
                {this.props.akademskaGodina.naziv} godinu:
              </label>
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Ime i prezime</th>
                    <th scope="col">Index</th>
                    <th scope="col">Bodovi</th>
                    <th scope="col">Datum i vrijeme odrzavanja</th>
                  </tr>
                </thead>
                <tbody />
              </table>
            </div>
          </React.Fragment>
        );
      } else if (this.props.studenti[0].biloIspita === false) {
        alert("Na predmetu nema odrzanih ispita!");
        return (
          <React.Fragment>
            <div className="form-group w-50 mt-3">
              <label>
                Rezultati prve parcijale za akademsku{" "}
                {this.props.akademskaGodina.naziv} godinu:
              </label>
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Ime i prezime</th>
                    <th scope="col">Index</th>
                    <th scope="col">Bodovi</th>
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
              <label>
                Rezultati prve parcijale za akademsku{" "}
                {this.props.akademskaGodina.naziv} godinu:
              </label>
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Ime i prezime</th>
                    <th scope="col">Index</th>
                    <th scope="col">Bodovi</th>
                    <th scope="col">Datum i vrijeme odrzavanja</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.studenti.map(stud => (
                    <tr key={stud.id} className="table-info">
                      <td>{stud.ime + " " + stud.prezime}</td>
                      <td>{stud.index}</td>
                      <td>{stud.bodovi}</td>
                      <td>
                        {"Datum: " + new Date(stud.datum).getDate() + "."}
                        {new Date(stud.datum).getMonth() + 1}
                        {"." +
                          new Date(stud.datum).getFullYear() +
                          " Vrijeme: " +
                          new Date(stud.datum).getUTCHours() +
                          "h " +
                          new Date(stud.datum).getUTCMinutes() +
                          "m"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </React.Fragment>
        );
      }
    } else {
      return (
        <React.Fragment>
          <div className="form-group w-50 mt-3">
            <label>Rezultati prve parcijale:</label>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Ime i prezime</th>
                  <th scope="col">Index</th>
                  <th scope="col">Bodovi</th>
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
    return this.imaPredmeta();
  }
}

export default Izvjestaj;

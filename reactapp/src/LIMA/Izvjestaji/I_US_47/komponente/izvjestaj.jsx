import React, { Component } from "react";
class Izvjestaj extends Component {
  state = {};
  imaPredmeta = () => {
    if (this.props.predmeti.length !== 0) {
      if (this.props.predmeti[0].postojiStudent === false) {
        alert("Student sa unesenim indexom ne postoji!");
        return (
          <React.Fragment>
            <div className="form-group w-50 mt-3">
              <label>
                Položeni predmeti na tekucoj akademskoj{" "}
                {this.props.akademskaGodina.naziv} godini:
              </label>
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Predmet</th>
                    <th scope="col">Ocjena</th>
                  </tr>
                </thead>
                <tbody />
              </table>
            </div>
          </React.Fragment>
        );
      } else if (this.props.predmeti[0].naGodini === false) {
        alert("Nisi upisan na tekuću akademsku godinu!");
        return (
          <React.Fragment>
            <div className="form-group w-50 mt-3">
              <label>
                Položeni predmeti na tekucoj akademskoj{" "}
                {this.props.akademskaGodina.naziv} godini:
              </label>
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Predmet</th>
                    <th scope="col">Ocjena</th>
                  </tr>
                </thead>
                <tbody />
              </table>
            </div>
          </React.Fragment>
        );
      } else if (this.props.predmeti[0].predmet === "/") {
        alert("Nijedan predmet nije upisan!");
        return (
          <React.Fragment>
            <div className="form-group w-50 mt-3">
              <label>
                Položeni predmeti na tekucoj akademskoj{" "}
                {this.props.akademskaGodina.naziv} godini:
              </label>
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Predmet</th>
                    <th scope="col">Ocjena</th>
                  </tr>
                </thead>
                <tbody />
              </table>
            </div>
          </React.Fragment>
        );
      } else if (this.props.predmeti[0].predmet !== "/") {
        return (
          <React.Fragment>
            <div className="form-group w-50 mt-3">
              <label>
                Položeni predmeti na tekucoj akademskoj{" "}
                {this.props.akademskaGodina.naziv} godini:
              </label>
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Predmet</th>
                    <th scope="col">Ocjena</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.predmeti.map(pred => (
                    <tr key={pred.id} className="table-info">
                      <td>{pred.predmet}</td>
                      <td>{pred.ocjena}</td>
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
            <label>Položeni predmeti na tekucoj akademskoj godini:</label>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Predmet</th>
                  <th scope="col">Ocjena</th>
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

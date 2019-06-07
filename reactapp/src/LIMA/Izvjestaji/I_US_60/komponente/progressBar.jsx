import React, { Component } from "react";
class ProgressBar extends Component {
  state = {};
  racunaj = () => {
    if (this.props.studenti.length !== 0) {
      if (this.props.studenti[0].predmetNaGodini === false) {
        return (
          <React.Fragment>
            <div className="progress mb-2">
              <div
                className="progress-bar progress-bar-success"
                role="progressbar"
                aria-valuenow="0" //trenutno koliko posto
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "0%" }}
              >
                <span style={{ color: "black" }}>0%</span>
              </div>
            </div>
            <div style={{ background: "#b0e0e6" }}>
              <p>
                Trenutni broj studenata koji su polozili predmet je{" "}
                <strong> 0 </strong>, dok je broj studenata koji sluša predmet{" "}
                <strong> 0 </strong>.
              </p>
            </div>
          </React.Fragment>
        );
      } else {
        let brojPolozenih = this.props.studenti[0].brojPolozenih;
        let brStuNaPred = this.props.studenti[0].ukupanBrStuPred;
        let postotak = (brojPolozenih / brStuNaPred) * 100;
        return (
          <React.Fragment>
            <div className="progress mb-2">
              <div
                className="progress-bar progress-bar-success"
                role="progressbar"
                aria-valuenow={postotak} //trenutno koliko posto
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: postotak + "%" }}
              >
                <span style={{ color: "black" }}>{postotak + "%"}</span>
              </div>
            </div>
            <div style={{ background: "#b0e0e6" }}>
              <p>
                Trenutni broj studenata koji su polozili predmet je{" "}
                <strong>{brojPolozenih}</strong>, dok je broj studenata koji
                sluša predmet <strong>{brStuNaPred}</strong>.
              </p>
            </div>
          </React.Fragment>
        );
      }
    } else {
      return (
        <React.Fragment>
          <div className="progress mb-2">
            <div
              className="progress-bar progress-bar-success"
              role="progressbar"
              aria-valuenow="0" //trenutno koliko posto
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: "0%" }}
            >
              <span style={{ color: "black" }}>0%</span>
            </div>
          </div>
          <div style={{ background: "#b0e0e6" }}>
            <p>
              Trenutni broj studenata koji su polozili predmet je{" "}
              <strong> 0 </strong>, dok je broj studenata koji sluša predmet{" "}
              <strong> 0 </strong>.
            </p>
          </div>
        </React.Fragment>
      );
    }
  };
  render() {
    return this.racunaj();
  }
}

export default ProgressBar;

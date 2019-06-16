import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

class TabelaSortiranaPoOcjeni extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      sortiraniPredmetiPoOcjeni: [],
      ocjene: [],
      trenutnoLogovaniStudentID: (window.localStorage.getItem("id") != null && window.localStorage.getItem("username") != null) ? window.localStorage.getItem("id") : 2,
      username: window.localStorage.getItem("username") != null ? window.localStorage.getItem("username") : "stest1",
      token: window.localStorage.getItem("token")
    }
  };

  componentDidMount() {
    if (window.localStorage.getItem("id") != null) {
      var ajax = new XMLHttpRequest();
      ajax.onreadystatechange = () => {
        if (this.readyState == 4 && this.status == 200) {
          this.handleGet();
        }
        else {
          //vrati na login
        //  this.props.history.push("/Romeo");
        this.handleMount();
        }
      }
      ajax.open("GET", "https://si2019romeo.herokuapp.com/users/validate?username=" + this.state.username, true);
      ajax.setRequestHeader("Authorization", this.state.token);
      ajax.send();
    }
    else this.handleGet();
  }

  handleGet = () => {
    axios
      .get(
        `https://si2019siera.herokuapp.com/ocjene/` +
        this.state.trenutnoLogovaniStudentID + "/sort"
      )
      .then(res => {
        if (res.data.succes) {
          const sortiraniPredmeti = res.data.ocjene.map(obj => obj.naziv);
          const ocjene = res.data.ocjene.map(obj => obj.ocjena);
          this.setState({ 
            sortiraniPredmetiPoOcjeni: sortiraniPredmeti, 
            ocjene: ocjene 
          });
        }
        else console.log("greska")
      })
      .catch(res=>{
        console.log("Doslo je do greske: " + res)
      })
  }

  render() {
    return (
      <div className="col-sm-12 col-xs-12 col-md-12 col-lg-4">
        {this.state.sortiraniPredmetiPoOcjeni.length == 0 ? <span style={{ float: "left", marginLeft: "30px" }}>Student trenutno nema ocjena</span> :
          <table className="table table-bordered text-center bg-active border-solid" style={{ float: "left", marginLeft: "20px" }}>
            <tbody>
              <tr className="bg-primary text-light">
                <th className="tabtip">Predmet</th>
                <th className="tabtip">Ocjena</th>
              </tr>
              {this.state.sortiraniPredmetiPoOcjeni.map((item, i) => (
                <tr className="tabtip1" key={i}>
                  <td>{item}</td>
                  <td>{this.state.ocjene[i]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        }
      </div>
    );
  }
}

export default withRouter(TabelaSortiranaPoOcjeni);
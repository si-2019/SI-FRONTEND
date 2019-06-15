import React, { Component } from "react";
import axios from "axios";
import {withRouter} from "react-router-dom";

class ListaPredmeta extends Component {
  state = {
    predmeti: ["Predmet1", "Predmet2", "Predmet3", "Predmet4", "Predmet5"],
    trenutnoLogovaniStudentID: (window.localStorage.getItem("id") != null && window.localStorage.getItem("username") != null) ? window.localStorage.getItem("id") : 1,
    username: window.localStorage.getItem("username") != null ? window.localStorage.getItem("username") : "Neki user",
    token: window.localStorage.getItem("token"),
  };

  handleGet = () => {
    axios
      .get(
        `https://si2019siera.herokuapp.com/predmeti/trenutni/` +
        this.state.trenutnoLogovaniStudentID
      )
      .then(res => {
        if (res.data.trenutniPredmeti != undefined) {
          const predmeti = res.data.trenutniPredmeti.map(obj => obj.naziv);
          this.setState({ predmeti });
        }
        else {
          this.setState({ predmeti: [] });
        }
      });
  }
  componentDidMount() {
    if (window.localStorage.getItem("id") != null) {
      var ajax = new XMLHttpRequest();
      ajax.onreadystatechange = () => {
        if (this.readyState == 4 && this.status == 200) {
          //radi sta hoces
          this.handleGet();
        }
        else {
          //vrati na login
          this.props.history.push("/Romeo");
        }
      }
      ajax.open("GET", "https://si2019romeo.herokuapp.com/users/validate/data?username=" + this.state.username, true);
      ajax.setRequestHeader("Authorization", this.state.token);
      ajax.send();
    }
    else this.handleGet();
  }

  prikazPredmeta() {
    if (this.state.predmeti.length === 0) return <p>Nema predmeta</p>;

    return (
      <div>
        {this.props.children}
        <ul>
          {this.state.predmeti.map(predmet => (
            <li
              key={predmet}
            >
              <label className="col-form-label">{predmet}</label>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  render() {
    return (
      <div className="align-self-start">{this.prikazPredmeta()}</div>
    );
  }
}

export default withRouter(ListaPredmeta);

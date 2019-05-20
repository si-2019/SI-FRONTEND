import React, { Component } from "react";
import "./bootstrap.min.css";

class IspitiTabela extends Component {
  state = {};
  render() {
    return (
      <table class="table table-hover">
        <tbody>
          <tr class="table-primary">
            <th scope="row">Akademska godina {this.props.akGod}</th>
            <td colSpan="2">I parcijalni</td>
            <td colSpan="2">II parcijalni</td>
            <td colSpan="2">Usmeni</td>
          </tr>
          <tr class="table-primary">
            <th scope="row">Predmet</th>
            <td>Datum</td>
            <td>Ostvareni bodovi</td>
            <td>Datum</td>
            <td>Ostvareni bodovi</td>
            <td>Datum</td>
            <td>Ostvareni bodovi</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default IspitiTabela;

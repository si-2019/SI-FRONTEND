import React, { Component } from "react";
class Red extends Component {
  state = {};
  render() {
    return (
      <tr className="table-info">
        <td>
          <input
            className="form-check-input ml-4"
            type="checkbox"
            value=""
            disabled=""
            onChange={() => this.props.onCheck(this.props.red)}
          />
        </td>
        <th scope="row">{this.props.red.vrsta}</th>
        <td>
          {this.props.red.info.ime +
            " " +
            this.props.red.info.prezime +
            " " +
            this.props.red.info.indeks}
        </td>
        <td>{this.props.red.datumZahtjeva}</td>
      </tr>
    );
  }
}

export default Red;

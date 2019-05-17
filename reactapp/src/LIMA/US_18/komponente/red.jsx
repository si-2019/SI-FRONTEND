import React, { Component } from "react";
class Red extends Component {
  state = {};
  render() {
    return (
      <tr className="table-info">
        <td>{this.props.red.info.ime + " " + this.props.red.info.prezime}</td>
        <th scope="row">{this.props.red.vrsta}</th>
        <td>{this.props.red.datumZahtjeva}</td>
        <td>{this.props.red.stanje}</td>
        <td>{this.props.red.datumIzdavanja}</td>
        <td>{this.props.red.besplatna}</td>
      </tr>
    );
  }
}

export default Red;

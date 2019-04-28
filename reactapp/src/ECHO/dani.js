import React, { Component } from "react";
import "./izgled.css";

class Dani extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Danic">
        <button className="prvi" id="Sljedeci" onClick={this.props.prev}>
          {" "}
          Prev
        </button>
        <button className="drugi" id="Prethodni" onClick={this.props.next}>
          Next
        </button>
        <table className="tabela" id="tabelica">
          <thead>
            <tr>
              <th scope="col"># </th>
              <th scope="col">{this.props.danas}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row"> 08:00 </th>
              <td>
                <button> </button>
              </td>
            </tr>
            <tr>
              <th scope="row">09:00</th>
              <td>
                <button> </button>{" "}
              </td>
            </tr>
            <tr>
              <th scope="row">10:00</th>
              <td>
                {" "}
                <button> </button>{" "}
              </td>
            </tr>
            <tr>
              <th scope="row">11:00</th>
              <td>
                {" "}
                <button> </button>{" "}
              </td>
            </tr>
            <tr>
              <th scope="row">12:00</th>
              <td>
                {" "}
                <button> </button>{" "}
              </td>
            </tr>
            <tr>
              <th scope="row">13:00</th>
              <td>
                {" "}
                <button> </button>{" "}
              </td>
            </tr>
            <tr>
              <th scope="row">14:00</th>
              <td>
                {" "}
                <button> </button>{" "}
              </td>
            </tr>
            <tr>
              <th scope="row">15:00</th>
              <td>
                {" "}
                <button> </button>{" "}
              </td>
            </tr>
            <tr>
              <th scope="row">16:00</th>
              <td>
                {" "}
                <button> </button>{" "}
              </td>
            </tr>
            <tr>
              <th scope="row">17:00</th>
              <td>
                {" "}
                <button> </button>{" "}
              </td>
            </tr>
            <tr>
              <th scope="row"> 18:00</th>
              <td>
                {" "}
                <button> </button>{" "}
              </td>
            </tr>
            <tr>
              <th scope="row">19:00</th>
              <td>
                {" "}
                <button> </button>{" "}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default Dani;

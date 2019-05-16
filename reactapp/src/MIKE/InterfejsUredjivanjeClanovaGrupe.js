import React, { Component } from 'react';
import './bootstrapflatly.css';

class InterfejsUredjivanjeClanovaGrupe extends Component {
  render() {
    return (
      <div className="bs-component">
        <p>Uredjivanje clanova grupe</p>
        <ul className="list-group">
            <li className="list-group-item">test1</li>
            <li className="list-group-item">test2</li>
        </ul>
        <button className="btn">Dugme</button>
      </div>
    );
  }
}

export default InterfejsUredjivanjeClanovaGrupe;
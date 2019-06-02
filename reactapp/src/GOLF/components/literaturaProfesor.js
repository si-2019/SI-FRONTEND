import React, { Component } from 'react';

class LiteraturaProfesor extends Component {
  render() {
    return (
      <div class="divsaokvirom">
      <h4 class='naslov'>Literatura</h4>
      <div className="linkovi">
        {this.props.nesto.map(file =>[<a href = "#">{file.naziv}</a>,<br/>])}
      </div>
    </div>
    );
  }
}

export default LiteraturaProfesor
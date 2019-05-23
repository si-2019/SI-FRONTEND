import React, { Component } from 'react';

class sedmica extends Component {
  render() {

    return (
        <div class='divsaokvirom'>
            <h4 class='naslov'>{this.props.naslov}</h4>
            {/*{this.props.fileovi.map(file =>[<a href = "#">{file}</a>])}*/}
        </div>
    );
  }
}

export default sedmica;
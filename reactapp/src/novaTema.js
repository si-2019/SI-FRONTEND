import React, {Component} from 'react';

class NovaTema extends Component{
  render(){
    return(
      <form>
        <p>Naziv Teme</p>
        <input type='text'/>
        <p>Tekst</p>
        <input type='text'/>
      </form>
    );
  }
}

export default NovaTema;
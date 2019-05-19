import React, { Component } from 'react'
import Axios from 'axios';

class InformacijeOIspitu extends Component {

  state ={ispit:{}}

  async componentDidMount() {
    // vratit ce ispit kad se uradi backend
    // this.setState({ ispit: Axios.get("http://localhost:31903/ispiti/:idIspit") });
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="rokPrijave">Rok prijave: </label> <br />
          <input type="text" id="rokPrijave" value={this.state.ispit.rokPrijave} disabled></input>
        </form>
      </div>)
  }
}

export default InformacijeOIspitu
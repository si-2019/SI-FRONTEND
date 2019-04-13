import React, { Component } from 'react'

class InformacijeOIspituForma extends Component {

  render() {
    return (
      <div>
        <form>
          <div>
            <label htmlFor="rokPrijave">Rok prijave: </label> <br />
            <input type="date" className="form-control" />
          </div>

        </form>
      </div>)
  }
}

export default InformacijeOIspituForma
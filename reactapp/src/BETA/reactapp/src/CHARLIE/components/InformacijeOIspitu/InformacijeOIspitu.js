import React, { Component } from 'react'

class InformacijeOIspitu extends Component {

  render() {
    return (
      <div>
        <form>
          <div>
            <label htmlFor="rokPrijave">Rok prijave: </label> <br />
            <input type="date" className="form-control" id="datetimep" />
            <label htmlFor="vrijemeTrajanja">Vrijeme trajanja: </label> <br/>
            <input type="text" className="form-control" id="vrijemeT" />
          </div>
        </form>
      </div>)
  }
}

export default InformacijeOIspitu
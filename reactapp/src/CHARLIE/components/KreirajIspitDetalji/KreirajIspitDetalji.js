import React, { Component } from "react";
import Form from "../SharedComponents/Form";
import { Link } from 'react-router-dom';
import Axios from "axios";



class KreirajIspitDetalji extends Component {
  state = { 
    napomena: '',
    napomenaGreska: false,
    ispit: {}
   };

  handleSubmit = event => {
    event.preventDefault();
    // poziv na backend

    Axios.post('http://localhost:31903/addIspit', this.state.ispit)
      .catch((err) => {
        if(err.response.status === 409) {
          alert(err.response.data);
        }
      })
    this.setState({ napomena: ''});
  }

  handleChange = event => {
    this.setState({ napomena: event.target.value });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <form onSubmit={this.handleSubmit}>
              <label>Napomena za ispit
                <input type="text" value={this.state.napomena} onChange={this.handleChange}/>
              </label>
              <button type="submit" class="btn btn-primary">Kreiraj</button>
              <Link to="/charlie">
              <button type="button" class="btn btn-danger" id="btnPovratak">Odustani</button>
              </Link>

              <label htmlFor="rokPrijave">Rok prijave: </label> <br />
              <input type="date" className="form-control" id="datetimep" />
              <label htmlFor="vrijemeTrajanja">Vrijeme trajanja: </label> <br/>
              <input type="text" className="form-control" id="vrijemeT" />
            </form>
          </div>
        </div>
        
      </div>
    );
  }
}

export default KreirajIspitDetalji;

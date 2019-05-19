import React, { Component } from "react";
import Form from "../SharedComponents/Form";
import { Link } from 'react-router-dom';



class KreirajIspitDetalji extends Component {
  state = { napomenaGreska: false };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <form>

              <label htmlFor="rokPrijave">Rok prijave: </label> <br />
              <input type="date" className="form-control" id="datetimep" />
              <label htmlFor="vrijemeTrajanja">Vrijeme trajanja: </label> <br/>
              <input type="text" className="form-control" id="vrijemeT" />

              <Form
                autoFocus
                labelTitle="Napomena za ispit"
                id="ispitnaNapomena"
                placeholder="Nemojte zaboraviti indeks..."
                validations={["required"]}
              />
            </form>
          </div>
        <div className="col-4">
          <form>
            <Link to="/charlie">
              <button type="button" class="btn btn-primary" id="btnSpasi">Kreiraj ispit</button>
            </Link>
            <Link to="/charlie">
              <button type="button" class="btn btn-danger" id="btnPovratak">Odustani</button>
            </Link>
          </form>
        </div>
        </div>
        
      </div>
    );
  }
}

export default KreirajIspitDetalji;

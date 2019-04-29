import React, { Component } from "react";
import Form from "../SharedComponents/Form";
import { Link } from 'react-router-dom'

class KreirajIspitDetalji extends Component {
  state = { napomenaGreska: false };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <form>
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
              <button type="button" class="btn btn-danger">Odustani</button>
            </Link>
          </form>
        </div>
        </div>
        
      </div>
    );
  }
}

export default KreirajIspitDetalji;

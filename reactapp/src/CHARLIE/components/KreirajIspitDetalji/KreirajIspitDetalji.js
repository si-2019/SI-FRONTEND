import React, { Component } from "react";
import Form from "../SharedComponents/Form";

class KreirajIspitDetalji extends Component {
  state = { napomenaGreska: false };

  render() {
    return (
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
    );
  }
}

export default KreirajIspitDetalji;

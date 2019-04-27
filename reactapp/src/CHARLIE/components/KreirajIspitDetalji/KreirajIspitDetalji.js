import React, { Component } from "react";
import FormInput from "../SharedComponents/FormInput";

class KreirajIspitDetalji extends Component {
  state = { napomenaGreska: false };

  render() {
    return (
      <div className="col-4">
        <form>
          <FormInput
            labelTitle="Napomena za ispit"
            id="ispitnaNapomena"
            placeholder="Nemojte zaboraviti indeks..."
          />
        </form>
      </div>
    );
  }
}

export default KreirajIspitDetalji;

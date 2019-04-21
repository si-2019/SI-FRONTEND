import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Form
} from "reactstrap";
// import KreiranjeZadace from "./kreiranjeZadace";
import axios from "axios";

class AzuriranjeZadace extends Component {
  constructor(props) {
    super(props);
    const urlParams = new URLSearchParams(window.location.search);
    this.state = {
      idPredmet: urlParams.get("idPredmeta")
        ? Number(urlParams.get("idPredmeta"))
        : 1,
      radnja: "",
      naziv: "",
      datum: "",
      vrijeme: "",
      postavka: "",
      brojZadataka: "",
      sviTipoviIsti: "",
      listaTipova: "",
      sviBodoviIsti: "",
      listaBodova: "",
      ukupnoBodova: "",
      listaZadacaZaAzuriranje: [],
      dropdownOpen: false
    };

    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    this.pokupiIzBaze();
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  pokupiIzBaze = () => {
    var noviNiz = [];
    axios.get("http://localhost:6001/getZadace").then(res => {
      // res ti je onaj json niz zadaca sa id i naziv

      // for (var i = 0; i < res.data.length; i++) {
      //   noviNiz.push(res.data[i].naziv);
      // }
      console.log("AAAA:", res);

      this.setState({
        listaZadacaZaAzuriranje: res.data
      });
    });
    // console.log(this.state.listaZadacaZaAzuriranje);
    // return this.state.listaZadacaZaAzuriranje;
  };

  setAllState = () => {
    // poziv na bazu i popunjavanje state-a
  };

  render() {
    const lista = this.state.listaZadacaZaAzuriranje; // this.pokupiIzBaze();
    console.log(lista);

    var lista2 = ["Zadaća 1", "Zadaća 2", "Zadaća 3"];
    return (
      <div>
        <Form>
          <div>
            <h4>
              <ButtonDropdown
                isOpen={this.state.dropdownOpen}
                toggle={this.toggle}
              >
                <DropdownToggle caret>
                  Lista zadaća za ažuriranje
                </DropdownToggle>
                <DropdownMenu>
                  {lista.map(item => (
                    <DropdownItem scope="col" key={item.id}>
                      {item.naziv}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </ButtonDropdown>
            </h4>
          </div>
          <a href={"/KILO/kreiranjeZadace/?idPredmeta=" + this.state.idPredmet}>
            Kreiranje
          </a>
        </Form>
      </div>
    );
  }
}

export default AzuriranjeZadace;

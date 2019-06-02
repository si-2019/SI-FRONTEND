import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Form
} from "reactstrap";
import KreiranjeZadace from "./kreiranjeZadace";
import axios from "axios";

class AzuriranjeZadace extends Component {
  constructor(props) {
    super(props);
    const urlParams = new URLSearchParams(window.location.search);
    this.state = {
      idPredmet: urlParams.get("idPredmeta")
        ? Number(urlParams.get("idPredmeta"))
        : 1,
      azuriranjeState: null,
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
    axios.get("http://localhost:31911/getZadace").then(res => {
      this.setState({
        listaZadacaZaAzuriranje: res.data
      });
    });
  };

  setAllState = () => {
    // poziv na bazu i popunjavanje state-a
  };

  render() {
    const lista = this.state.listaZadacaZaAzuriranje; // this.pokupiIzBaze();
    console.log(lista);
    return (
      <div>
        <Form>
          <div>
            <h4>
              <ButtonDropdown
                isOpen={this.state.dropdownOpen}
                toggle={this.toggle}
              >
                <DropdownToggle caret className="bg-primary">
                  Lista zadaća za ažuriranje
                </DropdownToggle>
                <DropdownMenu className="bg-primary">
                  {lista.map(item => (
                    <DropdownItem
                      onClick={this.handleDropdownClick(item.id)}
                      scope="col"
                      key={item.id}
                    >
                      {item.naziv}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </ButtonDropdown>
            </h4>
          </div>
          
        </Form>
        <div>
          {this.state.azuriranjeState && (
            <KreiranjeZadace
              
              title={"Ažuriranje zadaće"}
              
              mainState={this.state.azuriranjeState}
            />
          )}  
          {/* confirmActionHandler={this.handleUpdateZadatak} */}
        </div>
      </div>
    );
  }

  handleDropdownClick = zadacaId => () => {
    this.getZadacaById(zadacaId);
  };

  getZadacaById = async zadacaId => {
    try {
      const res = await axios.get(
        `http://localhost:31911/getZadacaById/${zadacaId}`
      );
      console.log(res.data);
      this.setState({
        azuriranjeState: res.data
      });
      
    } catch (e) {
      console.error("Error fetching zadaca by id", e);
    }
  };
/*
  handleUpdateZadatak = state => {
    // TODO: update logic
  };*/
}

export default AzuriranjeZadace;

import React, { Component } from "react";

import {
  Modal,
  ModalFooter,
  ModalBody,
  ModalHeader,
  Button,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Form
} from "reactstrap";
import PreviewZadace from "./previewZadace";
import axios from "axios";


//user story 68 i user story 66 pushani skupa
class BrisanjeZadace extends Component {
  constructor(props) {
    super(props);
    const urlParams = new URLSearchParams(window.location.search);
    this.state = {
      idPredmet: urlParams.get("idPredmeta")
        ? Number(urlParams.get("idPredmeta"))
        : 1,
      brisanjeState: null,
      listaZadacaZaBrisanje: [],
      dropdownOpen: false,
      uspjehBrisanja: false,
      neuspjehBrisanja: false
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
        listaZadacaZaBrisanje: res.data
      });
    });
  };
  handleDropdownClick = zadacaId => () => {
    this.getZadacaById(zadacaId);
  };

  getZadacaById = async zadacaId => {
    try {
      const res = await axios.get(
        `http://localhost:31911/getZadacaById/${zadacaId}`
      );
      this.setState({
        brisanjeState: res.data
      });

    } catch (e) {
      console.error("Error fetching zadaca by id", e);
    }
  };
  handleClick = event => {
    axios.delete(`http://localhost:31911/zadaca/${this.state.brisanjeState.idZadaca}`).then(res => {
      if (res.status === 200) {
        this.setState({ uspjehBrisanja: true });
      }
      else {
        this.setState({ neuspjehBrisanja: true });
      }
    });
  };
  ugasiPorukuUspjeh = () => {
    this.setState({ uspjehBrisanja: false });
  };

  ugasiPorukuNeuspjeh = () => {
    this.setState({ neuspjehBrisanja: false });
  };
  render() {
    const lista = this.state.listaZadacaZaBrisanje; // this.pokupiIzBaze();
    return (
      <div>

        <div class="card w-25 ml-3 mt-4">
          <div class="card-title" id="brisanjeT">
            Lista zadaća koje je moguće obrisati:
            </div>

          <select
            id="brissel"
            multiple=""
            className="custom-select  mb-2"
          >
            {lista.map(item =>
              (<option onClick={this.handleDropdownClick(item.id)}

                key={item.id}>{item.naziv}
              </option>))
            }

          </select>


        </div>

        <div>
          {this.state.brisanjeState && (
            <div>
              <PreviewZadace

                title={"Brisanje zadaće"}

                podaci={this.state.brisanjeState}
              />
              <Button
                className=" btn bg-primary"
                id="deleteZadaca"
                name="deleteZadaca"
                onClick={this.handleClick}

              >
                Potvrdi
          </Button>
              <Modal isOpen={this.state.uspjehBrisanja}>
                <ModalHeader background-color={"success"}>
                  <p className="text-success">
                    {" "}
                    <b>Čestitamo!</b>
                  </p>
                </ModalHeader>
                <ModalBody>Uspješno ste obrisali zadaću.</ModalBody>
                <ModalFooter>
                  <Button color="success" onClick={this.ugasiPorukuUspjeh}>
                    OK
              </Button>
                </ModalFooter>
              </Modal>

              <Modal isOpen={this.state.neuspjehBrisanja}>
                <ModalHeader background-color={"danger"}>
                  <p className="text-danger">
                    {" "}
                    <b>Dogodila se greška!</b>
                  </p>
                </ModalHeader>
                <ModalBody> Brisanje zadaće nije uspjelo.</ModalBody>
                <ModalFooter>
                  <Button color="danger" onClick={this.ugasiPorukuNeuspjeh}>
                    OK
              </Button>
                </ModalFooter>
              </Modal>
            </div>
          )}
          {/* confirmActionHandler={this.handleUpdateZadatak} */}
        </div>
      </div>
    );
  }
}

export default BrisanjeZadace;
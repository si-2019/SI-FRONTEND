import React, { Component } from "react";
import { Link } from "react-router-dom";
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
import KreiranjeZadace from "./kreiranjeZadace";


class BrisanjeZadace extends Component{
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
          console.log(res.data);
          this.setState({
            brisanjeState: res.data
          });
          console.log(this.state.brisanjeState)
          
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
                      Lista zadaća za brisanje
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
          {this.state.brisanjeState && (
              <div>
            <PreviewZadace
              
              title={"Brisanje zadaće"}
              
              podaci={this.state.brisanjeState}
            />
          <Button
            className=" btn bg-primary ml-4"
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
); }
}

export default BrisanjeZadace;
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


class OcjenjivanjePocetna extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen : [false, false, false, false]
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle = (indeks) => {

    var noviNiz = this.state.dropdownOpen;

    noviNiz[indeks] = !noviNiz[indeks];

    this.setState({
      dropdownOpen: noviNiz
    });

  }

  render() {
    return (
      <div>
        
        
        <div class="card p-3 w-50 ml-5">
          <div className="card-title">
            <h4>
              <b>Ocjenjivanje zadaća </b>
            </h4>
          </div>
          <div id="kontOcjenjivanje">
          <div class="row">
            <div class="col">
            <select
            id="selK1"
            multiple=""
            className="custom-select w-50"
          >
            {this.props.podaci.state.listaZadaca.map(clan => (<option onClick={() => this.props.podaci.postaviZadacu(clan.naziv, clan.id)} key={clan+2000}>{clan.naziv}</option>))
              }
          </select>
             
              <br />
              <h6  id="nisupos">
                Studenti koji <b className="text-danger">nisu poslali </b>
                zadaću:
              </h6>
              <select
              id="selK2"
            multiple=""
            className="custom-select w-50"
           
          >
            {this.props.podaci.state.studentiNisuPoslali.map(clan =>
             (<option onClick={() => this.props.podaci.handleBackNaJednaZadaca(clan.naziv, clan.id)} key={clan}>{clan.naziv}</option>))
              }
          
          </select>
              <h6 id="nijepreg">
                Studenti koji su poslali, ali{" "}
                <b className="text-warning">nije pregledano:</b>{" "}
              </h6>
              <select
              id="selK3"
            multiple=""
            className="custom-select w-50"
          >
            {this.props.podaci.state.studentiNijePregledano.map(clan =>
             (<option onClick={() => this.props.podaci.handleBackNaJednaZadaca(clan.naziv, clan.id)} key={clan+200}>{clan.naziv}
             </option>))
              }
          
          </select>
            
              <h6 id="jestepreg">
                Studenti čije zadaće su{" "}
                <b className="text-success">pregledane:</b>{" "}
              </h6>
              <select
              id="selK4"
            multiple=""
            className="custom-select w-50"
          >
            {this.props.podaci.state.studentiPregledano.map(clan =>
             (<option onClick={() => this.props.podaci.handleBackNaJednaZadaca(clan.naziv, clan.id)} key={clan+1000}>{clan.naziv}
             </option>))
              }
          
          </select>
              
            </div>
          </div>
        </div>
       
      </div>
      </div>
    );
  }
}

export default OcjenjivanjePocetna;

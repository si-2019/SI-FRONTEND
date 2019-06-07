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
        {/*iz nekog razloga mi odleti footer gore O.o msm da je zbog grid systema nesta*/}
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        
        <Form>
        <div class="container">
          <br />
          <div className="card-header bg-primary text-light">
            <h4>
              <b>Ocjenjivanje zadaća </b>
            </h4>
          </div>
          <div class="row">
            <div class="col">
              <br />
              <ButtonDropdown
                isOpen={this.state.dropdownOpen[0]}
                toggle={() => this.toggle(0)}>

                    <DropdownToggle caret className="bg-primary">
                    Lista zadaća za ocjenjivanje
                    </DropdownToggle>
                    <DropdownMenu className="bg-primary">
                    {this.props.podaci.state.listaZadaca.map(clan => (
                        <DropdownItem
                          onClick={() => this.props.podaci.postaviZadacu(clan.naziv, clan.id)}
                          scope="col"
                          key={clan+2000}
                        >
                          {clan.naziv}
                        </DropdownItem>
                    ))}
                    </DropdownMenu>

              </ButtonDropdown>
              <hr />
              <br />
              <h4 className="ml-3">
                Studenti koji <b className="text-danger">nisu poslali</b>{" "}
                zadaću:{" "}
              </h4>
              <ButtonDropdown
                isOpen={this.state.dropdownOpen[1]}
                toggle={() => this.toggle(1)}>

                    <DropdownToggle caret className = "custom-form-control ml-4 btn btn-danger">
                    Lista studenata
                    </DropdownToggle>
                    <DropdownMenu className = "custom-form-control btn-danger">
                    {this.props.podaci.state.studentiNisuPoslali.map(clan => (
                        <DropdownItem
                          onClick={() => this.props.podaci.handleBackNaJednaZadaca(clan.naziv, clan.id)}
                          scope="col"
                          key={clan}
                        >
                          {clan.naziv}
                        </DropdownItem>
                    ))}
                    </DropdownMenu>
              </ButtonDropdown>
              <br />
              <br />
              <h4 className="ml-3">
                Studenti koji su poslali, ali{" "}
                <b className="text-warning">nije pregledano:</b>{" "}
              </h4>
              <ButtonDropdown
                isOpen={this.state.dropdownOpen[2]}
                toggle={() => this.toggle(2)}>

                    <DropdownToggle caret className = "custom-form-control ml-4 btn btn-warning">
                    Lista studenata
                    </DropdownToggle>
                    <DropdownMenu className = "custom-form-control btn-warning">
                    {this.props.podaci.state.studentiNijePregledano.map(clan => (
                        <DropdownItem
                          onClick={() => this.props.podaci.handleBackNaJednaZadaca(clan.naziv, clan.id)}
                          scope="col"
                          key={clan+200}
                        >
                          {clan.naziv}
                        </DropdownItem>
                    ))}
                    </DropdownMenu>
              </ButtonDropdown>
              <br />
              <br />
              <h4 className="ml-3">
                Studenti čije zadaće su{" "}
                <b className="text-success">pregledane:</b>{" "}
              </h4>
              <ButtonDropdown
                isOpen={this.state.dropdownOpen[3]}
                toggle={() => this.toggle(3)}>

                    <DropdownToggle caret className = "custom-form-control ml-4 btn btn-success">
                    Lista studenata
                    </DropdownToggle>
                    <DropdownMenu className = "custom-form-control btn-success">
                    {this.props.podaci.state.studentiPregledano.map(clan => (
                        <DropdownItem
                          onClick={() => this.props.podaci.handleBackNaJednaZadaca(clan.naziv, clan.id)}
                          scope="col"
                          key={clan+1000}
                        >
                          {clan.naziv}
                        </DropdownItem>
                    ))}
                    </DropdownMenu>
              </ButtonDropdown>
            </div>
          </div>
        </div>
        </Form>
      </div>
      
    );
  }
}

export default OcjenjivanjePocetna;

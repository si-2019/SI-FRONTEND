import React, { Component } from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Form } from 'reactstrap';
import KreiranjeZadace from './kreiranjeZadace';


class AzuriranjeZadace extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          idPredmeta: "",
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
          listaZadaca: ["Zadaća 1", "Zadaća 2", "Zadaća 3", "Zadaća 4"]
          }


          this.toggle = this.toggle.bind(this);
            this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
    }
    

        
    
    setAllState = () => {
        // poziv na bazu i popunjavanje state-a
    }

    render() {
        return(
        <div>
            <Form>
            <div className="card-header  mb-4">
                <h4>
                    <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                        <DropdownToggle caret>
                            Lista zadaća za ažuriranje
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>Another Action</DropdownItem>
                            <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                    </ButtonDropdown>
                </h4>
            </div>
            


            <BrowserRouter>
                <Link to="/KILO/kreiranjeZadace/?idPredmeta=3">
                    Kreiranje    
                </Link>
                <Route path='/KILO/kreiranjeZadace/' exact component={KreiranjeZadace}/>
            </BrowserRouter>
            </Form>
        </div>)
    }
}

export default AzuriranjeZadace
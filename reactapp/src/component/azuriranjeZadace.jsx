import React, { Component } from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Form } from 'reactstrap';
import KreiranjeZadace from './kreiranjeZadace';
import axios from "axios";


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
          listaZadacaZaAzuriranje: ["nes","n2w"]
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
    
    pokupiIzBaze = () => {
        var noviNiz=[];
        axios.get('http://localhost:6001/getZadace')
          .then(res => {
            // res ti je onaj json niz zadaca sa id i naziv
            
                for(var i=0;i<res.data.length; i++){
                    noviNiz.push(res.data[i].naziv);
                }

           this.setState({
                listaZadacaZaAzuriranje: noviNiz
            })

            
          });
          console.log(this.state.listaZadacaZaAzuriranje);
         return this.state.listaZadacaZaAzuriranje;
    }

        
    
    setAllState = () => {
        // poziv na bazu i popunjavanje state-a
    }

    render() {
        
       var lista = this.pokupiIzBaze();
       console.log(lista);

       var lista2=["Zadaća 1", "Zadaća 2", "Zadaća 3"];
        return(
        <div>
            <Form>
            <div >
                <h4>
                    <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                        <DropdownToggle caret>
                            Lista zadaća za ažuriranje
                        </DropdownToggle>
                        <DropdownMenu>
                            {lista2.map(jedno => (
                    
                            <DropdownItem scope="col" key={jedno + 200}>
                            {jedno}
                            </DropdownItem>
                            ))}
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
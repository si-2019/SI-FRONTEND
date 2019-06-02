import React, { Component} from 'react';
//import './delta.css';
import ListaPredmeta from "./ListaPredmeta";
import { BrowserRouter, Route } from "react-router-dom";

class Predmet extends Component {

    constructor(props) {

        super(props);

        this.state = {
            kliknut: false
        }
    }

    Otvori(){
        this.setState({
            kliknut: !this.state.kliknut
        })
    }
  
    render() {
        return(
            <div id="navv" class='side'>
                <ul class="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-center" onClick={() => this.Otvori()}>
                        <a href='#'>Predmet</a>
                    </li>
                    {this.state.kliknut && <ListaPredmeta/>}
                </ul>
            </div>
            
            //dohvatiti iz baze predmete i izlistati ih
        );
    }
}

export default Predmet
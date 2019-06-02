import React, { Component} from 'react';
//import'./delta.css';
import { BrowserRouter, Route } from "react-router-dom";

class ListaPredmeta extends Component {

    constructor(props){

        super(props);

        this.state = {
            kliknut1: false,
            kliknut2: false,
            kliknut3: false,
            kliknut4: false,
            kliknut5: false
        }
    }

    Otvori(br){
        if(br===1) {
            this.setState({
                kliknut1: !this.state.kliknut1
            })
        }
        else if(br===2){
            this.setState({
                kliknut2: !this.state.kliknut2
            })
        }
        else if(br===3){
            this.setState({
                kliknut3: !this.state.kliknut3
            })
        }
        else if(br===4){
            this.setState({
                kliknut4: !this.state.kliknut4
            })
        }
        else{
            this.setState({
                kliknut5: !this.state.kliknut5
            })
        }
    } 

    render() {
        return(
            <div id="predmeti" class='side' style={{margin:-5}}>
                <ul class="list-group">
                    <li class="list-group-item d-flex justify-content-between align-items-center" onClick = {() => this.Otvori(1)}>
                    <a href='#'> Softver inženjering</a>
                    </li>
                    {this.state.kliknut1}
                    <li class="list-group-item d-flex justify-content-between align-items-center" onClick = {() => this.Otvori(2)}>
                    <a href='#'> Vještačka Inteligencija</a>
                    </li>
                    {this.state.kliknut2}
                    <li class="list-group-item d-flex justify-content-between align-items-center" onClick = {() => this.Otvori(3)}>
                    <a href='#'> Projektovanje informacionih sistema</a>
                    </li>
                    {this.state.kliknut3}
                    <li class="list-group-item d-flex justify-content-between align-items-center" onClick = {() => this.Otvori(4)}>
                    <a href='#'> Administracija Računarskih Mreža</a>
                    {this.state.kliknut4}
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center" onClick = {() => this.Otvori(5)}>
                    <a href='#'> Završni rad</a>
                    {this.state.kliknut5}
                    </li>
                </ul>
            </div>
        )
    }
}

export default ListaPredmeta
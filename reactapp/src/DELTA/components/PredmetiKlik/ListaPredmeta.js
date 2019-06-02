import React, { Component} from 'react';
//import'./delta.css';

class ListaPredmeta extends Component {

    constructor(props){

        super(props);

        this.state = {
            kliknut1: false,
            kliknut2: false,
            kliknut3: false,
            kliknut4: false
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
        else{
            this.setState({
                kliknut4: !this.state.kliknut4
            })
        }
    } 

    render() {
        return(
            <div id="predmeti" class='side'>
                <ul class="list-group">
                    <li class="list-group-item d-flex justify-content-between align-items-center" onClick = {() => this.Otvori(1)}>
                    <a href='#'> Predmet1</a>
                    </li>
                    {this.state.kliknut1}
                    <li class="list-group-item d-flex justify-content-between align-items-center" onClick = {() => this.Otvori(2)}>
                    <a href='#'> Predmet2</a>
                    </li>
                    {this.state.kliknut2}
                    <li class="list-group-item d-flex justify-content-between align-items-center" onClick = {() => this.Otvori(3)}>
                    <a href='#'> Predmet3</a>
                    </li>
                    {this.state.kliknut3}
                    <li class="list-group-item d-flex justify-content-between align-items-center" onClick = {() => this.Otvori(4)}>
                    <a href='#'> Predmet4</a>
                    {this.state.kliknut4}
                    </li>
                </ul>
            </div>
        )
    }
}

export default ListaPredmeta
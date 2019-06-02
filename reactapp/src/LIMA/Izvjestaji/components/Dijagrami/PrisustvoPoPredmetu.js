import React, { Fragment, Component } from 'react';

import GrafikStavka from './GrafikStavka.js';

import { dataPredmetPoGodini } from '../../api.js';

class PrisustvoPoPredmetu extends Component {
    constructor(){
        super();
        this.state = {
            data: null
        };
    }
    componentDidMount(){
        let { predmetId, godinaId } = this.props.match.params;
        dataPredmetPoGodini.get(predmetId, godinaId, "Prisustvo").then( data => {
            this.setState({
                data: data
            });
        })
    }
    render(){
        return (this.state.data ? 
            <GrafikStavka
                data={this.state.data}
                nazivStavke='Prisustvo'
                tipGrafika='Bar'
            /> :
            "loading...")
    }
}

export default PrisustvoPoPredmetu;
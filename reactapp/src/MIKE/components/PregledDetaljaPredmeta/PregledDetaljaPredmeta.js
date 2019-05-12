import React, {Component, Form} from 'react';
import { Fragment } from 'react';

class PregledDetaljaPredmeta extends Component {
    constructor() {
        super();
        let predmeti=["PIS", "OOAD", "SI"];
        let odabran_predmet=null;
        if (predmeti.length>0) odabran_predmet=predmeti[0];

        this.state = {
            predmeti:predmeti,
            odabran_predmet:odabran_predmet
        };

        
    }

   

    prebaciNaDrugi(a) {
        this.setState({ odabran_predmet: a.target.value });
    }


    render() {
        return(
            
            <form id="predmeti">
                <label>Svi predmeti na kojim ste asistent </label>
                <br/>
                <select type="select" id="listaPredmeta" onChange={this.prebaciNaDrugi.bind(this)} value={this.state.odabran_predmet}>
                    
                    {this.state.predmeti.map((predmet) => {
                        return (<option key={predmet.id} value={predmet.id}>{predmet.naziv}</option>)
                        })
                    }
                </select>
                <br/>
                
            </form>
            
        );
    }

}

export default PregledDetaljaPredmeta;
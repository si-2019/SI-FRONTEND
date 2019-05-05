import React, {Component} from 'react'; 

var sviProjektiTrenutnogUsera=['Projekat1', 'Projekat2'];

class PregledListeProjekata extends Component {
    constructor() {
        super();
        this.state = { projekti:[], postoje_projekti:false };
    }

    componentDidMount() {
        //let proj=sviProjektiTrenutnogUsera().projekti;
        var sviProjektiTrenutnogUsera=['Projekat1', 'Projekat2'];
        let proj=sviProjektiTrenutnogUsera;
        this.setState({projekti:proj});
        if (proj.length != null) this.setState({ postoje_projekti:true});
    }

    kreirajTabelu() {
        return(
            <table id="tabelaProjekata">
                <thead>
                    <tr>
                        <th>Naziv projekta</th>
                        <th>Opis projekta</th>
                    </tr>
                </thead>
                <tbody>
                    { 
                        this.state.postoje_projekti != false ? 
                        this.state.projekti.map((projekti) => {
                            return (
                                <tr>
                                    <td>{projekti}</td>
                                    <td>{}</td>
                                </tr>
                            )
                        }):""
                    }
                    
                </tbody>
            </table>
        );
    }

    render() {
        return(  
            <div>
                <label>Svi projekti:</label>
                {this.kreirajTabelu()}
            </div>
           
        );
    }
}
export default PregledListeProjekata;

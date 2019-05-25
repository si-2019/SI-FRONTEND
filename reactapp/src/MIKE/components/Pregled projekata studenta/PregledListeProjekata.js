import React, {Component} from 'react'; 
import ListaZadataka from './PrikazListeZadataka';

var sviProjektiTrenutnogUsera=['Projekat1', 'Projekat2'];

class PregledListeProjekata extends Component {
    constructor() {
        super();
        this.state = { projekti:[], postoje_projekti:false, lista:false };
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
                                    <td onClick={()=>{this.setState((state)=>({projekti:state.projekti,postoje_projekti:state.postoje_projekti,lista:true}))}}>{projekti}</td>
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
        if(!this.state.lista)
        return(  
            <div>
                <label>Svi projekti:</label>
                {this.kreirajTabelu()}
            </div>
        );
        else return(
            <div>
                <label>Svi projekti:</label>
                {this.kreirajTabelu()}
                <ListaZadataka/>
            </div>
        );
    }
}
export default PregledListeProjekata;

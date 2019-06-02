import React, { Component, Fragment } from 'react';
import { Form, Label } from 'reactstrap';
import './bootstrapflatly.css';
import IzborVodje from './FormaZaIzborVodje';
import InterfejsUredjivanjeClanovaGrupe from './InterfejsUredjivanjeClanovaGrupe';

class BrisanjeClanova extends Component {
    constructor(props){
        super(props);
        this.state={
          forma:"null"
        }
        this.izbrisiClana=this.izbrisiClana.bind(this);
        this.izborVodje=this.izborVodje.bind(this);
        this.uredjivanjeClanova=this.uredjivanjeClanova.bind(this);
    }

        render() {
            if(this.state.forma=="null") {
            return (
                <div className="bs-component"> 
                <h3>Brisanje clanova grupe:</h3>
                <form> 
                <select  className="form-control" style={{width: '400px'}} >
                                        <option  className="list-group-item" value="" selected="selected">Odaberite grupu</option>
                                        <option className="list-group-item" value="grupa1" >Grupa 1</option>
                                        <option className="list-group-item" value="grupa2" >Grupa 2</option>
                                        <option className="list-group-item" value="grupa3" >Grupa 3</option>
                                    </select>
                                    <br/>
                <select  multiple className="form-control" style={{width: '400px'}} >
                 <option  className="list-group-item" value="" selected="selected">Odaberite clana grupe</option>
                 <option className="list-group-item" value="grupa1" >Clan 1</option>
                 <option className="list-group-item" value="grupa2" >Clan 2</option>
                 <option className="list-group-item" value="grupa3" >Clan 3</option>
             </select>
             <br/>
                                    
              <button className="btn btn-primary" onClick={this.uredjivanjeClanova}>Nazad</button>
                 <button className="btn btn-primary" onClick={this.izbrisiClana}>Izbrisi</button>
                 <button className="btn btn-primary" onClick={this.izborVodje}>Dalje</button>

                </form>
                </div>
             );
            }

            else if(this.state.forma=="izborVodje") return (
                    <IzborVodje/>
            )
            else if(this.state.forma=="uredjivanjeClanova") return (
                <InterfejsUredjivanjeClanovaGrupe/>
            )
        }

        izbrisiClana() {
            alert("Izbrisano!");
        }
        izborVodje() {
            this.setState({forma:"izborVodje"});
        }
        uredjivanjeClanova() {
            this.setState({forma:"uredjivanjeClanova"});
        }
}

export default BrisanjeClanova;
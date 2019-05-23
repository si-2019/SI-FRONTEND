import React, {Component} from 'react';
import Komentari from '../Komentar';
import DugmeZaSort from '../DugmeZaSort';
//import LISTA_PROBNA from './LISTA';

const themesApi= 'http://localhost:31919/getComments/'; //plus id teme

class ListaKomentara extends Component {
    constructor() {
        super();
        this.state = {
          komentari:[],
          obrnut: false
        };        
      }
    componentWillMount(){
        this.setState({ucitavanje:true});
        fetch(themesApi+'18') 
          .then(response=>response.json())
          .then(komentari=>this.setState({komentari:komentari,ucitavanje:false}));
       // this.setState({komentari:LISTA_PROBNA,ucitavanje:false});
      }
    promjeniStateNiza (niz, obrnut, vm) {
        let newState = this.state;
        newState = {
          komentari:niz,
          obrnut: obrnut
        }
        this.setState(newState);        
      }
    
      render(){
      
        if(this.state.ucitavanje){
          return <p>Ucitavanje...</p>
        }
          return(
            <div>
              <div>
                <DugmeZaSort 
                  komentari={this.state.komentari} 
                  sortirajNiz={this.promjeniStateNiza.bind(this)}
                  obrnut={this.state.obrnut}
                />
              </div>
              <div>
                <input type='text' class="form-control bg-white rounded" value="Search"></input>
              </div>
            <div>
            <Komentari komentari={this.state.komentari}/>
            </div>
            </div>
          );
      }
}
 
export default ListaKomentara;
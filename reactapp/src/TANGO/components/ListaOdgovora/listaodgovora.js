import React, {Component} from 'react';
import Korisnik from '../Korisnik';
import Komentar from '../Komentar'
import { randomBytes } from 'crypto';
import LISTA_PROBNA from './LISTA'

const themesApi= 'http://localhost:31919/getReplys/'


class Odgovor extends Component {   
    
    render() {
      //  console.log(this.props.komentar.odgovori)
        return (
            this.props.komentar.odgovori.map(odg=>{
                if(odg.idComment==this.props.id) {
                return(
                    <div  class="shadow p-5 mb-5 mt-0 bg-white rounded">
                        <Korisnik key={odg.korisnik.idUser} korisnik={odg.korisnik}/>

                        <div>
                            <p> {odg.text} </p> 
                        </div>
                          <div class="d-flex justify-content-end mr-2">
                            <p> {odg.timeCreated} </p> 
                        </div>
                    </div>

                )
                }
            })
          
        );
    }
}



class ListaOdgovora extends Component {

    constructor() {
        super();
        this.state = {
          komentari:[],
          idComment: ""
        };        
      }
      componentWillMount(){
        this.setState({ucitavanje:true});
        fetch(themesApi+'18') 
          .then(response=>response.json())
          .then(komentari=>this.setState({komentari:komentari,ucitavanje:false, idComment: this.props.idComment}));
     //   this.setState({komentari:LISTA_PROBNA,ucitavanje:false});
      }


render(){
  //  console.log(this.state.komentari);
    return(
        this.state.komentari.map(komentar => {
               return (
                   <div> 
                       <Odgovor key={komentar.idComment} komentar={komentar} id={this.props.idComment}/>
                   </div>
               )
        })
     //   <div>lol</div>
        ); 
    }
}
export default ListaOdgovora;

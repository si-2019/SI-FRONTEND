import React, {Component} from 'react';
import LISTA_TEMA from './LISTA.js';
import {
  withRouter
} from 'react-router-dom'
import { resolve } from 'path';

const themesApi= 'http://localhost:31919/getThemes/'; //plus id teme
const korisnikApi='http://localhost:31919/getUser/'; //plus id korisnika

class Tema extends Component{
  render(){
    
    const {idTeme,idPredmeta, idUser,description,title, timeCreated,brojKomentara}=this.props.tema;
    //const {nazivTeme, slika,korisnickoIme,brojKomentara,datumStvaranja}=this.props.tema;
    return(
    <div>
      <div className='naziv_teme' >
        <p>{title}</p>
        <input  className='stickyDugme' type='button' value="S"/>
      </div>
      <div className='datum_komentari'>
        <p className='brKom' >
            Br. komentara: {brojKomentara}
        </p>
        <p className='datStv'>
            {timeCreated}
        </p>
      </div>  
    </div>  
    );
  }
}

class Korisnik extends Component{
  
  render(){
    const {id,ime,prezime, fotografija}= this.props.korisnik;
    return(
      <div className='slika_ime'>
            <img src={fotografija} />
            <p>{ime}</p>
          </div>
    );
  }
}
class Lista extends Component{
  constructor() {
    super();
    this.state = {
      teme: [],
      ucitvanje:false,
      ucitvanjeKorisnika:false
    };
  }
  componentWillMount(){
    this.setState({ucitvanje:true});
    fetch(themesApi+'1')
      .then(response=>response.json())
      .then(niz=>this.setState({teme:niz,ucitvanje:false}));
  }

  nadjiKorisnika = (idKorisnika) => {
    this.setState({ucitvanjeKorisnika:true});
    fetch(korisnikApi+idKorisnika)
      .then(response=>response.json())
      .then((korisnik)=>{this.setState({ucitvanjeKorisnika:false});resolve(korisnik);});
  }

  
  render(){
    if(this.state.ucitvanje){
      return <p>Ucitavanje...</p>
    }
    return(
      //ovo je lista tema koju dobijemo sa servera
      this.state.teme.map(TEMA =>{
        
        return (
          <div className='tema'>
            
             <div className='slika_ime'>
                {/* <Korisnik korisnik={korisnik}/> */}
              </div>
              <Tema key={TEMA.idTheme} tema={TEMA}/>
          </div>
        );    
        })
      );
  }
}

export default Lista;

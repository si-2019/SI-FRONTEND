import React, {Component} from 'react';
import LISTA_TEMA from './LISTA.js';
import {
  withRouter
} from 'react-router-dom'
class Tema extends Component{
  render(){
    console.log(this.props);
    const {nazivTeme, slika,korisnickoIme,brojKomentara,datumStvaranja}=this.props.tema;
    console.log(nazivTeme);
    return(
      <div className='tema'>
          <div className='slika_ime'>
            <img src={slika} />
            <p>{korisnickoIme}</p>
          </div>
           <div className='naziv_teme' >
                <p>{nazivTeme}</p>
                <input  className='stickyDugme' type='button' value="S"/>
            </div>
              <div className='datum_komentari'>
                <p className='brKom' >
                    Br. komentara: {brojKomentara}
                </p>
                <p className='datStv'>
                    {datumStvaranja}
                </p>
              </div>
      </div>
    );
  }
}
class Lista extends Component{
  render(){
    return(
      //ovo je lista tema koju dobijemo sa servera
      LISTA_TEMA.map(TEMA =>{
          return (<Tema key={TEMA.id} tema={TEMA}/>);  }) 
        )
  }
}

export default withRouter(Lista);

import React, {Component} from 'react';
import LISTA_TEMA from './LISTA.js';
import {
  withRouter
} from 'react-router-dom'
class Tema extends Component{
	constructor() {
          super();
          this.state = {
            povratak:false
          };
          this.sortirajAZ=this.sortirajAZ.bind(this);
          this.sortirajZA=this.sortirajZA.bind(this);
          this.sortirajPoBrojuKomentara=this.sortirajPoBrojuKomentara.bind(this);
          this.sortirajPoDatumuKreiranja=this.sortirajPoDatumuKreiranja.bind(this);
        }
      povratak=false;
      sortirajAZ(){// = evt => {
          LISTA_TEMA.sort(function(a,b){
            var textA = a.nazivTeme.toUpperCase();
            var textB = b.nazivTeme.toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
          });
          console.log(LISTA_TEMA);
      }
      sortirajZA(){
          LISTA_TEMA.sort(function(a,b){
                      var textA = a.nazivTeme.toUpperCase();
                      var textB = b.nazivTeme.toUpperCase();
                      return (textA > textB) ? -1 : (textA < textB) ? 1 : 0;
                    });
          console.log(LISTA_TEMA);
      }
      sortirajPoBrojuKomentara(){
        LISTA_TEMA.sort(function(a,b){
                      var textA = a.brojKomentara
                      var textB = b.brojKomentara
                      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
                    });
        console.log(LISTA_TEMA);
      }
      sortirajPoDatumuKreiranja(){
        LISTA_TEMA.sort(function(a,b){
                      var textA = a.datumStvaranja;
                      var textB = b.datumStvaranja;
                      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
                    });
        console.log(LISTA_TEMA);
      }
  render(){
    console.log(this.props);
    const {nazivTeme, slika,korisnickoIme,brojKomentara,datumStvaranja}=this.props.tema;
    console.log(nazivTeme);
    return(
	  <div className='container'>
	        <button onClick={this.sortirajAZ} class="list-group-item list-group-item-action">Sorziraj A-Z</button>
	        <button onClick={this.sortirajZA} class="list-group-item list-group-item-action">Sorziraj Z-A</button>
	        <button onClick={this.sortirajPoBrojuKomentara} class="list-group-item list-group-item-action">Sorziraj po broju komentara</button>
	        <button onClick={this.sortirajPoDatumuKreiranja} class="list-group-item list-group-item-action">Sorziraj po datumu</button>
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

export default Lista;

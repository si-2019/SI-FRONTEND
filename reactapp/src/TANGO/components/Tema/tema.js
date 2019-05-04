import React, {Component} from 'react';
import Korisnik from '../Korisnik';

class Tema extends Component{
  
    render(){
      
      const {idTeme,idPredmeta, idUser,description,title, timeCreated,brojKomentara}=this.props.tema;
      
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

  class Teme extends Component{
    render(){
      return(
        this.props.teme.map(TEMA => {
          return(
          <div className='tema'>
            <div className='slika_ime'>
              <Korisnik key={TEMA.korisnik.id} korisnik={TEMA.korisnik}/>
            </div>
            <Tema key={TEMA.idTheme} tema={TEMA}/>
          </div>
          );
        })
      );
    }
  }

export default Teme;
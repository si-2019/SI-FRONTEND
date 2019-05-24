import React, {Component} from 'react';
import Korisnik from '../Korisnik';
import OpenDialog from './openDialog';

class Tema extends Component{
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
  }
  
  handleClose() {
    this.setState({ show: false });
    window.location.reload();
  }

  handleShow() {
    this.setState({ show: true });

  }
    render(){
      
      const {idTeme,idPredmeta, idUser,description,title, timeCreated,brojKomentara}=this.props.tema;
    
      return(
        <>
      <div className='shadow-sm p-3 mb-5 bg-light rounded'>
        <div className='naziv_teme' >
          <a className="nav-link" href='#'>{title}</a>
          <input  className='btn btn-primary btn-sm' type='button' value="S"/>
        </div>
        <div className='datum_komentari'>
          <p className='brKom' >
              Br. komentara: {brojKomentara}
          </p>
          <p className='datStv'>
              {timeCreated}
          </p>
        </div> 

        <div class="d-flex flex-row-reverse p-2">
        <button id="deleteBtn" className="btn btn-link" onClick={this.handleShow}> Obrisi </button>
        <OpenDialog key={idTeme} naziv={title} id={this.props.tema.idTheme} show={this.state.show} close={this.handleClose}/>
        </div>
      </div>  
      </>
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
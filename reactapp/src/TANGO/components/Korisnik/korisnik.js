import React, {Component} from 'react';

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
  
export default Korisnik;
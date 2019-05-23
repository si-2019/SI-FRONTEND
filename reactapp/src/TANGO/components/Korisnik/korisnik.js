import React, {Component} from 'react';

class Korisnik extends Component{

    render(){
      const {id,ime,prezime, fotografija}= this.props.korisnik;
    
      var data = fotografija;

      const Example = ({ data }) => <img style={{width:"60px", height:"60px"}} src={`${data}`} />

      return(
        <div className='slika_ime'>
                            <Example data={data} />
              <p>{ime}</p>
            </div>
      );
    }
  }
  
export default Korisnik;
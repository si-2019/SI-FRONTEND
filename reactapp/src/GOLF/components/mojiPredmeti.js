import React, { Component } from 'react';
import axios from 'axios';
import SviPredmeti from './SviPredmeti';

class mojiPredmeti extends Component {

  state={
    korisnik:this.props.match.params.idKorisnika,
    mojiPredmeti: [],
    predmeti: []
  }

  componentDidMount(){
    axios.get(`http://localhost:31907/r1/uloga/${this.state.korisnik}`).then(res => {
      const uloga = res.data;
      axios.get(`http://localhost:31907/r1/mojiPredmeti/${this.state.korisnik}`).then(res2 =>{
        axios.get(`http://localhost:31907/r1/dajPredmeteZaNastavniAnsambl/${this.state.korisnik}?uloga=${uloga.uloga}`).then(res3 =>{
          this.setState({
            mojiPredmeti: res2.data.predmeti,
            predmeti: res3.data.predmeti
          });
        })
      })
    })
  }

  render() {
     return (      
        <div id='mojiPredmeti'>
            <h1>Moji predmeti</h1>
            <SviPredmeti predmeti={this.state.predmeti}/>
            <SviPredmeti predmeti={this.state.mojiPredmeti}/>
        </div>
    );
  }
}

export default mojiPredmeti;
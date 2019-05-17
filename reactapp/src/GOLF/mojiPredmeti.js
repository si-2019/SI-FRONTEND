import React, { Component } from 'react';
import axios from 'axios';
import SviPredmeti from './SviPredmeti';
import PropTypes from 'prop-types';

class mojiPredmeti extends Component {

  state={
    korisnik: 1,
    predmeti:[],
  }

  componentDidMount(){
    axios.get(`http://localhost:31907/r1/uloga/${this.state.korisnik}`).then(res => {
      const uloga = res.data;
      axios.get(`http://localhost:31907/r1/mojiPredmeti/${this.state.korisnik}?uloga=${uloga.uloga}`).then(res2 =>{
          const predmeti = res2.data;
          this.setState({
            predmeti:predmeti
          });
      })
    })
  }

  render() {
     return (
      
        <div>
            <h1>Moji predmeti</h1>
            <SviPredmeti predmeti={this.state.predmeti} />
        </div>
    );
  }
}

export default mojiPredmeti;
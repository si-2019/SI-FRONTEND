import React, { Component } from 'react';
import './style.css';

import axios from 'axios'; 
class Rezultati extends Component {
  state= {
    imeKreator: '', 
    datumKreiranjaAnkete: '',
    datumIstekaAnkete: '', 
    tipAnkete: '', 
    nazivPredmeta: '',
    singleChoicePitanjaState: {},
    textboxPitanjaState: {}

  }
   formatDate (string) {
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(string).toLocaleDateString([],options);
}
  componentDidMount() {
    const { match: { params } } = this.props;
    axios.get(`http://localhost:9123/getKreator/?idAnketa=${params.id}`)
    .then((res) => {
      this.setState({imeKreator:res.data.kreator}); 
      console.log('res1', res);
    });
    axios.get(`http://localhost:9123/getDatumKreiranjaAnkete/?idAnketa=${params.id}`)
    .then((res) => {
      
      this.setState({datumKreiranjaAnkete:this.formatDate(res.data.datumKreiranja)}); 
      console.log('res2', res);
    });
    axios.get(`http://localhost:9123/getDatumIstekaAnkete/?idAnketa=${params.id}`)
    .then((res) => {
      
      this.setState({datumIstekaAnkete:this.formatDate(res.data.datumIstekaAnkete)}); 
      console.log('res3', res);
    });
    axios.get(`http://localhost:9123/getTipAnkete/?idAnketa=${params.id}`)
    .then((res) => {
      
      this.setState({tipAnkete:res.data.tipAnkete}); 
      console.log('res4', res);
    });
    axios.get(`http://localhost:9123/getPredmet/?idAnketa=${params.id}`)
    .then((res) => {
      
      this.setState({nazivPredmeta:res.data.nazivPredmeta}); 
      console.log('res5', res);
    });
    axios.get(`http://localhost:9123/getRezultatiAnkete/?idAnketa=${params.id}`)
    .then((res) => {
      var pitanja = res.data;
      var textboxPitanja = [];
      var singleChoicePitanja = [];
      for(var i=0;i<pitanja.length;i++){
        if(pitanja[i].vrstaPitanja == 'textbox') textboxPitanja.push(pitanja[i]);
        else if(pitanja[i].vrstaPitanja == 'single-choice') singleChoicePitanja.push(pitanja[i]);
      }
      this.setState({singleChoicePitanjaState: {singleChoicePitanja}});
      this.setState({textboxPitanjaState: {textboxPitanja}});
      console.log('single', singleChoicePitanja);
      console.log('res6', res);
    });
  }
  render() {
    const itemsSingle = this.state.singleChoicePitanjaState;
    console.log("items", itemsSingle);
    return (
      <div className="App"  id="container">

        <div id="header">
        <h1>Rezultati</h1>
        </div>       

        <div id="content">

            <div id="info">
              <div id ="info1">

                <div class="card text-white bg-secondary mb-3" >
                            <div class="card-header"><h4 class="card-title">Info</h4></div>
                            <div class="card-body">
                              <h6 class="card-title">Predmet</h6>
                              <p class="card-text">Osnove Elektrotehnike</p>
                            </div>
                            <div class="card-body">
                              <h6 class="card-title">Datum kreiranja</h6>
                              <p class="card-text">{this.state.datumKreiranjaAnkete}</p>
                            </div>
                            <div class="card-body">
                              <h6 class="card-title">Datum isteka ankete</h6>
                              <p class="card-text">{this.state.datumIstekaAnkete}</p>
                            </div>
                            <div class="card-body">
                              <h6 class="card-title">Tip ankete</h6>
                              <p class="card-text">{this.state.tipAnkete}</p>
                            </div>
                            <div class="card-body">
                              <h6 class="card-title">Predmet</h6>
                              <p class="card-text">{this.state.nazivPredmeta}</p>
                            </div>
                            <div class="card-body">
                              <h6 class="card-title">Anketu kreirao</h6>
                              <p class="card-text">{this.state.imeKreator}</p>
                            </div>
                </div>

              </div>        
            </div>

            <div id="show">
              <div id="show1">

                <div class="card border-light mb-3" style={{padding:15, alignItems:'right'}}>
                  <div class="card-header"><h4 class="card-title">Anketa</h4></div>
                    <br></br>
                    <div>
                      {itemsSingle.singleChoicePitanja ? itemsSingle.singleChoicePitanja.map(pitanje => (
                        <div class="card-body" style={{backgroundColor:'white'}}>
                          <h6 class="card-title">Pitanje : {pitanje.tekstPitanja}</h6>
                          <br></br>
                          <p class="card-text">Prosjecan odgovor : {pitanje.prosjecniOdgovor}</p>
                          <br></br>
                          <div>
                            {pitanje.odgovori ? pitanje.odgovori.map(odgovor => (
                              <div>
                                <p class="card-text">Odgovor : {odgovor.odgovor}</p>
                                <p class="card-text">Postotak ovih odgovora : {odgovor.postotak} %</p>
                                <br></br>
                              </div>
                            )) : "..."}
                          </div>
                          <br></br>
                        </div>
                      )) : "Loading..."}
                    </div>
                </div>

              </div>
            </div>

        </div>
      </div>
    );
  }
}

export default Rezultati;



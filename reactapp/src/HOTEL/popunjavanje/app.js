import React, { Component } from 'react';
import './style.css';
import Countdown from './Countdown'

import axios from 'axios'; 
class Popunjavanje extends Component {
  constructor (props) {
    super(props);
}

  state= {
    imeKreator: '', 
    datumKreiranjaAnkete: '', 
    datumIstekaAnkete:'', 
    tipAnkete:'', 
    nazivPredmeta:'',
    isteklo:false

  }
   formatDate (string) {
    var options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    return new Date(string).toLocaleDateString([],options);
}
handler() {
  this.setState({ isteklo: true});
}
  componentDidMount() {
    const { match: { params } } = this.props;
    axios.get(`http://localhost:9123/getKreator/?idAnketa=${params.id}`)
    .then((res) => {
      this.setState({imeKreator:res.data.kreator}); 
      console.log('res', res);
    });
    axios.get(`http://localhost:9123/getDatumKreiranjaAnkete/?idAnketa=${params.id}`)
    .then((res) => {
      
      this.setState({datumKreiranjaAnkete:this.formatDate(res.data.datumKreiranja)}); 
      console.log('res', res);
    });
    axios.get(`http://localhost:9123/getDatumIstekaAnkete/?idAnketa=${params.id}`)
    .then((res) => {
      console.log("datum1", new Date())
      console.log("datum2", new Date(res.data.datumIstekaAnkete))
      console.log("datum3", res.data.datumIstekaAnkete)
      this.setState({datumIstekaAnkete:res.data.datumIstekaAnkete}); 
    });
    axios.get(`http://localhost:9123/getTipAnkete/?idAnketa=${params.id}`)
    .then((res) =>{
      this.setState({tipAnkete:res.data.tipAnkete}); 
    });
    axios.get(`http://localhost:9123/getPredmet/?idAnketa=${params.id}`)
    .then((res) =>{
      this.setState({nazivPredmeta:res.data.nazivPredmeta}); 
    });
  }

  render() {
    return (
      <div className="App"  id="container">
        <div id="header">
        <h1>Popunjavanje</h1>
        </div>        
        <div id="content">
         <div id="info" >
         <div id ="info1" >
         <div class="card text-white bg-secondary mb-3" >
            <div class="card-header"><h4 class="card-title">Info</h4></div>
            <div class="card-body">
              <h6 class="card-title">Predmet</h6>
              <p class="card-text">{this.state.nazivPredmeta}</p>
            </div>
            <div class="card-body">
              <h6 class="card-title">Datum kreiranja</h6>
              <p class="card-text">{this.state.datumKreiranjaAnkete}</p>
            </div>
            <div class="card-body">
              <h6 class="card-title">Preostalo još </h6>
              <Countdown action={this.handler.bind(this)}   date={this.state.datumIstekaAnkete}/>
            </div>
            <div class="card-body">
              <h6 class="card-title">Tip ankete</h6>
              <p class="card-text">{this.state.tipAnkete}</p>
            </div>
            <div class="card-body">
              <h6 class="card-title">Anketu kreirao</h6>
              <p class="card-text">{this.state.imeKreator}</p>
            </div>
          </div>
         </div>
          </div>
          <div id="show" >
          <div id ="show1" >
          <div class="card border-light mb-3" style={{padding:15, alignItems:'right'}}>
              <div class="card-header"><h4 class="card-title">Anketa</h4></div>
              <div class="card-body" style={{backgroundColor:'white'}}>
                <h6 class="card-title">Pitanje1</h6>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
              <div class="card-body" style={{backgroundColor:'  #f2f2f2'}}>
                <h6 class="card-title">Pitanje2</h6>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
              <div class="card-body" style={{backgroundColor:'white'}}>
                <h6 class="card-title">Pitanje3</h6>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
              <div >
              <button disabled={this.state.isteklo} type="button" class="btn btn-secondary float-right"  id="button">Pošalji</button>
              </div>             
            </div>
          </div>        
          </div>         
        </div>
      </div>
    
    );
  }
}

export default Popunjavanje;



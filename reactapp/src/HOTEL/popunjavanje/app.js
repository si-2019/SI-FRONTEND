import React, { Component } from 'react';
import './style.css';
import Countdown from './Countdown'
import axios from 'axios';
import url from '../url'
class Popunjavanje extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    imeKreator: '',
    datumKreiranjaAnkete: '',
    datumIstekaAnkete: '',
    tipAnkete: '',
    nazivPredmeta: '',
    isteklo: false,
    pitanja: [],
    odgovori: [],
  }
  formatDate(string) {
    var options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    return new Date(string).toLocaleDateString([], options);
  }
  handler() {
    this.setState({ isteklo: true });
  }
  componentDidMount() {
    const { match: { params } } = this.props;
    axios.get(`http://localhost:9123/getKreator/?idAnketa=${params.id}`)
      .then((res) => {
        this.setState({ imeKreator: res.data.kreator });
        console.log('res', res);
      });
    axios.get(`http://localhost:9123/getDatumKreiranjaAnkete/?idAnketa=${params.id}`)
      .then((res) => {
        this.setState({ datumKreiranjaAnkete: this.formatDate(res.data.datumKreiranja) });
        console.log('res', res);
      });
    axios.get(`http://localhost:9123/getDatumIstekaAnkete/?idAnketa=${params.id}`)
      .then((res) => {
        console.log("datum1", new Date())
        console.log("datum2", new Date(res.data.datumIstekaAnkete))
        console.log("datum3", res.data.datumIstekaAnkete)
        this.setState({ datumIstekaAnkete: res.data.datumIstekaAnkete });
      });
    axios.get(`http://localhost:9123/getTipAnkete/?idAnketa=${params.id}`)
      .then((res) => {
        this.setState({ tipAnkete: res.data.tipAnkete });
      });
    axios.get(`http://localhost:9123/getPredmet/?idAnketa=${params.id}`)
      .then((res) => {
        this.setState({ nazivPredmeta: res.data.nazivPredmeta });
      });
    axios.get(`http://localhost:9123/getAnketa/?id=${params.id}`)
      .then((res) => {
        const pit = [];
        for (let key in res.data) {
          pit.push(res.data[key])
        };
        this.setState({ pitanja: pit });
      });
  }

  popunianketu() {
    const { match: { params } } = this.props;
    console.log("asdasd", params)
    fetch(url + '/popuniAnketu', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        idAnketa: params.id,
        odgovori: this.state.odgovori,
        idPopunio: 273,
        vrijemePopunjavanja: new Date().toISOString().slice(0, 19).replace('T', ' '),
      })
    }).then((res, err) => {
      if (res.status === 200) {

      }
      this.setState({
        error: err
      })
    })
  }
  handleChange(idPitanja, textOdgovora, idPonudjeniOdgovor = null) {
    if (textOdgovora.target !== undefined) { textOdgovora = textOdgovora.target.value; }
    const odgovor = { idPitanja: idPitanja, tekstOdgovora: textOdgovora, idPonudjeniOdgovor: idPonudjeniOdgovor }
    var nema = false;
    for (let i = 0; i < this.state.odgovori.length; i++) {
      if (this.state.odgovori[i].idPitanja === idPitanja) {
        nema = true;
        this.setState(state => {
          const odgovori = state.odgovori.map((item) => {
            if (item.idPitanja === idPitanja) {
              return odgovor;
            } else {
              return item;
            }
          });
          return {
            odgovori,
            imeKreator: state.imeKreator,
            datumKreiranjaAnkete: state.datumKreiranjaAnkete,
            datumIstekaAnkete: state.datumIstekaAnkete,
            tipAnkete: state.tipAnkete,
            nazivPredmeta: state.nazivPredmeta,
            isteklo: state.isteklo,
            pitanja: state.pitanja,
          };
        });
      }
    }
    if (!nema) {
      this.setState(state => {
        const odgovori = state.odgovori.concat(odgovor);
        return {
          odgovori,
          imeKreator: state.imeKreator,
          datumKreiranjaAnkete: state.datumKreiranjaAnkete,
          datumIstekaAnkete: state.datumIstekaAnkete,
          tipAnkete: state.tipAnkete,
          nazivPredmeta: state.nazivPredmeta,
          isteklo: state.isteklo,
          pitanja: state.pitanja,
        };
      });
    }
  }
  render() {
    const pitanjaa = [];
    for (const [index, value] of this.state.pitanja.entries()) {

      pitanjaa.push(
        <div key={index} class="card-body" style={index % 2 === 0 ? { backgroundColor: 'white' } : { backgroundColor: '#f2f2f2' }}>
          <h6 class="card-title">{value.tekstPitanja}</h6>
          {value.vrstaPitanja === 'single-choice' ?
            <div>
              {value.odgovori.map((v, i) => {
                return <div key={v.id}>
                  <div class="custom-control custom-radio">
                    <input type="radio" id={v.id} name={value.idPitanja} class="custom-control-input" onChange={() => this.handleChange(value.idPitanja, v.textOdgovora, v.id)} />
                    <label class="custom-control-label" htmlFor={v.id}>{v.textOdgovora}</label>
                  </div>
                </div>
              })}
            </div> : value.vrstaPitanja === 'inputText' ?
              <div class="form-group">
                <textarea class="form-control" id="exampleTextarea" rows="3" value={this.state.input} onChange={(e) => this.handleChange(value.idPitanja, e)}></textarea>
              </div>
              : <p class="card-text">Some.</p>

          }
        </div>
      )
    }
    return (
      <div className="App" id="container">
        <div id="header">
          <h1>Popunjavanje</h1>
        </div>
        <div id="content">
          <div id="info" >
            <div id="info1" >
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
                  <Countdown action={this.handler.bind(this)} date={this.state.datumIstekaAnkete} />
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
            <div id="show1" >
              <div class="card border-light mb-3" style={{ padding: 15, alignItems: 'right' }}>
                <div class="card-header"><h4 class="card-title">Anketa</h4></div>
                {pitanjaa}
                <div >
                  <button onClick={() => this.popunianketu()} type="button" class="btn btn-secondary float-right" id="button">Pošalji</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    );
  }
}
export default Popunjavanje;
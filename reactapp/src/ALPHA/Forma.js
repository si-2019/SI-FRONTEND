import React, {Component} from 'react'
import './app.js'
//import { postRequest } from './actions/post';


class Forma extends Component {
    constructor(props) {
        super(props)
  
        this.initialState = {
          ime: '',
          prezime: '',
          index: '',
          datum: '',
          jmbg: '',
          email: '',
          mjesto: '',
          kanton: '',
          drzavljanstvo: '',
          telefon: '',
          zensko: '',
          musko: '',
          imePrezimeOca: '',
          imePrezimeMajke: '',
          adresa: '',
          spol: 'zensko'
        }
    
        this.state = this.initialState
      }

      handleChange = (event) => {
        event.preventDefault()
        this.setState({
          [event.target.name]: event.target.value
        })
      }

//Funkcija za backend
      handleSubmit = (event) =>{
        event.preventDefault()
        const data=this.state
        console.log("Svi potrebni podaci: ", data)
        
        const xhr = new XMLHttpRequest();

        //'http://localhost:31901/api/korisnik/AddNewStudent'
        const body = JSON.stringify(data);
        xhr.open('POST', 'https://si2019alpha.herokuapp.com/api/korisnik/AddNewStudent', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = () => {
          if(xhr.status === 200) {
            const resp = xhr.responseText;
            alert(resp);
          }
        }
        xhr.onerror = () => {
          console.log(xhr.statusText);
        }
        xhr.send(body);        
      
      }
     

      handleOptionChange = changeEvent => {
        this.setState({
          spol: changeEvent.target.value
        });
      };


    render() {
        const { ime, prezime, datum, jmbg, email, mjesto, kanton, drzavljanstvo, telefon, imePrezimeOca, imePrezimeMajke, adresa} = this.state;

        return (
          <div className="card">
          <div className="card-body  col-md-4 col-md-offset-4">
            <form  onSubmit={this.handleSubmit} className="container-fluid">
              <label>Ime </label>
              <input  className="form-control" type="text" name="ime" value={ime} onChange={this.handleChange} /><br />
              
              <label >Prezime </label>
              <input className="form-control" type="text" name="prezime" value={prezime} onChange={this.handleChange}  /><br />

              <label >Datum rođenja </label>
              <input className="form-control " type="date" name="datum" value={datum} onChange={this.handleChange} /><br />
              
              <label>JMBG </label>
              <input className="form-control " type="text" name="jmbg" value={jmbg} onChange={this.handleChange} /><br />

              <label >Email </label>
              <input className="form-control " type="email" name="email" value={email} onChange={this.handleChange} /><br />
              
              <label >Mjesto rođenja </label>
              <input className="form-control " type="text" name="mjesto" value={mjesto} onChange={this.handleChange} /><br />
              
              <label >Kanton </label>
              <input className="form-control " type="text" name="kanton" value={kanton} onChange={this.handleChange} /><br />
              
              <label>Državljanstvo </label>
              <input className="form-control " type="text" name="drzavljanstvo" value={drzavljanstvo} onChange={this.handleChange} /><br />

              <label >Telefon </label>
              <input className="form-control " type="tel" name="telefon" value={telefon} onChange={this.handleChange} /><br />
              
              <label className="radio-inline">Spol </label>
              <div className="custom-control custom-radio">
                <input id="1" className="custom-control-input" type="radio" value="zensko" onChange={this.handleOptionChange} checked={this.state.spol === "zensko"}/> 
                <label class="custom-control-label" for="1">Žensko</label>
              </div>
              <div className="custom-control custom-radio">
                <input id="2" className="custom-control-input" type="radio" value="musko" onChange={this.handleOptionChange} checked={this.state.spol === "musko"}/>
                <label class="custom-control-label" for="2">Muško</label><br/><br/>
              </div>

              <label >Ime i prezime oca </label>
              <input className="form-control " type="text" name="imePrezimeOca" value={imePrezimeOca} onChange={this.handleChange} /><br />
            
              <label >Ime i prezime majke </label>
              <input className="form-control " type="text" name="imePrezimeMajke" value={imePrezimeMajke} onChange={this.handleChange} /><br />
              
              <label>Adresa </label>
              <input className="form-control" type="text" name="adresa" value={adresa} onChange={this.handleChange} /><br />
              
              
              <input type="submit" value="Dodaj" className="btn btn-primary btn-block" />
    </form>
    </div>
    </div>
        );
    }
}

export default Forma


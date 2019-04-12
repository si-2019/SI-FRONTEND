import React, {Component} from 'react'

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
          spol: '',
          roditelj: '',
          adresa: ''
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
        alert('Registrovan je korisnik: ', data.ime)
      }
     

    render() {
        const { ime, prezime, index, datum, jmbg, email, mjesto, kanton, drzavljanstvo, telefon, spol, roditelj, adresa } = this.state;

        return (
            <form  onSubmit={this.handleSubmit} className="container-fluid">
              <label className="col-md-3">Ime </label>
              <input type="text" name="ime" value={ime} onChange={this.handleChange}/><br />
              
              <label className="col-md-3">Prezime </label>
              <input type="text" name="prezime" value={prezime} onChange={this.handleChange} /><br />

              <label className="col-md-3">Index </label>
              <input type="text" name="index" value={index} onChange={this.handleChange} /><br />

              <label className="col-md-3">Datum rođenja </label>
              <input type="date" name="datum" value={datum} onChange={this.handleChange} /><br />
              
              <label className="col-md-3">JMBG </label>
              <input type="text" name="jmbg" value={jmbg} onChange={this.handleChange} /><br />

              <label className="col-md-3">Email </label>
              <input type="email" name="email" value={email} onChange={this.handleChange} /><br />
              
              <label className="col-md-3">Mjesto rođenja </label>
              <input type="text" name="mjesto" value={mjesto} onChange={this.handleChange} /><br />
              
              <label className="col-md-3">Kanton </label>
              <input type="text" name="kanton" value={kanton} onChange={this.handleChange} /><br />
              
              <label className="col-md-3">Državljanstvo </label>
              <input type="text" name="drzavljanstvo" value={drzavljanstvo} onChange={this.handleChange} /><br />

              <label className="col-md-3">Telefon </label>
              <input type="tel" name="telefon" value={telefon} onChange={this.handleChange} /><br />
              
              <label className="col-md-3">Spol </label>
              <input type="text" name="spol" value={spol} onChange={this.handleChange} /><br />
              
              <label className="col-md-3">Ime i prezime roditelja </label>
              <input type="text" name="roditelj" value={roditelj} onChange={this.handleChange} /><br />
              
              <label className="col-md-3">Adresa </label>
              <input type="text" name="adresa" value={adresa} onChange={this.handleChange} /><br />
              
              
              <input type="submit" value="Submit" className="btn btn-success" />
    </form>
        );
    }
}

export default Forma
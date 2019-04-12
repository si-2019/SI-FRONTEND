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
          <div className="col-md-4 col-md-offset-4">
            <form  onSubmit={this.handleSubmit} className="container-fluid">
              <label className="col-md-3">Ime </label>
              <input  className="form-control " type="text" name="ime" value={ime} onChange={this.handleChange}/><br />
              
              <label className="col-md-3">Prezime </label>
              <input className="form-control " type="text" name="prezime" value={prezime} onChange={this.handleChange} /><br />

              <label className="col-md-3">Index </label>
              <input className="form-control " type="text" name="index" value={index} onChange={this.handleChange} /><br />

              <label >Datum rođenja </label>
              <input className="form-control " type="date" name="datum" value={datum} onChange={this.handleChange} /><br />
              
              <label className="col-md-3">JMBG </label>
              <input className="form-control " type="text" name="jmbg" value={jmbg} onChange={this.handleChange} /><br />

              <label className="col-md-3">Email </label>
              <input className="form-control " type="email" name="email" value={email} onChange={this.handleChange} /><br />
              
              <label className="col-md-3">Mjesto rođenja </label>
              <input className="form-control " type="text" name="mjesto" value={mjesto} onChange={this.handleChange} /><br />
              
              <label className="col-md-3">Kanton </label>
              <input className="form-control " type="text" name="kanton" value={kanton} onChange={this.handleChange} /><br />
              
              <label className="col-md-3">Državljanstvo </label>
              <input className="form-control " type="text" name="drzavljanstvo" value={drzavljanstvo} onChange={this.handleChange} /><br />

              <label className="col-md-3">Telefon </label>
              <input className="form-control " type="tel" name="telefon" value={telefon} onChange={this.handleChange} /><br />
              
              <label className="col-md-3">Spol </label>
              <input className="form-control " type="text" name="spol" value={spol} onChange={this.handleChange} /><br />
              
              <label >Ime i prezime roditelja </label>
              <input className="form-control " type="text" name="roditelj" value={roditelj} onChange={this.handleChange} /><br />
              
              <label className="col-md-3">Adresa </label>
              <input className="form-control" type="text" name="adresa" value={adresa} onChange={this.handleChange} /><br />
              
              
              <input type="submit" value="Submit" className="btn btn-success btn-block" />
    </form>
    </div>
        );
    }
}

export default Forma
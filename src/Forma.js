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
        const xhr = new XMLHttpRequest();

        const body = JSON.stringify(data);
        xhr.open('POST', 'http://localhost:53026/api/korisnik/AddNewStudent', true);
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
      
        // alert('Registrovan je korisnik: ', data.ime)
      }
     

    render() {
        const { ime, prezime, index, datum, jmbg, email, mjesto, kanton, drzavljanstvo, telefon, spol, roditelj, adresa } = this.state;

        return (
          <div className="col-md-4 col-md-offset-4" >
            <form  onSubmit={this.handleSubmit} className="container-fluid">
              <label >Ime </label>
              <input  className="form-control" type="text" name="ime" value={ime} onChange={this.handleChange} /><br />
              
              <label >Prezime </label>
              <input className="form-control" type="text" name="prezime" value={prezime} onChange={this.handleChange}  /><br />

              <label >Index </label>
              <input className="form-control " type="text" name="index" value={index} onChange={this.handleChange}/><br />

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
              
              <label>Spol </label>
              <input className="form-control " type="text" name="spol" value={spol} onChange={this.handleChange} /><br />
              
              <label >Ime i prezime roditelja </label>
              <input className="form-control " type="text" name="roditelj" value={roditelj} onChange={this.handleChange} /><br />
              
              <label>Adresa </label>
              <input className="form-control" type="text" name="adresa" value={adresa} onChange={this.handleChange} /><br />
              
              
              <input type="submit" value="Submit" className="btn btn-success btn-block" />
    </form>
    </div>
        );
    }
}

export default Forma
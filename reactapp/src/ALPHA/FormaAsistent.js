import React, {Component} from 'react'

class FormaAsistent extends Component {
    constructor(props) {
        super(props)
  
        this.initialState = {
          ime: '',
          prezime: '',
          otac: '',
          majka: '',
          jmbg: '',
          titula: '',
          datum_rodjenja: '',
          mjesto_rodjenja: '',
          kanton: '',
          drzavljanstvo: '',
          adresa: '',
          email: '',
          telefon: '',
          odsjek: '',
          linkedin: '',
          website: '',
          spol: '',
          username: '',
          password: '',
          spol: ''
        }
    
        this.state = this.initialState
      }

      handleChange = (event) => {
        event.preventDefault()
        this.setState({
          [event.target.name]: event.target.value
        })
      }

      handleOptionChange = changeEvent => {
        this.setState({
          spol: changeEvent.target.value
        });
      };

//Funkcija za backend
      handleSubmit = (event) =>{
        event.preventDefault()
        const data=this.state
        console.log("Svi potrebni podaci: ", data)

        const body =
        {   
            "odsjek": data.odsjek,
            "ime": data.ime,
            "prezime": data.prezime,
            "datumRodjenja": data.datum_rodjenja,
            "JMBG": data.jmbg,
            "email": data.email,
            "mjestoRodjenja": data.mjesto_rodjenja,
            "kanton": data.kanton,
            "drzavljanstvo": data.drzavljanstvo,
            "telefon": data.telefon,
            "spol": data.spol,
            "imePrezimeMajke": data.majka,
            "imePrezimeOca": data.otac,                        
            "adresa": data.adresa,
            "username": data.username,
            "linkedin": data.linkedin,
            "website": data.website,
            "titula": data.titula
            
            
        };
        
        const xhr = new XMLHttpRequest();

        const body1 = JSON.stringify(body);
        xhr.open('POST', 'http://localhost:31901/api/korisnik/AddNewAssistant', true);
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
        xhr.send(body1); 

      }
     

    render() {
        const { ime, prezime, otac, majka, spol, jmbg, titula, datum_rodjenja, mjesto_rodjenja, kanton, drzavljanstvo, adresa, email, telefon, odsjek, username, linkedin, website} = this.state;

        return (
          <div className="card">
          <div className="card-body  col-md-4 col-md-offset-4">
            <form  onSubmit={this.handleSubmit} className="container-fluid">

              <label>Ime </label>
              <input  className="form-control" type="text" name="ime" value={ime} onChange={this.handleChange} /><br />
              
              <label >Prezime </label>
              <input className="form-control" type="text" name="prezime" value={prezime} onChange={this.handleChange}  /><br />

              <label >Ime i prezime oca</label>
              <input className="form-control " type="text" name="otac" value={otac} onChange={this.handleChange}/><br />

              <label >Ime i prezime majke</label>
              <input className="form-control " type="text" name="majka" value={majka} onChange={this.handleChange}/><br />


              <label className="radio-inline">Spol </label>
              <input id="1" className="custom-control custom-radio" type="radio" value="zensko" onChange={this.handleOptionChange} checked={this.state.spol === "zensko"}/> Žensko
              <input id="2" className="custom-control custom-radio" type="radio" value="musko" onChange={this.handleOptionChange} checked={this.state.spol === "musko"}/>Muško <br/><br/>
              
              <label>JMBG </label>
              <input className="form-control " type="text" name="jmbg" value={jmbg} onChange={this.handleChange} /><br />
              
              <label >Datum rođenja </label>
              <input className="form-control " type="date" name="datum_rodjenja" value={datum_rodjenja} onChange={this.handleChange} /><br />
              
              <label >Mjesto rođenja </label>
              <input className="form-control " type="text" name="mjesto_rodjenja" value={mjesto_rodjenja} onChange={this.handleChange} /><br />
              
              <label>Kanton </label>
              <input className="form-control " type="text" name="kanton" value={kanton} onChange={this.handleChange} /><br />

              <label >Državljanstvo </label>
              <input className="form-control " type="tel" name="drzavljanstvo" value={drzavljanstvo} onChange={this.handleChange} /><br />
              
              <label>Adresa stanovanja </label>
              <input className="form-control " type="text" name="adresa" value={adresa} onChange={this.handleChange} /><br />
              
              <label >Email </label>
              <input className="form-control " type="email" name="email" value={email} onChange={this.handleChange} /><br />              
              
              <label>Telefon </label>
              <input className="form-control " type="tel" name="telefon" value={telefon} onChange={this.handleChange} /><br />

              <label>Odsjek </label>
              <input className="form-control " type="text" name="odsjek" value={odsjek} onChange={this.handleChange} /><br />

              <label>Username </label>
              <input className="form-control " type="text" name="username" value={username} onChange={this.handleChange} /><br />

              <label>Linkedin </label>
              <input className="form-control " type="text" name="linkedin" value={linkedin} onChange={this.handleChange} /><br />

              <label>Website </label>
              <input className="form-control " type="text" name="website" value={website} onChange={this.handleChange} /><br />    
              
              <input type="submit" value="Dodaj" className="btn btn-primary btn-block" />
    </form>
    </div>
    </div>
        );
    }
}

export default FormaAsistent
import React, {Component} from 'react'
import InputMask from 'react-input-mask';

class FormaPr extends Component {
    constructor(props) {
        super(props)
  
        this.initialState = {
          idOdsjek: '',
          idUloga: '3',
          ime: '',
          prezime: '',
          datumRodjenja:'',
          JMBG:'',
          email:'',
          mjestoRodjenja:'',
          kanton: '',
          drzavljanstvo: '',
          telefon: '',
          spol:'',
          imePrezimeMajke:'',
          imePrezimeOca:'',
          adresa:'',
          username: null,
          password: null,
          linkedin:'',
          website:'',
          titula:''
 
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
        console.log("Svi potrebni podaci: ", data);

        const xhr = new XMLHttpRequest();

        const body = JSON.stringify(data);
        console.log("Svi potrebni podaci strng: ", body);
        xhr.open('POST', 'http://localhost:31901/api/korisnik/AddNewProfessor', true);
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
        const {idOdsjek, ime, prezime, datumRodjenja, JMBG, email, mjestoRodjenja, kanton, drzavljanstvo, telefon, spol, imePrezimeMajke, imePrezimeOca, adresa, website, linkedin, titula } = this.state;

        return (
          <div className="col-md-4 col-md-offset-4" >
            <form  onSubmit={this.handleSubmit} className="container-fluid">
              <label >Odsjek </label>
              <input  className="form-control" type="text" name="idOdsjek"  onChange={this.handleChange} /><br />
              <label >Ime </label>
              <input  className="form-control" type="text" name="ime"  onChange={this.handleChange} /><br />
              
              <label >Prezime </label>
              <input className="form-control" type="text" name="prezime"  onChange={this.handleChange}  /><br />
              <label >Datum rođenja </label>
              <input className="form-control " type="date" name="datumRodjenja"  onChange={this.handleChange} /><br />
              <label>JMBG </label>
              <input className="form-control " type="text" name="JMBG"  onChange={this.handleChange} /><br />
              <label >Email </label>
              <input className="form-control " type="email" name="email"  onChange={this.handleChange} /><br />
              <label >Mjesto rođenja </label>
              <input className="form-control " type="text" name="mjestoRodjenja"  onChange={this.handleChange} /><br />
              <label>Kanton </label>
              <input className="form-control " type="text" name="kanton"  onChange={this.handleChange} /><br />

              <label >Državljanstvo </label>
              <input className="form-control " type="tel" name="drzavljanstvo"  onChange={this.handleChange} /><br />
              <label>Telefon </label>
              
              <input className="form-control " type="tel" name="telefon"  onChange={this.handleChange} /><br />
              <label className="radio-inline">Spol </label>
              <input id="1" className="custom-control custom-radio" type="radio" value="zensko" onChange={this.handleOptionChange} checked={this.state.spol === "zensko"}/> Žensko
              <input id="2" className="custom-control custom-radio" type="radio" value="musko" onChange={this.handleOptionChange} checked={this.state.spol === "musko"}/>Muško <br/><br/>
              
              <label >Ime i prezime majke</label>
              <input className="form-control " type="text" name="imePrezimeMajke"  onChange={this.handleChange}/><br />
              <label >Ime i prezime oca</label>
              <input className="form-control " type="text" name="imePrezimeOca"  onChange={this.handleChange}/><br />
              <label >Linkedin</label>
              <input className="form-control " type="text" name="linkedin"  onChange={this.handleChange}/><br /> 
              
              <label >Website</label>
              <input className="form-control " type="text" name="website"  onChange={this.handleChange}/><br />
                       
              <label>Adresa stanovanja </label>
              <input className="form-control " type="text" name="adresa"  onChange={this.handleChange} /><br />
              
              <label >Titula </label>
              <input className="form-control " type="text" name="titula"  onChange={this.handleChange} /><br />
            
              
              <input type="submit" value="Submit" className="btn btn-success btn-block" />
    </form>
    </div>
        );
    }
}

export default FormaPr
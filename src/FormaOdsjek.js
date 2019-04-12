import React, {Component} from 'react'

class FormaOdsjek extends Component {
    constructor(props) {
        super(props)
  
        this.initialState = {
          Naziv: ''
        }
    
        this.state = this.initialState
      }

      handleInputChange = (event) => {
        event.preventDefault()
        this.setState({
          [event.target.name]: event.target.value
        })
      }

//Funkcija za backend
      OnSubmit = (event) =>{
        event.preventDefault()
        const data=this.state
        console.log("Svi potrebni podaci: ", data)
        alert('Registrovan je korisnik: ', data.ime)
      }
     

    render() {
        const { Naziv } = this.state;

        return (
            <form  onSubmit={this.OnSubmit} className="container-fluid">
              <label className="col-md-2">Naziv odsjeka </label>
              <input type="text" name="Naziv" value={Naziv} onChange={this.handleInputChange} /><br />
              
              <input type="submit" value="Upiši" className="btn btn-success" />
            </form>
        );
    }
}

export default FormaOdsjek
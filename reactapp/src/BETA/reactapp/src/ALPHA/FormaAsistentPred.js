import React, {Component} from 'react'

class FormaAsistentPred extends Component {
    constructor(props) {
        super(props)
  
        this.initialState = {
          asistent: '',
          predmet: ''
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
      }
     

    render() {
        const { asistent, predmet } = this.state;

        return (
          <div className="col-md-2">
          
            <form  onSubmit={this.OnSubmit} className="container-fluid">
              <label className="col-md-2">Odaberite asistenta </label>
              <select className="form-control"  name="asistent" value={asistent} onChange={this.handleInputChange}> </select>
              <br />
              
              <label className="col-md-2">Odaberite predmet </label>
              <select className="form-control"  name="predmet" value={predmet} onChange={this.handleInputChange} > </select>
              <br />

        
              
              <input type="submit" value="Dodaj" className="btn btn-success btn-block" />
            </form>
          </div>
        );
    }
}

export default FormaAsistentPred
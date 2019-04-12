import React, {Component} from 'react'

class FormaUpis extends Component {
    constructor(props) {
        super(props)
  
        this.initialState = {
          ciklus: '',
          sem: '',
          tip: '',
          datum: ''
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
        const { ciklus, sem, tip, datum } = this.state;

        return (
            <form  onSubmit={this.OnSubmit} className="container-fluid">
              <label className="col-md-2">Ciklus </label>
              <input type="number" name="ciklus" value={ciklus} onChange={this.handleInputChange} /><br />
              
              <label className="col-md-2">Semestar </label>
              <input type="number" name="sem" value={sem} onChange={this.handleInputChange} /><br />

              <label className="col-md-2">Tip studenta </label>
              <input type="number" name="tip" value={tip} onChange={this.handleInputChange} /><br />

              <label className="col-md-2">Odsjek </label>
              <input type="number" name="datum" value={datum} onChange={this.handleInputChange} /><br />
              
             
              
              <input type="submit" value="Upiši" className="btn btn-success" />
    </form>
        );
    }
}

export default FormaUpis
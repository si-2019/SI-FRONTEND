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
          <div className="col-md-2">
            <form  onSubmit={this.OnSubmit} className="container-fluid">
              <label className="col-md-2">Ciklus </label>
              <input className="form-control" type="number" name="ciklus" value={ciklus} onChange={this.handleInputChange} /><br />
              
              <label className="col-md-2">Semestar </label>
              <input className="form-control" type="number" name="sem" value={sem} onChange={this.handleInputChange} /><br />

              <label >Tip studenta </label>
              <input className="form-control" type="number" name="tip" value={tip} onChange={this.handleInputChange} /><br />

              <label className="col-md-2">Odsjek </label>
              <input className="form-control" type="number" name="datum" value={datum} onChange={this.handleInputChange} /><br />
              
              <input type="submit" value="Upiši" className="btn btn-success btn-block" />
            </form>
          </div>
        );
    }
}

export default FormaUpis
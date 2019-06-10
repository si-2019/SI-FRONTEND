import React, {Component} from 'react'
import axios from 'axios'

const naziviOdsjeka=["RI", "AiE", "EE", "TK"];
const opcije = naziviOdsjeka.map((naziv)=>{ 
  return <option>{naziv}</option>; 
});

class FormaUpis extends Component {
    constructor(props) {
        super(props)
  
        this.initialState = {
          name: '',
          ciklus: '',
          sem: '',
          tip: '',
          odsjek: '', 
          lista: []
        }
    
        this.state = this.initialState
      }

      handleInputChange = (event) => {
        event.preventDefault()
        this.setState({
          [event.target.name]: event.target.value
        })
      }

      componentDidMount(){
        //Promijeniti URL
        //
        axios.get ('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log("Lista: ", response.data);
            this.setState({lista: response.data});     
        })
        . catch (error =>{
            console.log(error)
        })
    }

//Funkcija za backend
      OnSubmit = (event) =>{
        event.preventDefault()
        const data=this.state
        console.log("Svi potrebni podaci: ", data)        
    }
     
    


    render() {
        const { name, ciklus, sem, tip, odsjek } = this.state;

        return (
          
          <div className="col-md-2">
          
            <form  onSubmit={this.OnSubmit} className="container-fluid">
              
              <br />
              <label>Ime i prezime studenta </label>
              <input className="form-control" type="text" name="name" value={name} onChange={this.handleInputChange} /><br />

              <label className="col-md-2">Ciklus </label>
              <input className="form-control" type="number" name="ciklus" value={ciklus} onChange={this.handleInputChange} /><br />
              
              <label className="col-md-2">Semestar </label>
              <input className="form-control" type="number" name="sem" value={sem} onChange={this.handleInputChange} /><br />

              <label >Tip studenta </label>
              <input className="form-control" type="number" name="tip" value={tip} onChange={this.handleInputChange} /><br />

              <label className="col-md-2">Odsjek </label><br />
              <select className="custom-select" name="odsjek" value={odsjek} onChange={this.handleInputChange}>{opcije}</select><br />
              
              
              <input type="submit" value="Upiši" className="btn btn-success btn-block" />
            </form>
          </div>
        );
    }
}

export default FormaUpis


/*<input className="form-control" type="number" name="odsjek" value={odsjek} onChange={this.handleInputChange} /><br />*/
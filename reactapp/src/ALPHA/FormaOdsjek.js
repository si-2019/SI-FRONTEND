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
        
        const xhr = new XMLHttpRequest();

        const body = JSON.stringify(data);

        //Drugi URL
        xhr.open('POST', 'http://localhost:31901/api/odsjek/AddNewOdsjek', true);
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
     

    render() {
        const { Naziv } = this.state;

        return (
          <div className="card">
          <div className="card-body  col-md-4 col-md-offset-4">
            <form  onSubmit={this.OnSubmit} className="container-fluid">
              <label >Naziv odsjeka </label>
              <input className="form-control" type="text" name="Naziv" value={Naziv} onChange={this.handleInputChange} /><br />
              
              <input type="submit" value="Upiši" className="btn btn-success btn-block" />
            </form>
            </div>
          </div>
        );
    }
}

export default FormaOdsjek
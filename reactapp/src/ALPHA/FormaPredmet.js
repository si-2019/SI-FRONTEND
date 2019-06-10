import React, {Component} from 'react'

class FormaPredmet extends Component {
    constructor(props) {
        super(props)
  
        this.initialState = {
          naziv: '',
          ects: '',
          broj_predavanja: '',
          broj_tutorijala: '',
          broj_vjezbi: '',
         
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
        xhr.open('POST', 'http://localhost:31901/api/korisnik/AddProfessor', true);
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
        const { naziv, ects, broj_predavanja, broj_tutorijala, broj_vjezbi } = this.state;

        return (
          <div className="col-md-4 col-md-offset-4" >
            <form  onSubmit={this.handleSubmit} className="container-fluid">
              <label >Naziv predmeta</label>
              <input  className="form-control" type="text" name="naziv" value={naziv} onChange={this.handleChange} /><br />
              
              <label >Broj ECTS kredita </label>
              <input className="form-control" type="number" name="ects"  onChange={this.handleChange}  /><br />

              <label >Broj predavanja</label>
              <input className="form-control" type="number" name="brojPredavanja"  onChange={this.handleChange}  /><br />

              <label >Broj tutorijala</label>
              <input className="form-control " type="number" name="brojTutorijala"  onChange={this.handleChange}/><br />

              <label >Broj vježbi</label>
              <input className="form-control " type="number" name="brojVjezbi"  onChange={this.handleChange}/><br />

            
             
              
              
              <input type="submit" value="Submit" className="btn btn-success btn-block" />
    </form>
    </div>
        );
    }
}

export default FormaPredmet
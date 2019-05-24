import React, {Component} from 'react'
import axios from 'axios'

class Forma extends Component {
    constructor(props) {
        super(props)

        this.state = {
            lista: [],
            selectedValue: '',
            id: '',
            ime: '',
            prezime: '',
            index: '',
            email: '', 
            telefon: '',
            adresa: ''  
        }
       
      }

      componentDidMount(){
        //Promijeniti URL
        //http://localhost:31901/api/korisnik/getAllStudents
        axios.get ('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log("Lista: ", response.data);
            this.setState({lista: response.data});     
        })
        . catch (error =>{
            console.log(error)
        })
    }

    onChange = (e) => {
        var split=e.target.value.split(" - ");     
        //split 0: id, split 1: title 
        this.setState({selectedValue: split[1], id: split[0]})  
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

        xhr.open('POST', 'http://localhost:31901/api/korisnik/updateStudent', true);
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
        const { ime, prezime, email, telefon, adresa, index, lista, selectedValue, id} = this.state;
       
        return (
          
          <div className="col-md-4 col-md-offset-4" >
            <br />
                <p>Prikaz svih studenata: </p><br />
                <select className="custom-select" value={selectedValue} onChange={this.onChange}> 
                {
                  
                    //paziti sta se prikazuje, nece biti list.title!!!
                    //ako je length!=0 prikazati listu, u suprotnom vratiti null
                    lista.length ? lista.map(list => <option key={list.id}>{list.id} - {list.title}</option>): null
                }
                </select><br /><br />
                
                <br />
             
            <form  onSubmit={this.handleSubmit} className="container-fluid">
              <label className="font-weight-bold">ID studenta</label>
              <input className="form-control font-weight-bold" readOnly value={id} /> <br />

              <label>Ime </label>
              <input  className="form-control" type="text" name="ime" value={ime} onChange={this.handleChange} /><br />
              
              <label >Prezime </label>
              <input className="form-control" type="text" name="prezime" value={prezime} onChange={this.handleChange}  /><br />

              <label >Email </label>
              <input className="form-control " type="email" name="email" value={email} onChange={this.handleChange} /><br />

              <label >Telefon </label>
              <input className="form-control " type="tel" name="telefon" value={telefon} onChange={this.handleChange} /><br />
                           
              <label>Adresa </label>
              <input className="form-control" type="text" name="adresa" value={adresa} onChange={this.handleChange} /><br />

              <label>Index </label>
              <input className="form-control" type="text" name="index" value={index} onChange={this.handleChange} /><br />
              
              
              <input type="submit" value="Edit" className="btn btn-success btn-block" />
             </form>
   
    </div>
        );
    }
}

export default Forma


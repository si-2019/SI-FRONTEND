import React, {Component} from 'react'
import axios from 'axios'
import { postRequest } from './actions/post'

class Forma extends Component {
    constructor(props) {
        super(props)

        this.state = {
            lista: [],
            selectedValue: '',
            id: '',
            ime: '',
            prezime: '',
            email: '', 
            telefon: '',
            adresa: '',
            indeks: '' 
        }
       
      }

      componentDidMount(){
        axios.get ('http://localhost:31901/api/korisnik/getAllStudents')
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
        this.setState({
          selectedValue: split[1], id: split[0], ime: split[1], 
          prezime: split[2], email: split[3], telefon: split[4] , adresa: split[5],   indeks: split[6]
         })  
    }


      handleChange = (event) => {
        event.preventDefault()
        this.setState({
          [event.target.name]: event.target.value
        })
      }

      handleSubmit = (event) =>{
        event.preventDefault()
        const data=this.state
        console.log("Svi potrebni podaci: ", data)
        const body = JSON.stringify(data);
       // postRequest(data)
        let config = {
          headers: {
            'Content-Type': "text/plain",
            'Content-Type': "application/json",
            'Access-Control-Allow-Headers': 'Content-Type, Origin, X-Requested-With, Accept, Authorization',
            'Access-Control-Request-Method': 'POST',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true'
          },
          credentials: "include"
        }

        axios.post('http://localhost:31901/api/korisnik/updateStudent', body, config).then(response=>{
          console.log(response)
        }).catch(error=>{
          console.log(error);
        })
        
      /*  const xhr = new XMLHttpRequest();
        const body = JSON.stringify(data);

        console.log(body);
        xhr.open('POST','http://localhost:31901/api/korisnik/updateStudent', true);
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
        xhr.send(body);   */  
      
      }
     
      promote(id){
        const json={id};
        axios.post("http://localhost:31901/api/korisnik/promoteStudentToAssistant", json)
        .then(response=>{
          console.log(response);
        })
        .catch(error=>{
          console.log(error)
        })
      }

    render() {
        const { ime, prezime, email, telefon, adresa, indeks, lista, selectedValue, id} = this.state;
       
        return (
          
          <div className="col-md-4 col-md-offset-4" >
            <br />
                <p>Prikaz svih studenata: </p><br />
                <select className="custom-select" value={selectedValue} onChange={this.onChange}> 
                {
                  lista.length ? lista.map(list => 
                  <option key={list.id}>{list.id} - {list.ime} - {list.prezime} - {list.email} - {list.telefon} - {list.adresa} - {list.indeks}</option>
                  ): null
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

              <label>  indeks </label>
              <input className="form-control" type="text" name="index" value={indeks} onChange={this.handleChange} /><br />
              
              <input type="submit" value="Edit" className="btn btn-success btn-block" />
             </form><br />

             <button className="btn btn-success btn-block" onClick={()=>this.promote(id)}>PROMOTE</button>
   
    </div>
        );
    }
}

export default Forma


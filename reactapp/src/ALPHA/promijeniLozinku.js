import React, {Component} from 'react'

import axios from 'axios'
import { postRequest } from './actions/post'

class promijeniLozinku extends Component {
    constructor(props) {
        super(props)

        this.state = {
            lista: [],
            selectedValue: '',
            id: '',
            username: '',
            password: ''
            
        }
       
      }

      componentDidMount(){
        axios.get ('http://localhost:31901/api/korisnik/getAllProfessors')
        .then(response => {
            console.log("Lista: ", response.data);
            this.setState({lista: response.data});     
        })
        . catch (error =>{
            console.log(error)
        })
    }
  
    onChange = (e) => {
        var split=e.target.value.split(",");     
        this.setState({
          selectedValue: split[1], id: split[0], ime: split[1], prezime:split[2], username:split[3]
         }) 
         if(e.target.value==="Profesor") {
             this.dajProfesore()
         } 
         else if(e.target.value==="Student") {
            this.dajStudente()
         }
         else if (e.target.value==="Asistent") {
            this.dajAsistente()
         }
         else{
             this.dajProfesore();
         }
    }
    onChangeName = (e) => {
        var split=e.target.value.split(",");     
        this.setState({
          selectedValue: split[1], ime: split[0], prezime: split[1], username:split[2]
         }) 
        console.log(split);
    }
     
    dajProfesore() {
        axios.get ('http://localhost:31901/api/korisnik/getAllProfessors')
        .then(response => {
            console.log("Lista: ", response.data);
            this.setState({lista: response.data});     
        })
        . catch (error =>{
            console.log(error)
        })

    }
    dajStudente() {
        axios.get ('http://localhost:31901/api/korisnik/getAllStudents')
        .then(response => {
            console.log("Lista: ", response.data);
            this.setState({lista: response.data});     
        })
        . catch (error =>{
            console.log(error)
        })

    }
    dajAsistente() {
        axios.get ('http://localhost:31901/api/korisnik/getAllAssistants')
        .then(response => {
            console.log("Lista: ", response.data);
            this.setState({lista: response.data});     
        })
        . catch (error =>{
            console.log(error)
        })

    }
 


      handleChange = (event) => {
        event.preventDefault()
        this.setState({
          [event.target.name]: event.target.value
        })
     
      }

     
      promijeni(username){
          if(username!="") {
        axios.get ('http://localhost:31901/api/korisnik/GetNewPassword?username='+username)
        .then(response => {
            console.log("Lista: ", response.data);
            alert("Novi password korisnika je: " + response.data.password);
            this.setState({lista: response.data});     
        })
        . catch (error =>{
            console.log(error)
        })
    }
    else {
        alert("Odaberite korisnika!");
    }
      }
     
     

    render() {
        const { username, lista, selectedValue, id} = this.state;
       
        return (
          
          <div className="col-md-4 col-md-offset-4" >
            <br />

            <p>Uloga korisnika: </p><br />
                <select className="custom-select"  onChange={this.onChange}> 
                
                  
                
                  <option >Profesor </option>
                  <option >Student </option>
                  <option >Asistent </option>

                
                 
                
                </select><br /><br />
                
                <br />
               
                <select className="custom-select"  onChange={this.onChangeName} onLoad={this.onChangeName}> 
                <option value="">Izaberite korisnika</option>
                {
                    
                  lista.length ? lista.map(list => 
                
                  <option key={list.id} value={[list.ime, list.prezime, list.username]}>{list.ime} {list.prezime} </option>
                
                  ): null
                }
                </select><br /><br />
                
                <br />
             
            <form  onSubmit={this.handleSubmit} className="container-fluid">
            

              <label>Username </label>
              <input  className="form-control" type="text" name="username" readOnly value={username} onChange={this.handleChange} /><br />
              
             

              <button className="btn btn-success btn-block" onClick={()=>this.promijeni(username)}>Generisi lozinku</button>

             </form><br />

             
   
    </div>
        );
    }
}

export default promijeniLozinku
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
            naziv: '',
            ects: '',
            brojPredavanja: '', 
            brojVjezbi: '',
            opis: '' 
        }
       
      }

      componentDidMount(){
        axios.get ('http://localhost:31901/api/predmet/GetPredmeti')
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
          selectedValue: split[1], id: split[0], naziv: split[1], ects:split[2], brojPredavanja:split[3], brojVjezbi:split[4], opis:split[5]
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
        const body =
        {  "Id": data.id,
            "naziv": data.naziv,
            "ects": data.ects,
            "brojPredavanja": data.brojPredavanja, 
            "brojVjezbi": data.brojVjezbi,
            "opis": data.opis
            
        };
        
        const xhr = new XMLHttpRequest();
        
        const body1=JSON.stringify(body);
        console.log("Body1: ", body1);

        xhr.open('POST','http://localhost:31901/api/predmet/PromijeniPredmet', true);
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
        xhr.send(body1);   
      
      }
      obrisi(naziv){
        const json={naziv};
        console.log(naziv);
        axios.delete("http://localhost:31901/api/predmet/deleteSubject?naziv="+ naziv)
        .then(response=>{
          console.log(response);
        })
        .catch(error=>{
          console.log(error)
        })
      }
     
     

    render() {
        const { naziv, ects, brojPredavanja, brojVjezbi, opis, lista, selectedValue, id} = this.state;
       
        return (
          
          <div className="col-md-4 col-md-offset-4" >
            <br />
                <p>Prikaz svih predmeta: </p><br />
                <select className="custom-select"  onChange={this.onChange}> 
                {
                  lista.length ? lista.map(list => 
                
                  <option key={list.id} value={[list.id, list.naziv, list.ects, list.brojPredavanja, list.brojVjezbi, list.opis]}>{list.id} - {list.naziv} </option>
                
                  ): null
                }
                </select><br /><br />
                
                <br />
             
            <form  onSubmit={this.handleSubmit} className="container-fluid">
            <label className="font-weight-bold">ID predmeta</label>
              <input className="form-control font-weight-bold" readOnly value={id} /> <br />

              <label>Naziv </label>
              <input  className="form-control" type="text" name="naziv" value={naziv} onChange={this.handleChange} /><br />
              
              <label >Broj ECTS kredita </label>
              <input className="form-control" type="number" name="ects" value={ects} onChange={this.handleChange}  /><br />

              <label >Broj predavanja </label>
              <input className="form-control" type="number" name="brojPredavanja" value={brojPredavanja} onChange={this.handleChange}  /><br />

              <label >Broj vježbi </label>
              <input className="form-control" type="number" name="brojVjezbi" value={brojVjezbi} onChange={this.handleChange}  /><br />
              <label>Opis </label>
              <input className="form-control" type="text" name="opis" value={opis} onChange={this.handleChange} /><br />

              
              <input type="submit" value="Edit" className="btn btn-success btn-block" />
              <button className="btn btn-success btn-block" onClick={()=>this.obrisi(naziv)}>Obrisi predmet</button>
             </form><br />

             
   
    </div>
        );
    }
}

export default Forma
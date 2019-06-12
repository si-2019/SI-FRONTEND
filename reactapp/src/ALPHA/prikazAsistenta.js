import React, {Component} from 'react'
import axios from 'axios'

class prikazAsistenta extends Component{
    constructor(props) {
        super(props)

        this.state = {
          lista: [], 
          search: ''
        }
    }

   

    componentDidMount(param){
      var xhttp = new XMLHttpRequest();
      var self = this;
      
     xhttp.onreadystatechange = function(){
        if (xhttp.readyState == 4 && xhttp.status == 200){
            self.setState({
            lista: JSON.parse(this.response)
          });
        }
      }
    
     if(param!='') xhttp.open("get", "http://localhost:31901/api/korisnik/searchAssistant?ime="+param, true);
     else xhttp.open("get", "http://localhost:31901/api/korisnik/getAllAssistants", true);
     
      xhttp.send();
    }

    handleChange = (e) =>{
      this.setState({
        search:e.target.value
      }) 
    }

    obrisi(id){
      console.log(id);
      axios.delete("http://localhost:31901/api/korisnik/deleteAssistant?id="+id)
      .then(response => {
          console.log(response);    
      })
      . catch (error =>{
          console.log("Error", error)
      })
  }

    render (){
        const {lista, search}=this.state
        console.log("LISTA", lista.length);
        return (
          <div className="card">
            <div className="card-body">
              <br /> 
                <input type="text" className="form-control col-md-2" value={search} onChange={this.handleChange}></input>  <br />
                <button className="btn btn-primary btn-block col-md-2" onClick={()=> this.componentDidMount(search)}>Pretraži</button>
              <br />
              
                
              <table>  
                <thead className="table table-sm table-primary">
                  <tr>
                      <th >ID</th>
                      <th >IME</th>
                      <th >PREZIME</th>
                      <th >IME RODITELJA</th>
                      <th >SPOL</th>
                      <th >JMBG</th>
                      <th >DATUM ROĐENJA</th>
                      <th >MJESTO ROĐENJA</th>
                      <th >KANTON</th>
                      <th >DRŽAVLJANSTVO</th>
                      <th >EMAIL</th>
                      <th >TELEFON</th>
                      <th >USERNAME</th>
                      <th >TITULA</th>
                      <th >WEBSITE</th>
                      <th>OBRIŠI</th>
                  </tr>
                </thead>
                <tbody className="table table-sm">
                {
                    lista.length ? lista.map(list => 
                        <tr key={list.id}>
                            <th>{list.id}</th>
                            <th>{list.ime}</th>
                            <th>{list.prezime}</th>
                            <th>
                              {list.imePrezimeMajke} <br />
                              {list.imePrezimeOca}
                            </th>
                            <th>{list.spol}</th>
                            <th>{list.JMBG}</th>
                            <th>{list.datumRodjenja}</th>
                            <th>{list.mjestoRodjenja}</th>
                            <th>{list.kanton}</th>
                            <th>{list.drzavljanstvo}</th>
                            <th>{list.email}</th>
                            <th>{list.telefon}</th>
                            <th>{list.username}</th>
                            <th>{list.titula}</th>
                            <th>{list.website}</th>
                            <th><button className="btn btn-primary btn-block"  onClick={()=>this.obrisi(list.id)}>Obriši</button></th>
                        </tr>)
                    : null
                }
                </tbody>
              </table><br /><br />
              
            </div>
            </div>
        );
    }
}

export default prikazAsistenta

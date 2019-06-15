import React, {Component} from "react";
import InterfejsUredjivanjeClanovaGrupe from "./InterfejsUredjivanjeClanovaGrupe";
import Lista  from './prikazListe';
import './bootstrapflatly.css';
import './App.css'

class UnosInformacija extends Component {
    constructor(props) {
      super(props);
      this.state={
        forma:"null",
        korisnik:props.korisnik,
        predmet:props.predmet,
        naziv:"",
        opis:"",
        studenti:[]
      }
  
      this.handleChange = this.handleChange.bind(this);
     this.uredjivanjeClanova=this.uredjivanjeClanova.bind(this);
     this.lista=this.lista.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    /*handleSubmit(event) {
      alert('Uspjesan unos:  ' + this.state.value);
      event.preventDefault();

      onSubmit={this.handleSubmit}
    }*/
  
    render() {
      if(this.state.forma=="null") {
      return (
        <div className="card" style={{float: "left", width:"100%"}}>
          <div class="card-body">
      
          <h4 class="card-title" style={{textAlign:"left"}}>Unos informacija</h4>
          <h6 class="card-subtitle mb-2 text-muted" style={{textAlign:"left"}}>Unijeti potrebne informacije za opis projekta</h6> 
          <br/>
          <label class="col-form-label" style={{float:"left"}}>Naziv projektne grupe:</label>
          <br/>
          <input type="text" id="naziv" className="form-control inputText"  style={{textAlign:"left"}} />
          <br/>
          {/*<input type="submit" value="Submit" />*/}
          <button className="btn btn-primary" style={{float:"right", margin:"10px"}} onClick={this.uredjivanjeClanova}>Dalje</button>
          
        </div>
      </div>
      );
    }
     else if (this.state.forma=="uredjivanjeClanova") return (
        <InterfejsUredjivanjeClanovaGrupe studentID={this.state.korisnik} 
        projektID={this.state.predmet.projekti[0].idProjekat} 
        predmetID={this.state.predmet.id} 
        studenti={this.state.studenti}
        naziv={this.state.naziv}
        opis={this.state.opis}
        predmet={this.state.predmet}/>
        
       );

       else if(this.state.forma=="lista") return(
         <Lista/>
       );

    }
    uredjivanjeClanova(){
      var naziv=document.getElementById("naziv").value;
      var opis=document.getElementById("opis").value;

      var ajax=new XMLHttpRequest();
      var komponenta=this;
      ajax.onreadystatechange=function(){
          if(ajax.readyState==4 && ajax.status=="200"){
              var tekst=ajax.responseText;
              if(tekst.length==0) return;
              var json=JSON.parse(tekst); 
              komponenta.setState(state=>({
                forma:"uredjivanjeClanova",
                studenti:json,
                naziv:naziv,
                opis:opis}));
          }
          else if(ajax.status>=500){

          }
      }
      ajax.open("GET","https://si-mike-2019.herokuapp.com/services/group/getProjectStudents/"+this.state.predmet.id,true);
      ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      ajax.send();
    }
    lista() {
      this.setState({forma:"lista"});
    }
  }
 

  export default UnosInformacija;
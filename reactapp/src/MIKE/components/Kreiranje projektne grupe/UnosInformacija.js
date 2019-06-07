import React from "react";
import InterfejsUredjivanjeClanovaGrupe from "./InterfejsUredjivanjeClanovaGrupe";
import Lista  from './prikazListe';
import './bootstrapflatly.css';

class UnosInformacija extends React.Component {
    constructor(props) {
      super(props);
      this.state={
        forma:"null"
      }
  
      this.handleChange = this.handleChange.bind(this);
     // this.handleSubmit = this.handleSubmit.bind(this);
     this.uredjivanjeClanova=this.uredjivanjeClanova.bind(this);
     this.sacuvajPromjene=this.sacuvajPromjene.bind(this);
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
        <div className="bs-component">
        <form >
          <h3>Unos informacija:</h3>
          
          <label className="custom-control-label">Naziv projektne grupe:</label>
          <input type="text" className="form-control inputText" style={{width: '400px'}} value={this.state.value} onChange={this.handleChange} />
          <br/>
          <label className="custom-control-label"> Opis projekta:</label>
          <input type="text" className="form-control inputText" style={{width: '400px'}} value={this.state.value} onChange={this.handleChange} />
          <br/> <br/>
          {/*<input type="submit" value="Submit" />*/}
         
           <button className="btn btn-primary" onClick={this.sacuvajPromjene}>Unesi</button>
          <button className="btn btn-primary" onClick={this.uredjivanjeClanova}>Dalje</button>
        </form>
        
         {/* <InterfejsUredjivanjeClanovaGrupe studentID={1} projektID={29}/>
         
        </form>
         <IzborVodje/>
      </div> */}
      </div>
      );
    }
     else if (this.state.forma=="uredjivanjeClanova") return (
        <InterfejsUredjivanjeClanovaGrupe studentID={1} projektID={29}/>
        
       );

       else if(this.state.forma=="lista") return(
         <Lista/>
       );

    }
    uredjivanjeClanova(){
      this.setState({forma:"uredjivanjeClanova"});
    }
    sacuvajPromjene(){
      alert("Sacuvano!");
    }
    lista() {
      this.setState({forma:"lista"});
    }
  }
 

  export default UnosInformacija;
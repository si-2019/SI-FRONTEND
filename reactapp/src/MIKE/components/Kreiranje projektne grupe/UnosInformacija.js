import React from "react";
import InterfejsUredjivanjeClanovaGrupe from "./InterfejsUredjivanjeClanovaGrupe";

class UnosInformacija extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Uspjesan unos:  ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <br/>
          <p>Naziv projektne grupe:</p> 
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <br/>
          <p>Opis projekta:</p>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <br/> <br/>
          {/*<input type="submit" value="Submit" />*/}
          <InterfejsUredjivanjeClanovaGrupe studentID={1} projektID={29}/>
        </form>
      );
    }
  }

  export default UnosInformacija;
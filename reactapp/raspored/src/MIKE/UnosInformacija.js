import React from "react";

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
        <form onSubmit={this.handleSubmit} >
          <label class = "text">
            Naziv projekta:
          </label> 
            <input type="text" value={this.state.value} onChange={this.handleChange} /> <br/>
          <br/>
          <label class = "text">
            Opis projekta:
          </label>
            <input type="text" value={this.state.value} onChange={this.handleChange} /> <br/>
          <br/>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default UnosInformacija;
import React, { Component } from 'react';
import './style.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anketaZaPredmet: true
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return ( 
      <div style={{padding: '25px'}}>
        <h1>Kreiranje ankete</h1>
        <hr/>
        <h5>Odaberite vrstu ankete:</h5>
        <form>
          <div class="custom-control custom-radio">
            <input type="radio" id="customRadio1" name="vrstaAnketeRadio" value="javna anketa" class="custom-control-input"/>
            <label class="custom-control-label" for="customRadio1">Javna anketa</label>
          </div>
          <div class="custom-control custom-radio">
            <input type="radio" id="customRadio2" name="vrstaAnketeRadio" value="anketa za predmet" class="custom-control-input" />
            <label class="custom-control-label" for="customRadio2">Anketa za predmet</label>
          </div>
          <div class="custom-control custom-radio">
            <input type="radio" id="customRadio3" name="vrstaAnketeRadio" value="anketa za sve predmete"class="custom-control-input" />
            <label class="custom-control-label" for="customRadio3">Anketa za sve predmete</label>
          </div>
          <hr/>
            <input
            name="anketaZaPredmet"
            type="checkbox"
            checked={this.state.anketaZaPredmet}
            onChange={this.handleInputChange} />
            <label for="customCheck1">Anketa za predmet</label>
        
          { !this.state.anketaZaPredmet || (
            <div class="form-group">
              <br/>
              <label for="exampleSelect1">Predmet</label>
              <select class="form-control" id="exampleSelect1">
                <option>ARM</option>
                <option>SI</option>
                <option>OOI</option>
                <option>DM</option>
                <option>ASP</option>
              </select>
            </div>
            ) 
          }
        </form>
        <hr/>
      </div>
    );
  }
}

export default App;

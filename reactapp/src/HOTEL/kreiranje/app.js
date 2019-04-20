import React, { Component } from 'react';

class App extends Component {
  render() {
    return ( 
      <div className="App" style={{padding: '25px'}}>
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
        </form>
        <hr/>
      </div>
    );
  }
}

export default App;

import React from 'react';
import './AppDelta.css';
import { BrowserRouter, Route } from "react-router-dom";
import Predmet from "./components/Predmet/Predmet";
import ListaPredmeta from "./components/ListaPredmeta/ListaPredmeta"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeContentId: 0,
      IDaktivnog: 0,
      //DODANO JE OVO
      open: false,  //open pokazuje da li formu treba prikazati ili ne
      activeContentId: 1
    };
  }

  IdPredmetaZaPrikazivanje = (id) => {
    this.setState({
      IDaktivnog: id
    })
    console.log(id);
  };



  onChangeActiveId = (id) => {
    this.setState({
      activeContentId: id
    })
  };

  render() {
    
    return (
      <div>
        <div className="App">

          <div className="row" >

            <div id = "main">
              <div id = "left">
                <ListaPredmeta triggerChangeActiveId = {this.onChangeActiveId} idAktivnog = {this.IdPredmetaZaPrikazivanje}/>
              </div>
              <div id = "right">            
              <div
              id="prviPredmet"
              style={{ display: this.state.activeContentId == 1 ? 'inherit' : 'none' }}
            ><Predmet idPredmeta={this.state.IDaktivnog}/>
            </div>
            <div
              id="drugiPredmet"
              style={{ display: this.state.activeContentId == 2 ? 'inherit' : 'none' }}
            > <Predmet idPredmeta={this.state.IDaktivnog}/>
            </div>
            <div
              id="treciPredmet"
              style={{ display: this.state.activeContentId == 3 ? 'inherit' : 'none' }}
            > <Predmet idPredmeta={this.state.IDaktivnog}/>
            </div>

            <div
              id="cetvrtiPredmet"
              style={{ display: this.state.activeContentId == 4 ? 'inherit' : 'none' }}
            > <Predmet idPredmeta={this.state.IDaktivnog}/>
            </div>
              
              <div
              id="petiPredmet"
              style={{ display: this.state.activeContentId == 5 ? 'inherit' : 'none' }}
            >
              <Predmet idPredmeta={this.state.IDaktivnog}/>
            </div>
              </div>
            </div>

          </div>    

        </div>
      </div>
    );
  }
}

export default App;
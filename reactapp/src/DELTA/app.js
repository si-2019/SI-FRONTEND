import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { Redirect } from 'react-router-dom';
import Predmet from "./components/Predmet";

class App extends React.Component {
  constructor(props) {
    super(props)
    const token = localStorage.getItem("token")

    let logiran = true
    if(token == null) {
      logiran = false
    }

    this.state = {
      korisnickoIme: '',
      sifra: '',
      logiran
    }
  }

  componentDidMount() {
    if(this.state.logiran == true) {
      //ubaciti backend provjeru validnosti tokena
      return <Redirect to="/Delta" />
    }
    else{
        return <Redirect to="/Romeo" />
    }
  }
  //provjera tokena na frontendu, dio za backend uraditi tj. dio vezan za validnost tokena

  render() {
    return (
      <div className="container">
        <h1>Predmeti:</h1>
        <BrowserRouter>
          <Route path="/delta" exact component={Predmet} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
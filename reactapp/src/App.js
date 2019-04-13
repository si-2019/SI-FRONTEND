import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Predmet from './Predmet';
import Nav from 'react-bootstrap/Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <h1>Početna stranica</h1>

        <Nav className="mr-auto">
            <Nav.Link href="predmet">Predmet</Nav.Link>
        </Nav>
        <Predmet/>
        <Footer/>
      </div>
    );
  }
}

export default App;

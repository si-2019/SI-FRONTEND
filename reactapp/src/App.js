import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import PredmetiSaDrugihSemestara from'./components/predmetiSaDrugihSemestara';
import SpisakProfesora from './components/spisakProfesora';
import NepolozeniPredmeti from './components/spisakNepolozenihPredmeta';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>Tareka cekamo</header>
        <Container>
        <Row>
          <Col> <PredmetiSaDrugihSemestara></PredmetiSaDrugihSemestara> </Col>
          <Col> <SpisakProfesora></SpisakProfesora></Col>
          <Col> <NepolozeniPredmeti></NepolozeniPredmeti></Col>
        </Row>
        <Row>
          <Col>Ilma</Col>
          <Col>Azra</Col>
          <Col>Ferhad</Col>
        </Row>
        <Row>
          <Col>Belmin</Col>
          <Col>Merima</Col>
          <Col>ne koristimo sad</Col>
        </Row>
        <Row>
          <Col>ne koristimo sad</Col>
          <Col>ne koristimo sad</Col>
          <Col>ne koristimo sad</Col>
        </Row>
      </Container>
      <footer> Footer </footer>
      </div>
    );
  }
}

export default App;

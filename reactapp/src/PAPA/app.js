import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Predmet from './komponente/Predmet.js'
import Obavijestenja from './komponente/Obavjestenja';



class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Predmet />
          </Col>
          <Col>
            <Obavijestenja/>
          </Col>
        </Row>
        <Row>
          <Col>
            Calendar 
          </Col>
        </Row>
        <Row>
          <Col>Graf</Col>
          <Col>Graf</Col>
          <Col>Graf</Col>
        </Row>
      </Container>
    );
  }
}

export default App;
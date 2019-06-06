import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TabelaTeme from './TabelaTeme.js';
import Button from 'react-bootstrap/Button';

class TemeZavrsnih extends Component {
  
  render() {
    return (
      <div className="TemeZavrsnih">
        <Header isPocetna={false}/>
        <Container fluid>
          <Row>
            <Col style={{textAlign: "left"}}>
            <br></br>
            <h4>Pregled tema za završne radove</h4>
            <br></br>
            </Col> 
          </Row>
          <Row>
            <Col style={{textAlign: "center"}}>
              <TabelaTeme />
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col style={{textAlign: "center"}}>
              <Button variant="primary" href='novaTema'>Nova tema</Button>
            </Col>
          </Row>
        </Container>
        <Footer/>
      </div>

    );

  }
}


export default TemeZavrsnih;

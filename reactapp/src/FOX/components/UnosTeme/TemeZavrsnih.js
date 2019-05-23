import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TabelaTeme from './TabelaTeme.js';

class StranicaPredmeta extends Component {
  render() {
    return (
      <div className="TemeZavrsnih">
        <Container fluid>
          <Row>
            <Col>
              <Header isPocetna={false}/>
            </Col>
          </Row>
          <Row>
            <Col>
            <br></br>
            <h4>Pregled tema za završne radove na predmetu Predmet</h4>
            <br></br>
            </Col> 
          </Row>
          <Row>
            <Col></Col>
            <Col>
              <TabelaTeme />
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Footer/>
          </Row>
        </Container>
        
      </div>

    );

  }
}


export default StranicaPredmeta;

import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import TabelaStudenti from '../TabelaStudenti/TabelaStudenti';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class StranicaPredmeta extends Component {
  render() {
    return (
      <div className="StranicaPredmeta">
        <Container fluid>
          <Row>
            <Col>
              <Header isPocetna={false}/>
            </Col>
          </Row>
          <Row>
            <Col>
            <br></br>
            <h1>Stranica predmeta</h1>
            <br></br>
            </Col> 
          </Row>
          <Row>
            <Col></Col>
            <Col>
              <TabelaStudenti/>
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
